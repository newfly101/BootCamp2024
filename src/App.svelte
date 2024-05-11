<!--  svelte-spa-router -->

<script>
  import Main from "./pages/Main.svelte";
  import Login from "./pages/Login.svelte";
  import SignUp from "./pages/SignUp.svelte";
  import Write from "./pages/Write.svelte";

  const routes = {
    '/': Main,
    '/login': Login,
    '/signup': SignUp,
    '/write': Write

  }
</script>

<main>
  <h1>Vite + Svelte</h1>
</main>

<style>

</style>
