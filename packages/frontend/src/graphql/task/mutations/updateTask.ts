import { gql } from 'apollo-boost';

export const updateTaskMutation = gql`
	mutation UpdateTaskContent($id: Float!, $content: String!) {
		updateTaskContent(newData: { id: $id, content: $content }) {
			id
			content
		}
	}
`;
