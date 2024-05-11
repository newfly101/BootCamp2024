<!-- +Header.svelte -->
<script>
    let hour = new Date().getHours().toString().padStart(2,'0');
    let min = new Date().getMinutes().toString().padStart(2,'0');
    let sec = new Date().getSeconds().toString().padStart(2,'0');
    function getTime() {
        const thisTime = new Date();
        hour = thisTime.getHours().toString().padStart(2,'0');
        min = thisTime.getMinutes().toString().padStart(2,'0');
        sec = thisTime.getSeconds().toString().padStart(2,'0');
    }

    setInterval(getTime, 1000);


</script>


<div class="info-bar">
    <div class="info-bar__time">{hour}:{min}:{sec}</div>
    <div class="info-bar__icons">
        <img src="/assets/header/chart-bar.svg" alt="chart-bar" />
        <img src="/assets/header/wi-fi.svg" alt="wi-fi" />
        <img src="/assets/header/battery.svg" alt="battery" />
    </div>
</div>
<div class="menu-bar">
    <div class="menu-bar__location">
        <div>역삼1동</div>
        <div class="menu-bar__location-icon">
            <img src="/assets/header/arrow.svg" alt="arrow" />
        </div>
    </div>
    <div class="menu-bar__icons">
        <img src="/assets/header/search.svg" alt="search" />
        <img src="/assets/header/menu.svg" alt="menu" />
        <img src="/assets/header/alert.svg" alt="alert" />
    </div>
</div>

<style>
    @import '../css/header.css';
</style>