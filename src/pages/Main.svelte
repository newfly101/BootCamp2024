<script>
    import Footer from "../components/Footer.svelte";
    import Header from "../components/Header.svelte";
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