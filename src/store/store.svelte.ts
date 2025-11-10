import type { IGoal } from "../types"

class PersitedStore<T> {
    value = $state<T>() as T
    
    constructor(key: string, initial: T){
        const stored = localStorage.getItem(key)
        this.value = stored ? JSON.parse(stored) : initial
        $effect.root(()=>{
            $effect(()=>{
                localStorage.setItem(key, JSON.stringify(this.value))
            })
        })
    }
}

export const goalsState = new PersitedStore<IGoal[]>('goals', [
    {
        id: 'goal-1',
        title: 'Post',
        img: 'img/wp-1.jpg',
        tasks: [
            {id: 'task-1', title: 'task1', completed: true},
            {id: 'task-2', title: 'task2', completed: false},
            {id: 'task-3', title: 'task3', completed: true},
            {id: 'task-4', title: 'task4', completed: false}
        ]
    },
    {
        id: 'goal-2',
        title: 'Information',
        img: 'img/wp-2.jpg',
        tasks: [
            {id: 'task-1', title: 'task1', completed: true},
            {id: 'task-2', title: 'task2', completed: false},
            {id: 'task-3', title: 'task3', completed: true},
            {id: 'task-4', title: 'task4', completed: false}
        ]
    },
    {
        id: 'goal-3',
        title: 'Plans',
        img: 'img/wp-3.jpg',
        tasks: [
            {id: 'task-1', title: 'task1', completed: true},
            {id: 'task-2', title: 'task2', completed: false},
            {id: 'task-3', title: 'task3', completed: true},
            {id: 'task-4', title: 'task4', completed: false}
        ]
    }
])