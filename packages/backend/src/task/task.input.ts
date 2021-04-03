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

@InputType()
export class TaskChange {
	@Field()
	readonly selectId!: number;
	@Field()
	readonly selectOrder!: number;
	@Field()
	readonly targetId!: number;
	@Field()
	readonly targetOrder!: number;
}
