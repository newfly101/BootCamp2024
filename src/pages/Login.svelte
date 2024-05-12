<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
    import { userStore } from "../Store.js";

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                console.log(token, user);

                // 밖에 있는 store에 저장
                userStore.set(user);
                console.log(userStore);

            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }


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
    <button on:click={loginWithGoogle}>구글 로그인</button>
    <div id="info"></div>
    {#if $userStore}
        <div>{$userStore?.displayName} 구글 로그인 완료</div>
    {/if}
</main>

<Footer urlLocation="login"/>