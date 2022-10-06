import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task';
import { Task } from './tasks.entity';
import { TasksServices } from './tasks.service';

@Controller('tasks')
export class TasksContoroller {
  constructor(private readonly TasksServices: TasksServices) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.TasksServices.create(createTaskDto);
  }
}
