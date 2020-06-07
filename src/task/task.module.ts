import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { Task } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateModule } from 'src/state/state.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  imports: [TypeOrmModule.forFeature([Task]), StateModule, CategoryModule],
  providers: [TaskService, TaskResolver]
})
export class TaskModule {}
