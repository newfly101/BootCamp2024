<script>
    import ViewHeader from './third/Header.svelte';
    import ViewFooter from './third/Footer.svelte';
</script>

<ViewHeader />

<main>
    <!--        default setting-->
            <div class="item-list">
                <div class="item-list__img">
                    <img src="asset/main/image.svg" alt="image" />
                </div>
                <div class="item-list__info">
                    <div class="item-list__info-title">게이밍 pc 팝니다</div>
                    <div class="item-list__info-meta">역삼동 19초 전</div>
                    <div class="item-list__info-price">100만원</div>
                </div>
            </div>
    <a class="write-btn" href="html/write.html">+글쓰기</a>
</main>

<ViewFooter />