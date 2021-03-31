import { gql } from 'apollo-boost';

export const updateTaskMutation = gql`
	mutation UpdateTask($id: Float!, $content: String!) {
		updateTask(newData: { id: $id, content: $content }) {
			id
			content
		}
	}
`;
