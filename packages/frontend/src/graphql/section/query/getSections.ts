import { gql } from '@apollo/client';

export const GET_SECTIONS = gql`
	query GetSections {
		getSections {
			id
			order
			tasks {
				id
				content
			}
		}
	}
`;
