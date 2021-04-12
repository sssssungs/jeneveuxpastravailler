import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskChange, TaskInput, TaskUpdateInput } from './task.input';

@Injectable()
export class TaskService {
	constructor(@InjectRepository(Task) private readonly taskRepository: Repository<Task>) {}

	createTask = async (newData: TaskInput) => {
		const list = await this.taskRepository.find({ order: { order: 'DESC' } });
		const max = list?.[0].order || 0;
		const saveData: TaskDto = {
			sectionId: newData.sectionId,
			order: max + 1,
			content: newData.content,
		};
		return await this.taskRepository.save(saveData);
	};

	getTasks = async () => {
		return await this.taskRepository.find({ order: { order: 'DESC' } });
	};

	updateTaskContent = async (newData: TaskUpdateInput) => {
		const newTask = await this.taskRepository.findOne(newData.id);
		newTask.content = newData.content;
		return await this.taskRepository.save(newTask);
	};

	deleteTask = async (id: number) => {
		const foundTask = await this.taskRepository.findOne(id);
		await this.taskRepository.remove(foundTask);
		return true;
	};

	changeTask = async (changeObject: TaskChange) => {
		// const { sectionId, selectOrder, targetOrder } = changeObject;
		// const selectTask = await this.taskRepository.findOne({ sectionId, order: selectOrder });
		// const targetTask = await this.taskRepository.findOne({ sectionId, order: targetOrder });
		// const newSelectTask = {
		// 	id: selectTask.id,
		// 	content: selectTask.content,
		// 	order: targetTask.order,
		// 	sectionId,
		// };
		// const newTargetTask = {
		// 	id: targetTask.id,
		// 	content: targetTask.content,
		// 	order: selectTask.order,
		// 	sectionId,
		// };
		//
		// await this.taskRepository.save(newSelectTask);
		// await this.taskRepository.save(newTargetTask);
		// return await this.taskRepository.find({ order: { order: 'DESC' } });
	};
}
