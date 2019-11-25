import { Exercise } from './exercise'

export interface Complex {
    id: number,
    name: string,
    due_date: Date,
    done: boolean,
    exercises: Exercise[]
}
