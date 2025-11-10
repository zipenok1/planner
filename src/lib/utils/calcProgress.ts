import type { IGoal } from "../../types"

export function calcProgress(goal: IGoal): number {
    const totalTasks = goal.tasks.length
    if(totalTasks === 0) return 0
    
    const completedTasks = goal.tasks.filter((task) => task.completed).length
    return Math.round((completedTasks / totalTasks) * 100) 
}