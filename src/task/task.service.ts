import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Repository  } from 'typeorm';
import { CreateTaskDTO } from 'src/graphql';
import { StateService } from 'src/state/state.service';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class TaskService {

    constructor(
        @InjectRepository(Task)
        private taskReposity: Repository<Task>,
        private stateService: StateService,
        private categoryService: CategoryService
    ) { }

    findAll(): Promise<Task[]> {
        console.log("QUERY ALL TASKS!");
        return this.taskReposity.find();
    }

    async create(createTask: CreateTaskDTO): Promise<Task> {
        let initialState = await this.stateService.findInitialState();
        if (!initialState) {
            initialState = await this.stateService.createInitialStates();
        }
        const task = new Task();
        task.title = createTask.title;
        task.description = createTask.description;
        task.createdAt = new Date();
        task.state = initialState; //

        if (createTask.category) {
            const category = createTask.category.id ? await this.categoryService.findById(+createTask.category.id) : this.categoryService.createNewCategory(createTask.category);
            task.category = category;
        }

        return this.taskReposity.save(task);    
    }

}
