import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateSectionInput {
	@Field()
	readonly name: string;
	@Field()
	readonly order: number;
}

@InputType()
export class UpdateSectionName {
	@Field()
	readonly id: number;
	@Field()
	readonly name: string;
}
