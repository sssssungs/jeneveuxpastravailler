import { gql } from '@apollo/client';

const GetAppConfig = gql`
	query GetAppConfig {
		appConfig @client {
			isLightMode
		}
	}
`;

export default GetAppConfig;
