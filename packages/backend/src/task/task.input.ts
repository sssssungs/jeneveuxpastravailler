import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TaskInput {
	@Field()
	readonly content!: string;
	@Field()
	readonly sectionId!: number;
}

@InputType()
export class TaskUpdateInput {
	@Field()
	readonly id!: number;
	@Field()
	readonly content: string;
}
