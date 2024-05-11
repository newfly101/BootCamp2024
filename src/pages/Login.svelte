<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
</script>

<Header />

<main>
    <form id="login-form" method="POST">
        <div>
            <label for="userId">id</label>
            <input id="userId" name="userId" type="text" placeholder="아이디 입력" required />
        </div>
        <div>
            <label for="password">password</label>
            <input id="password" name="password" type="password" placeholder="비밀번호 입력" required/>
        </div>
        <div>
            <button type="submit">로그인</button>
        </div>
    </form>

    <div id="info"></div>
</main>

<Footer urlLocation="login"/>