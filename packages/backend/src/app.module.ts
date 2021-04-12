import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { SectionModule } from './section/section.module';
import { Section } from './section/section.entity';
import { Task } from './task/task.entity';

@Module({
	imports: [
		GraphQLModule.forRoot({
			autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
		}),
		TypeOrmModule.forRoot({
			entities: [Task, Section],
		}),
		TaskModule,
		SectionModule,
	],
})
export class AppModule {}
