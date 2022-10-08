import { InjectRepository } from '@nestjs/typeorm'
import { Injectable } from '@nestjs/common'
import { Task } from './tasks.entity'
import { DeleteResult, Repository } from 'typeorm'
import { CreateTaskDto } from './dto/create-task.dto'
import { UpdateTaskDto } from './dto/update-task.dto'

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.save(createTaskDto);
  }
  findAll(): Promise<Task[]> {
    return this.tasksRepository.find()
  }

  findOne(id: string): Promise<Task> {
    return this.tasksRepository.findOne({ where: { id: Number(id) } })
  }
  async update(id: string, updateTaskDto: UpdateTaskDto): Promise<Task> {
    const task = await this.tasksRepository.findOne({
      where: { id: Number(id) },
    });
    task.name = updateTaskDto.name;
    task.isCompleted = updateTaskDto.isCompleted;
    return this.tasksRepository.save(task)
  }
  delete(id: string): Promise<DeleteResult> {
   return this.tasksRepository.delete(id);
 }
}
