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


  const routes = {
    '/': Main,
    '/login': Login,
    '/signup': SignUp,
    '/write': Write,
    '/chat': Chat,
    '*': NotFound
  }
</script>

<main>
  <Router routes={routes} />
</main>


<style>

</style>
