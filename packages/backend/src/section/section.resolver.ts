import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SectionService } from '../section/section.service';
import { Section } from './section.entity';

@Resolver(() => Section)
export class SectionResolver {
	constructor(private readonly sectionService: SectionService) {}
	@Query(() => [Section])
	async getSections() {
		return await this.sectionService.getSections();
	}

	@Mutation(() => Section)
	async createSection(@Args('order') order: number) {
		return await this.sectionService.createSection(order);
	}
}
