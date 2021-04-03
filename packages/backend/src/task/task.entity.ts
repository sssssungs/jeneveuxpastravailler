import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Task {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ nullable: true })
	content: string;

	@Column({ nullable: true })
	category: number;

	@Column()
	sectionId: number;

	@Column()
	order: number;
	//
	// @Column()
	// status: number;
	//
	// @Column()
	// createdBy: string;

	@CreateDateColumn()
	createdAt: string;

	@UpdateDateColumn()
	updatedAt: string;
}
