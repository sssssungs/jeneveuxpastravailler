import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TaskService {
	constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {}

	createTask = async (newData: TaskDto) => {
		return await this.taskRepository.save(newData);
	};

	getTasks = async () => {
		return await this.taskRepository.find({ order: { createdAt: 'DESC' } });
	};

	updateTask = async (newData: TaskDto) => {
		const newTask = await this.taskRepository.findOne(newData.id);
		newTask.content = newData.content;
		return await this.taskRepository.save(newTask);
	};

	deleteTask = async (id: number) => {
		const foundTask = await this.taskRepository.findOne(id);
		return await this.taskRepository.remove(foundTask);
	};
}
