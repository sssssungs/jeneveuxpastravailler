import { useMemo } from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import _merge from 'lodash/merge';
import { NormalizedCacheObject } from 'apollo-boost';
import { GRAPHQL_API } from './config/graphqlApi';
import appConfigVar from './config/appConfigVar';

let apolloClient: ApolloClient<NormalizedCacheObject> = null;

function createApolloClient() {
	return new ApolloClient({
		ssrMode: typeof window === 'undefined',
		link: new HttpLink({
			uri: GRAPHQL_API, // 서버 URL (상대 주소가 아닌 절대 주소를 써야한다.)
			credentials: 'same-origin', // `credentials`나 `headers`같은 추가적 fetch() 옵션
		}),
		cache: new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						appConfig: {
							read() {
								return appConfigVar();
							},
						},
					},
				},
			},
		}), // store -> ㄷㅓ 알아보기
	});
}

export function initializeApollo(initialState = null) {
	const _apolloClient = apolloClient ?? createApolloClient();
	// Next.js에서 Apollo Client를 이용해 데이터를 가져오는 함수가 있다면, 초기 상태값이 여기에서 합쳐진다.
	if (initialState) {
		// 클라이언트에서의 받은 데이터인 현재 캐시 데이터를 가져온다.
		const existingCache = _apolloClient.extract();
		// 현재 캐시와 SSR 메소드인 getStaticProps/getServerSideProps로 부터 받은 데이터를 합친다.
		const data = _merge(initialState, existingCache);
		// 합쳐진 데이터를 저장한다.
		_apolloClient.cache.restore(data);
	}
	// SSG(Server Side Generation)와 SSR(Server Side Rendering)은 항상 새로운 Apollo Client를 생성한다.
	if (typeof window === 'undefined') return _apolloClient;
	// 클라이언트의 Apollo Client는 한 번만 생성한다.
	if (!apolloClient) apolloClient = _apolloClient;
	return _apolloClient;
}

export function useApollo(initialState) {
	return useMemo(() => initializeApollo(initialState), [initialState]);
}

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export function addApolloState<T>(client: ApolloClient<NormalizedCacheObject>, pageProps: any) {
	if (pageProps?.props) {
		pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
	}

	return pageProps;
}
