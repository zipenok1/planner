<script lang="ts">
  import { Ellipsis, Plus, Search, Users } from "@lucide/svelte";
  import IconCircle from "./IconCircle.svelte";
  let searchValue = $state('')

  const handelSearch = (event: KeyboardEvent) => {
    if(event.key === 'Enter'){
        console.log('посик: ', searchValue);
    }
  }
</script>

<header class="flex items-center justify-between border-b border-border p-[15px]">
    <div class="bg-[#222222] w-xs flex items-center gap-2 rounded border border-transparent px-2 py-2 
    focus-within:border-white/15 transition-colors">
        <Search class='opacity-50' size={20}/>
        <input 
            class="bg-transparent outline-0 w-full"
            type="search"
            placeholder="Search"
            bind:value={searchValue}
            onkeydown={handelSearch}
        >
    </div>
    <div class="flex items-center gap-2">
        <IconCircle Icon={Users}/>
        <IconCircle Icon={Plus}/>
        <IconCircle Icon={Ellipsis}/>
    </div>
</header>
