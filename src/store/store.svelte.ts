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
        desc: 'The peaks, as if carved from turquoise and ice, pierce the gloomy sky. The stone, shaped by the winds, cold and silent, holds centuries-old tranquility. The air here rings with purity and silence, broken only by the distant cry of an eagle. This is a realm of eternity, where time flows differently.',
        img: 'img/wp-1.jpg',
        tasks: [
            {id: 'task-1', title: 'task1', completed: true},
            {id: 'task-2', title: 'task2', completed: true},
            {id: 'task-3', title: 'task3', completed: true},
            {id: 'task-4', title: 'task4', completed: false}
        ]
    },
    {
        id: 'goal-2',
        title: 'Information',
        desc: 'Sunlight struggles to pierce through the emerald canopy, turning into golden dust particles that dance in the stagnant, humid air. Centuries-old pines and firs reach up to the sky, while beneath your feet, a carpet of moss and needles gently springs, smelling of mushrooms and damp earth. Here reigns a deep, living silence, full of the whisper of leaves and invisible life.',
        img: 'img/wp-3.jpg',
        tasks: [
            {id: 'task-1', title: 'task1', completed: false},
            {id: 'task-2', title: 'task2', completed: false},
            {id: 'task-3', title: 'task3', completed: false},
            {id: 'task-4', title: 'task4', completed: false}
        ]
    },
    {
        id: 'goal-3',
        title: 'Plans',
        desc: 'A meadow, like a rainbow fallen from the sky and scattered across the grass. White daisies, blue cornflowers, and scarlet poppies sway to the rhythm of a gentle breeze, filling the air with a rich, intoxicating fragrance. The air hums with the buzzing of bees and the flutter of butterfly wings. This is a place where life itself celebrates its bright, carefree beauty.',
        img: 'img/wp-2.jpg',
        tasks: [
            {id: 'task-1', title: 'task1', completed: true},
            {id: 'task-2', title: 'task2', completed: false},
            {id: 'task-3', title: 'task3', completed: true},
            {id: 'task-4', title: 'task4', completed: false}
        ]
    }
])