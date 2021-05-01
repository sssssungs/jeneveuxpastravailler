import { gql } from 'apollo-boost';

export const changeTaskOrderMutation = gql`
	mutation ChangeTaskOrder($selectOrder: Float!, $targetOrder: Float!, $sectionId: Float!) {
		changeTaskOrder(
			changeObject: { selectOrder: $selectOrder, targetOrder: $targetOrder, sectionId: $sectionId }
		) {
			id
			content
			order
		}
	}
`;
