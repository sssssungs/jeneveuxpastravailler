import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { Section } from 'src/section/section.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Task, Section])],
	providers: [TaskService, TaskResolver],
})
export class TaskModule {}
