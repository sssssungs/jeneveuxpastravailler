import { Resolver, Mutation, Query, Args } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { GetTaskType, TaskDto } from './task.dto';
import { IdInfoInput, TaskChange, TaskInput, TaskUpdateInput } from './task.input';

@Resolver()
export class TaskResolver {
	constructor(private readonly taskService: TaskService) {}

	@Query(() => [GetTaskType])
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
	async deleteTask(@Args('idInfo') idInfo: IdInfoInput) {
		return await this.taskService.deleteTask(idInfo);
	}

	@Mutation(() => [TaskDto])
	async changeTaskOrder(@Args('changeObject') changeObject: TaskChange) {
		return await this.taskService.changeTask(changeObject);
	}
}
