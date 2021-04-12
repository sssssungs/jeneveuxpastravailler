import { Module } from '@nestjs/common';
import { SectionResolver } from './section.resolver';
import { SectionService } from './section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './section.entity';
import { Task } from 'src/task/task.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Task, Section])],
	providers: [SectionResolver, SectionService],
})
export class SectionModule {}
