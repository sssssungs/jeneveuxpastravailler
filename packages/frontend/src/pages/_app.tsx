import * as React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import Head from 'next/head';
import { useApollo } from '../apollo';
import { css, Global, ThemeProvider } from '@emotion/react';
import { Theme, theme, colors as themeColors } from 'styles/theme';
import { font } from 'styles/font';
import 'react-responsive-modal/styles.css';
import 'react-toggle/style.css';
import ToggleButton from '../components/common/toggleButton';

const global = (theme: Theme) => css`
	${font};
	html {
		font-size: 15px;
		font-family: 'InfinitySans-RegularA1', sans-serif;
		background-color: ${theme.colors.BACKGROUND};
		color: ${theme.colors.G_300};
	}
	textarea,
	input,
	button {
		font-family: 'InfinitySans-RegularA1', sans-serif;
		outline: 0;
		border: 0;
	}
`;

function App({ Component, pageProps }: AppProps) {
	const apolloClient = useApollo(pageProps.initialApolloState);
	const [isLight, setIsLight] = React.useState<boolean>(true);

	const onChangeDarkToggle = () => {
		setIsLight(!isLight);
	};

	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="initial-scale=1.0,user-scalable=no,maximum-scale=1,width=device-width"
				/>
				<title>Je ne veux pas travailler</title>
			</Head>
			<ThemeProvider theme={{ ...theme, colors: themeColors[isLight ? 'light' : 'dark'] }}>
				<Global styles={theme => global(theme as Theme)} />
				<ApolloProvider client={apolloClient}>
					<Component {...pageProps} />
					<ToggleButton isLight={isLight} onChangeDarkToggle={onChangeDarkToggle} />
				</ApolloProvider>
			</ThemeProvider>
		</>
	);
}

export default App;
