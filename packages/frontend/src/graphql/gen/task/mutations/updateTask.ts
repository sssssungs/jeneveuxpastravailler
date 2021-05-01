import { gql } from 'apollo-boost';

export const updateTaskMutation = gql`
	mutation UpdateTaskContent($id: Float!, $content: String!, $sectionId: Float!) {
		updateTaskContent(newData: { id: $id, content: $content, sectionId: $sectionId }) {
			id
			content
		}
	}
`;
