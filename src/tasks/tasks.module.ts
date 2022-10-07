import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {TasksContoroller} from './tasks.controller';
import { Task } from './tasks.entity';
import {TasksServices} from './tasks.service';

@Module({
  imports: [TypeOrmModule.forFeature([Task])],
  providers: [TasksServices],
  controllers: [TasksContoroller],
})

export class TasksModule {}
