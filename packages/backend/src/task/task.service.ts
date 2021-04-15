import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskChange, TaskInput, TaskUpdateInput } from './task.input';
import { Section } from '../section/section.entity';
import { SaveTaskDto } from './task.dto';
import { SectionDto } from 'src/section/section.dto';

@Injectable()
export class TaskService {
	constructor(
		@InjectRepository(Task) private readonly taskRepository: Repository<Task>,
		@InjectRepository(Section)
		private readonly sectionRepository: Repository<Section>,
	) {}

	createTask = async (newData: TaskInput) => {
		const sectionInfo = await this.sectionRepository.find({ where: { id: newData.sectionId } });
		let saveSection;
		const newSection: SectionDto = {
			name: '',
			order: sectionInfo.length + 1,
		};
		if (sectionInfo.length > 0) {
			saveSection = sectionInfo[0];
		} else {
			saveSection = await this.sectionRepository.save(newSection);
		}
		const list = await this.taskRepository.find({ order: { order: 'DESC' } });
		const max = list?.[0]?.order || 0;
		const saveData: SaveTaskDto = {
			section: saveSection,
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
