import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './task.entity';
import { CreateTaskDTO, TaskDTO } from 'src/graphql';
import { StateService } from 'src/state/state.service';
import { CategoryService } from 'src/category/category.service';
import { State as StateDTO } from 'src/graphql';
import { Category } from 'src/category/category.entity';

@Resolver('Task')
export class TaskResolver {

    constructor(private taskService: TaskService, private stateService: StateService,
        private categoryService: CategoryService) { }

    @Query()
    tasks(): Promise<Task[]> {
        return this.taskService.findAll();
    }

    @Mutation()
    async createTask(@Args('task') task: CreateTaskDTO): Promise<TaskDTO> {
        return this.taskService.create(task)
            .then(t => this.toTaskDTO(t))
            .catch((error) => { return { error: error } });
    }

    toTaskDTO(t: Task): TaskDTO {
        return {
            task: {
                id: t.id,
                title: t.title,
                description: t.description,
                createdAt: t.createdAt.toDateString(),
                category: t.category,
                state: t.state
            }
        }
    }

    @ResolveField()
    async state(@Parent() task: Task): Promise<StateDTO> {
        return this.stateService.findOneById(task.state?.id);
    }

    @ResolveField()
    async category(@Parent() task: Task): Promise<Category> {
        if (task.category?.id === undefined) {
            return undefined;
        }
        return this.categoryService.findById(task.category?.id);
    }
}
