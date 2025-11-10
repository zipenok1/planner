<script lang="ts">
  import { Ellipsis, Plus, Search, Users } from "@lucide/svelte";
  import IconCircle from "./IconCircle.svelte";
</script>

<header class="flex items-center justify-between border-b border-border p-layout">
    <div class="bg-[#222222] w-xs flex items-center gap-2 rounded px-2 py-2">
        <Search class='opacity-50' size={20}/>
        <input 
            class="bg-transparent outline-0 w-full"
            type="search"
            placeholder="Search"
        >
    </div>
    <div class="flex items-center gap-2">
        <IconCircle Icon={Users}/>
        <IconCircle Icon={Plus}/>
        <IconCircle Icon={Ellipsis}/>
    </div>
</header>
