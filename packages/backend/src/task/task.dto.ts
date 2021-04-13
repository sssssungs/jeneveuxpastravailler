import { ObjectType, Field } from '@nestjs/graphql';
import { Section } from '../section/section.entity';

@ObjectType()
export class TaskDto {
	@Field()
	readonly id?: number;
	@Field()
	readonly content: string;
	@Field()
	readonly sectionId: number;
	@Field()
	readonly order: number;
}

@ObjectType()
export class GetTaskType {
	@Field()
	readonly id?: number;
	@Field()
	readonly content: string;
	@Field()
	readonly section: number;
	@Field()
	readonly order: number;
}

export class SaveTaskDto {
	readonly id?: number;
	readonly content: string;
	readonly section: Section;
	readonly order: number;
}
