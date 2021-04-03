import { gql } from 'apollo-boost';

export const changeTaskOrderMutation = gql`
	mutation ChangeTaskOrder(
		$selectId: Float!
		$selectOrder: Float!
		$targetId: Float!
		$targetOrder: Float!
	) {
		changeTaskOrder(
			changeObject: {
				selectId: $selectId
				selectOrder: $selectOrder
				targetId: $targetId
				targetOrder: $targetOrder
			}
		) {
			id
			content
		}
	}
`;
