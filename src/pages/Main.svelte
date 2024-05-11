<script>
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    import { getDatabase, ref, onValue} from "firebase/database";
    import {onMount} from "svelte";

    // 반응형으로 rendering 해주는 것을 선언해줄때
    // $: 로 사용
    $: items = [];
    const db = getDatabase();
    const itemsList = ref(db, 'items/');


    // 화면이 onMount 되었을 때 가끔 render이 안되는 경우가 발생하기 때문에 선언해주는 것
    // <script> 는 화면이 시작 되었을 때 1번만 실행한다.
    // 화면이 보여질 때 마다 실행하고 싶다면 onMount() 를 사용해야 한다.
    // firebase와 client가 socket으로 연결되어 있기 때문에 실시간 업데이트가 가능하다.
    onMount(() => {
        onValue(itemsList, (snapshot) => {
            const data = snapshot.val();
            items = Object.values(data);
            console.log(items);
        });
    });


</script>

<Header />

<main>
    <!--        default setting-->
        {#each items as item}
            <div class="item-list">
                <div class="item-list__img">
                    <img src={item.image} alt="item-list" />
                </div>
                <div class="item-list__info">
                    <div class="item-list__info-title">{item.title}</div>
                    <div class="item-list__info-meta">{item.place} 19초 전</div>
                    <div class="item-list__info-price">{item.price}</div>
                    <div class="item-list__info-description">{item.description}</div>
                </div>
            </div>
        {/each}
    <a class="write-btn" href="/#/write">+글쓰기</a>
</main>

<Footer urlLocation="home"/>

<style>
    /*@import '../css/reset.css';*/
    @import '../css/main.css';
</style>