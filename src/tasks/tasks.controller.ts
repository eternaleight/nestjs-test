import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly TasksServices: TasksService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.TasksServices.create(createTaskDto);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.TasksServices.findAll()
  }

  @Get(':id')
  findOne(@Param('id')id: string): Promise<Task> {
    return this.TasksServices.findOne(id)
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ):Promise<Task> {
    return this.TasksServices.update(id, updateTaskDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.TasksServices.delete(id);
  }

}
