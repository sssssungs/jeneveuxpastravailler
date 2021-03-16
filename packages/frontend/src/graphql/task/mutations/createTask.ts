import { gql } from "apollo-boost";

export const createTaskMutation = gql`
	mutation CreateTask($content: String!) {
		createTask(newData: { content: $content }) {
			id
			content
		}
	}
`;
