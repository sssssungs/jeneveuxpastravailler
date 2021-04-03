import { gql } from 'apollo-boost';

export const createTaskMutation = gql`
	mutation CreateTask($content: String!, $sectionId: Float!) {
		createTask(newData: { content: $content, sectionId: $sectionId }) {
			id
			content
			sectionId
		}
	}
`;
