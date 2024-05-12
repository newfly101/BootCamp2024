<!--  svelte-spa-router -->

<script>
  // 모듈 방식으로 페이지를 삽입해주는 방식
  import Router from 'svelte-spa-router';
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import SignUp from "./pages/SignUp.svelte";
  import Write from "./pages/Write.svelte";
  import NotFound from "./pages/NotFound.svelte";
  import Chat from "./pages/Chat.svelte";
  import { userStore } from "./Store.js";
  import { GoogleAuthProvider } from "firebase/auth";

  // const provider = new GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //
  // let userLogin = false;

  function handleCredentialResponse(response) {
    // Build Firebase credential with the Google ID token.
    const idToken = response.credential;
    const credential = GoogleAuthProvider.credential(idToken);

    // Sign in with credential from the Google user.
    signInWithCredential(auth, credential).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The credential that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
  }





  const routes = {
    '/': Main,
    '/signup': SignUp,
    '/write': Write,
    '/chat': Chat,
    '*': NotFound
  }
</script>

<main>
  {#if !$userStore}
  <!--{#if !userLogin}-->
    <Login />
  {:else}
    <Router routes={routes} />
  {/if}
</main>


<style>

</style>
