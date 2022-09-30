import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './tasks/tasks.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'secret',
      database: 'mydb-dev',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TaskModule,
  ],
})

export class AppModule {}
