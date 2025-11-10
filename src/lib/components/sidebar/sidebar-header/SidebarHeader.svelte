<script lang="ts">
  import { PanelRightOpen } from "@lucide/svelte";
</script>

<header class="flex items-center justify-between p-layout border-b border-border">
    <div class="flex items-center gap-3">
        <img 
          src="/avatar-sv.png" 
          alt="avatar" 
          class="h-10 w-10 rounded-full"
        >
        <span>Egor Pupkin</span>
    </div>
    
    <button
      class="opacity-60 transition-opacity hover:opacity-100"
    ><PanelRightOpen/></button>
</header>

