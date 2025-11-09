<script lang="ts">
  import MainPage from "./lib/components/main-page/MainPage.svelte";
  import Sidebar from "./lib/components/sidebar/Sidebar.svelte";
</script>

<main class="flex h-screen">
  <div class="m-auto w-8/12 grid grid-cols-[.8fr_2fr] bg-[#181818] shadow">
    <Sidebar/>
    <MainPage/>
  </div>
</main>