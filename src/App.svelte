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
  import {getAuth, GoogleAuthProvider, signInWithCredential} from "firebase/auth";
  import {onMount} from "svelte";

  // const provider = new GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
  //
  // let userLogin = false;

  const auth = getAuth();
  // 토큰을 바탕으로 유저 정보를 가져오고 인증한다.
  const checkLogin = async () => {
    const accessToken = window.localStorage.getItem('token');
    if (!accessToken) return;

    const credential = GoogleAuthProvider.credential(null, accessToken);

    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    userStore.set(user);
  }

  const routes = {
    '/': Main,
    '/signup': SignUp,
    '/write': Write,
    '/chat': Chat,
    '*': NotFound
  }

  // mount 될때 마다 check login을 하게됨
  // 단, 새로고침할때마다 다른 페이지에 있다면 main 페이지가 보이는 문제가 있음
  onMount(() => checkLogin())
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
