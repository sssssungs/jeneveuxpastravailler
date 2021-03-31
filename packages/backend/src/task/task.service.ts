import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
	constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {}

	createTask = async (newData: TaskDto) => {
		console.log('newData', newData);
		return await this.taskRepository.save(newData);
	};

	getTasks = async () => {
		return await this.taskRepository.find();
	};

	updateTask = async (newData: TaskDto) => {
		console.log('update data', newData);
		const newTask = await this.taskRepository.findOne(newData.id);
		newTask.content = newData.content;
		return await this.taskRepository.save(newTask);
	};
}
