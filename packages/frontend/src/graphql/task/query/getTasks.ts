import { gql } from '@apollo/client';

export const GET_TASKS = gql`
	query GetTasks {
		getTasks {
			id
			content
			sectionId
			order
		}
	}
`;
