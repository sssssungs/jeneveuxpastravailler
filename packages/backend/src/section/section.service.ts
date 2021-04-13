import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Section } from './section.entity';

@Injectable()
export class SectionService {
	constructor(@InjectRepository(Section) private readonly sectionRepository: Repository<Section>) {}

	createSection = async (order: number) => {
		const saveData = {
			order,
			name: '',
		};
		return await this.sectionRepository.save(saveData);
	};

	getSections = async () => {
		return await this.sectionRepository.find({ relations: ['tasks'] });
	};
}
