import { makeVar } from '@apollo/client';

interface AppConfig {
	isLightMode: boolean;
}

const appConfigVar = makeVar<AppConfig>({ isLightMode: true });

export default appConfigVar;
