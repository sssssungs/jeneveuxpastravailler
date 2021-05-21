import { gql } from 'apollo-boost';

export const deleteSectionMutation = gql`
	mutation DeleteSection($sectionId: Float!) {
		deleteSection(sectionId: $sectionId)
	}
`;
