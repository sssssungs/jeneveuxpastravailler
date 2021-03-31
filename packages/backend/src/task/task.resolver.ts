import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';
import { TaskInput, TaskUpdateInput } from './task.input';

@Resolver()
export class TaskResolver {
	constructor(private readonly taskService: TaskService) {}

	@Query(() => [TaskDto])
	async getTasks() {
		return await this.taskService.getTasks();
	}

	@Mutation(() => TaskDto)
	async createTask(@Args('newData') newData: TaskInput) {
		return await this.taskService.createTask(newData);
	}

	@Mutation(() => TaskDto)
	async updateTask(@Args('newData') newData: TaskUpdateInput) {
		return await this.taskService.updateTask(newData);
	}

	@Mutation(() => TaskDto)
	async deleteTask(@Args('id') id: number) {
		return await this.taskService.deleteTask(id);
	}
}
