import { Task } from 'src/task/task.entity';
import { Field, ObjectType } from '@nestjs/graphql';
import {
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Section {
	@PrimaryGeneratedColumn()
	@Field(() => Number)
	id: number;

	@Column()
	@Field(() => String)
	name: string;

	@OneToMany(() => Task, task => task.section)
	@Field(() => [Task], { defaultValue: [] })
	tasks: Task[];

	@Column()
	@Field(() => Number)
	order: number;

	@CreateDateColumn()
	@Field()
	createdAt: Date;

	@UpdateDateColumn()
	@Field()
	updatedAt: Date;
}
