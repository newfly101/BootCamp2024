<!--  svelte-spa-router -->

<script>
  const routes = {
    '/': Home,

    // Using named parameters, with last being optional
    '/author/:first/:last?': Author,

    // Wildcard parameter
    '/book/*': Book,

    // Catch-all
    // This is optional, but if present it must be the last
    '*': NotFound,
  }
</script>

<main>
  <h1>Vite + Svelte</h1>
</main>

<style>

</style>
