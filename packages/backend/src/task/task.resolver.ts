import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { TaskDto } from './task.dto';
import { TaskChange, TaskInput, TaskUpdateInput } from './task.input';

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
	async updateTaskContent(@Args('newData') newData: TaskUpdateInput) {
		return await this.taskService.updateTaskContent(newData);
	}

	@Mutation(() => Boolean)
	async deleteTask(@Args('id') id: number) {
		return await this.taskService.deleteTask(id);
	}

	@Mutation(() => [TaskDto])
	async changeTaskOrder(@Args('changeObject') changeObject: TaskChange) {
		return await this.taskService.changeTask(changeObject);
	}
}
