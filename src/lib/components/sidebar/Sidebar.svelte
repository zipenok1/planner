<script lang="ts">
  import SideabarCalendar from "./calendar/SideabarCalendar.svelte";
  import GoalList from "./goal-list/GoalList.svelte";
  import SidebarHeader from "./sidebar-header/SidebarHeader.svelte";
</script>

<aside class="border-r border-border">
    <SidebarHeader/>
    <SideabarCalendar/>
    <GoalList/>
</aside>