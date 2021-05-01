import { gql } from 'apollo-boost';

export const deleteTaskMutation = gql`
	mutation DeleteTask($taskId: Float!, $sectionId: Float!) {
		deleteTask(idInfo: { sectionId: $sectionId, taskId: $taskId })
	}
`;
