import '@emotion/react';
import { Theme as MyTheme } from 'styles/theme';
import { CreateStyled } from '@emotion/styled';

declare module '@emotion/react' {
	export interface Theme extends MyTheme {}
}

declare module '@emotion/styled' {
	declare const styled: CreateStyled<MyTheme>;
	export default styled;
}
