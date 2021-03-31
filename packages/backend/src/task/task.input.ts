import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TaskInput {
	@Field()
	readonly content!: string;
}

@InputType()
export class TaskUpdateInput {
	@Field()
	readonly id!: number;
	@Field()
	readonly content: string;
}
