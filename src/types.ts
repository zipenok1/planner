export interface IGoal{
    id: string,
    title: string,
    img: string,
    tasks: ITask[]
}

export interface ITask{
    id: string,
    title: string,
    completed: boolean
}