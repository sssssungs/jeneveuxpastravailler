import { gql } from 'apollo-boost';

export const deleteTaskMutation = gql`
	mutation DeleteTask($id: Float!) {
		deleteTask(id: $id) {
			content
		}
	}
`;
