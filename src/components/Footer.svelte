<script>
    // 전달 받을 값
    export let urlLocation;

    const moveToHome = () => {
        window.location.hash = "/";
    }

</script>

<!-- +Footer.svelte -->
    <div class="footer-block">
        <div class="footer-icons">
            <div class="footer-icons__img">
                <a href="/" >
                    {#if urlLocation==='home'}
                        <img src="/assets/footer/home-select.svg" alt="home" />
                    {:else}
                        <img src="/assets/footer/home-normal.svg" alt="home" />
                    {/if}
                </a>
            </div>
            <div class="footer-icons__desc">
                홈
            </div>
        </div>

        <div class="footer-icons">
            <div class="footer-icons__img">
                <img src="/assets/footer/country-normal.svg" alt="country" />
            </div>
            <div class="footer-icons__desc">
                동네생활
            </div>
        </div>

        <div class="footer-icons">
            <div class="footer-icons__img">
                {#if urlLocation==='location'}
                    <img src="/assets/footer/location-select.svg" alt="location" />
                {:else}
                    <img src="/assets/footer/location-normal.svg" alt="location" />
                {/if}
            </div>
            <div class="footer-icons__desc">
                내 근처
            </div>
        </div>

        <div class="footer-icons" id="chatting-tap">
            <div class="footer-icons__img">
                <a href="/#/chat" >
                    {#if urlLocation==='chat'}
                        <img src="/assets/footer/chat-select.svg" alt="location" />
                    {:else}
                        <img src="/assets/footer/chat-normal.svg" alt="location" />
                    {/if}
                </a>
            </div>
            <div class="footer-icons__desc">
                채팅
            </div>
        </div>

        <div class="footer-icons">
            <div class="footer-icons__img">
                <a href="/#/my">
                    {#if urlLocation==='my'}
                        <img src="/assets/footer/user-select.svg" alt="location" />
                    {:else}
                        <img src="/assets/footer/user-normal.svg" alt="location" />
                    {/if}
                </a>
            </div>
            <div class="footer-icons__desc">
                나의당근
            </div>
        </div>
    </div>

<style>
    @import '../css/footer.css';
</style>