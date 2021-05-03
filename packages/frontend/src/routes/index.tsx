import * as React from 'react';
import { getIcons } from '../lib/getIcons';

export const route = (color: string): { icon: React.ReactNode; link: string; as?: string }[] => [
	{ icon: getIcons(color)['home'], link: '/', as: '/' },
	{ icon: getIcons(color)['task'], link: '/project', as: '/project' },
	{ icon: getIcons(color)['setting'], link: '/mySetting', as: '/mySetting' },
];
