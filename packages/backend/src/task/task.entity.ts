import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	ManyToOne,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';
import { Section } from 'src/section/section.entity';
import { ObjectType, Field } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Task extends BaseEntity {
	@PrimaryGeneratedColumn()
	@Field()
	id: number;

	@Column()
	@Field()
	content: string;

	@ManyToOne(() => Section, section => section.tasks)
	@Field()
	section: Section;

	@Column()
	@Field()
	order: number;

	@CreateDateColumn()
	@Field()
	createdAt: string;

	@UpdateDateColumn()
	@Field()
	updatedAt: string;
}
