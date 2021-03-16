import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class TaskInput {
	@Field()
	readonly content!: string;
}
