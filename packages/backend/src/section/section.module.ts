import { Module } from '@nestjs/common';
import { SectionResolver } from './section.resolver';
import { SectionService } from './section.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './section.entity';

@Module({
	imports: [TypeOrmModule.forFeature([Section])],
	providers: [SectionResolver, SectionService],
})
export class SectionModule {}
