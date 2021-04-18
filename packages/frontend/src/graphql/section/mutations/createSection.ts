import { gql } from 'apollo-boost';

export const createSectionMutation = gql`
	mutation CreateSection($order: Float!) {
		createSection(order: $order) {
			id
			name
			order
		}
	}
`;
