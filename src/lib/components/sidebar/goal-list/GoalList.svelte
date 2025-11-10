<script lang="ts">
  import { CirclePlus } from "@lucide/svelte";
  import { goalsState } from "../../../../store.svelte";
  import { calcProgress } from "../../../utils/calcProgress";
</script>

<div>
    <div class="flex items-center justify-between mb-4 p-layout">
        <span>Goals</span>
        <button class="opacity-70 hover:opacity-100 transition-opacity">
            <CirclePlus size={20}/>
        </button>
    </div>

    <ul class="mx-3">
        {#each goalsState.value as goal}
            <li>
                <button class="w-full py-2 px-1 rounded-lg flex items-center justify-between">
                    <span class="flex items-center gap-2">
                        <img 
                            class="w-10 h-8 object-cover rounded-lg"
                            src={goal.img}
                            alt={goal.title}
                        >
                        <span>{goal.title}</span>
                    </span>
                    <span class="text-[#777] text-sm">{calcProgress(goal)}%</span>
                </button>
            </li>
        {/each}
    </ul>
</div>