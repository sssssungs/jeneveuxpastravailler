import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class TaskDto {
	@Field()
	readonly id?: number;
	@Field()
	readonly content!: string;
	@Field()
	readonly sectionId!: number;
	@Field()
	readonly order: number;
}
