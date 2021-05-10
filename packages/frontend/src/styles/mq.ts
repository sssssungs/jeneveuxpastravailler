import facepaint from 'facepaint';
import { theme } from 'styles/theme';

export const mq = facepaint([
	`@media(min-width: ${theme.breakPoints.m}px)`,
	`@media(min-width: ${theme.breakPoints.l}px)`,
	`@media(min-width: ${theme.breakPoints.xl}px)`,
]);
