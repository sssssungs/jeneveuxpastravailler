import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './section.entity';
import { CreateSectionInput } from './section.input';

@Injectable()
export class SectionService {
	constructor(@InjectRepository(Section) private readonly sectionRepository: Repository<Section>) {}

	createSection = async (newData: CreateSectionInput) => {
		const saveData = {
			order: newData.order,
			name: newData.name,
		};
		return await this.sectionRepository.save(saveData);
	};

	getSections = async () => {
		return await this.sectionRepository.find({ relations: ['tasks'] });
	};
}
