import { gql } from 'apollo-boost';

export const createSectionMutation = gql`
	mutation CreateSection($order: Float!, $name: String!) {
		createSection(newData: { order: $order, name: $name }) {
			id
			name
			order
		}
	}
`;
