
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateTaskDTO {
    title: string;
    category?: CategoryDTO;
    description?: string;
}

export interface UpdateTaskDTO {
    id: string;
    title: string;
    state: StateInput;
    category?: CategoryDTO;
    description?: string;
}

export interface CategoryDTO {
    id?: string;
    name?: string;
    color?: string;
}

export interface StateInput {
    id: string;
}

export interface Task {
    id: number;
    title: string;
    state: State;
    category?: Category;
    description?: string;
    createdAt?: string;
}

export interface State {
    id: number;
    name: string;
    index?: number;
}

export interface Category {
    id: number;
    name: string;
    color: string;
}

export interface IQuery {
    tasks(): Task[] | Promise<Task[]>;
    task(id: string): Task | Promise<Task>;
    categories(): Category[] | Promise<Category[]>;
    states(): State[] | Promise<State[]>;
}

export interface IMutation {
    createTask(task: CreateTaskDTO): TaskDTO | Promise<TaskDTO>;
    updateTask(task: UpdateTaskDTO): TaskDTO | Promise<TaskDTO>;
}

export interface TaskDTO {
    error?: string;
    task?: Task;
}
