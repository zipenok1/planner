<script lang="ts">
  import type { IconProps } from "@lucide/svelte";
  import type { Component } from "svelte";
  let {Icon}: {Icon: Component<IconProps>} = $props()
</script>

<button class="flex h-5 w-5 items-center justify-center rounded-full border border-white opacity-70 hover:opacity-100 transition-opacity">
    <Icon size={15}/>
</button>