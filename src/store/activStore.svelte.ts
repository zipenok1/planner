import type { IGoal } from "../types"
import { goalsState } from "./store.svelte"

export const activGoal = $state<{goal: IGoal | null}>({
    goal: goalsState.value[0]
})