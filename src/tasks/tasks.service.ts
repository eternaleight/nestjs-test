import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";
import { Task } from "./task.entity";
import { Repository } from "typeorm";

@Injectable()
export class TaskServices {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ){}
}
