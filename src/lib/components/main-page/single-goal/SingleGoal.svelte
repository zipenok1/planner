<script lang="ts">
  import { activGoal } from "../../../../store/activStore.svelte";

</script>

<div class="py-layout max-w-5/6 mx-auto">
    <img 
        src={activGoal.goal?.img} 
        alt={activGoal.goal?.title}
        class="rounded-lg mb-3"
    >
    <h1 class="border-b border-border pb-3 text-2xl font-medium mb-4">
        {activGoal.goal?.title}
    </h1>
    <span>
        {activGoal.goal?.desc}
    </span>
</div>