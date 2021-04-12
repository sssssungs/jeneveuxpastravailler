import { Resolver } from '@nestjs/graphql';
import { SectionService } from '../section/section.service';

@Resolver()
export class SectionResolver {
	constructor(private readonly sectionService: SectionService) {}
}
