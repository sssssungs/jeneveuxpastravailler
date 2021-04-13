import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SectionDto {
	@Field()
	readonly id?: number;
	@Field()
	readonly name: string;
	@Field()
	readonly order: number;
}
