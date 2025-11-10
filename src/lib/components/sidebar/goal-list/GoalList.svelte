<script lang="ts">
  import { CirclePlus } from "@lucide/svelte";
</script>

<div>
    <div class="flex items-center justify-between mb-4 p-layout">
        <span>Goals</span>
        <button class="opacity-70 hover:opacity-100 transition-opacity">
            <CirclePlus size={20}/>
        </button>
    </div>
    <ul class="mx-3">
        <li>
            <button class="w-full py-2 px-1 rounded-lg flex items-center justify-between">
                <span class="flex items-center gap-2">
                    <img src="" alt="">
                    <span>Create Growth</span>
                </span>
                <span class="text-[#777] text-sm">75%</span>
            </button>
        </li>
    </ul>
</div>