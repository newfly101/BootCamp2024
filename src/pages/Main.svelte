<script>
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";

    import { getDatabase, ref, onValue } from "firebase/database";

    // 반응형으로 rendering 해주는 것을 선언해줄때
    // $: 로 사용
    $: items = [];
    const db = getDatabase();
    const itemsList = ref(db, 'items/');
    onValue(itemsList, (snapshot) => {
        const data = snapshot.val();
        items = Object.values(data);
        // console.log(Object.values(data));
    });
</script>

<Header />

<main>
    <!--        default setting-->
            <div class="item-list">
                <div class="item-list__img">
                    <img src="/assets/main/image.svg" alt="item-list" />
                </div>
                <div class="item-list__info">
                    <div class="item-list__info-title">게이밍 pc 팝니다</div>
                    <div class="item-list__info-meta">역삼동 19초 전</div>
                    <div class="item-list__info-price">100만원</div>
                </div>
            </div>
    <a class="write-btn" href="/#/write">+글쓰기</a>
</main>

<Footer urlLocation="home"/>

<style>
    /*@import '../css/reset.css';*/
    @import '../css/main.css';
</style>