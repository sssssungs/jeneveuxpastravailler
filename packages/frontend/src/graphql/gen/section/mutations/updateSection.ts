import { gql } from 'apollo-boost';

export const updateSectionMutation = gql`
	mutation UpdateSectionName($sectionId: Float!, $title: String!) {
		updateSectionName(newData: { id: $sectionId, name: $title }) {
			id
			name
		}
	}
`;
