import type { IGoal } from "../../types"

export function calcProgress(goal: IGoal): string {
    const totalTasks = goal.tasks.length
    if(totalTasks === 0) return '0'
    
    const completedTasks = goal.tasks.filter((task) => task.completed).length
    return `${completedTasks}/${totalTasks}`
}