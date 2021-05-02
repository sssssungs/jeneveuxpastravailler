import { makeVar } from '@apollo/client';
import { isServer } from '../lib/ssr';

interface AppConfig {
	isLightMode: boolean;
}

const appConfigVar = makeVar<AppConfig>({
	isLightMode: !isServer && !!localStorage.getItem('mode'),
});

export default appConfigVar;
