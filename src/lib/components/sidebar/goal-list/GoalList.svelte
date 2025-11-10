<script lang="ts">
  import { CirclePlus } from "@lucide/svelte";
  import { goalsState } from "../../../../store/store.svelte";
  import { calcProgress } from "../../../utils/calcProgress";
  import { activGoal } from "../../../../store/activStore.svelte";
</script>

<div class="pb-2">
    <div class="flex items-center justify-between mb-2 p-layout">
        <span>Goals</span>
        <button class="opacity-70 hover:opacity-100 transition-opacity">
            <CirclePlus size={20}/>
        </button>
    </div>

    <ul class="mx-3">
        {#each goalsState.value as goal}
            <li class="mb-1.5">
                <button 
                    class="w-full py-2 px-1.5 rounded-lg flex items-center justify-between
                    {activGoal.goal?.id === goal.id ? 'bg-[#313131]' : 'hover:bg-[#222222]'}"
                    onclick={() => { activGoal.goal = goal }}
                >
                    <span class="flex items-center gap-2">
                        <img 
                            class="w-10 h-8 object-cover rounded-lg"
                            src={goal.img}
                            alt={goal.title}
                        >
                        <span>{goal.title}</span>
                    </span>
                    <span class="text-[#777] text-sm">{calcProgress(goal)}</span>
                </button>
            </li>
        {/each}
    </ul>
</div>