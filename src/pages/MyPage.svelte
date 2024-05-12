<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import {userStore} from "../Store.js";

    const logout = () => {
        window.localStorage.removeItem('token');
        userStore.set(null);

    };
</script>

<Header />

<main>
    <div> 나의 당근 </div>
    <button on:click={logout}> 로그아웃</button>
</main>

<Footer urlLocation="my"/>