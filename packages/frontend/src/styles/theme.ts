const dark = {
	BACKGROUND: '#313131',
	SHADOW: '#8b8b8b',
	G_100: '#F0F0F0',
	G_200: '#DFE1E2',
	G_300: '#A9AEB1',
	B_100: '#D9E8F6',
	B_200: '#73B3E7',
	B_300: '#005EA2',
	R_100: '#F8DFE2',
	R_200: '#F2938C',
	R_300: '#D83933',
	A_100: '#E1F3F8',
	A_200: '#97D4EA',
	A_300: '#00BDE3',
	O_100: '#F2E4D4',
	O_200: '#FFBC78',
	O_300: '#FA9441',
};

const light = {
	BACKGROUND: '#FFFFFF',
	SHADOW: '#D3D3D3',
	G_100: '#71767A',
	G_200: '#565C65',
	G_300: '#2C3138',
	B_100: '#0050D8',
	B_200: '#1A4480',
	B_300: '#162E51',
	R_100: '#E41D3D',
	R_200: '#B50909',
	R_300: '#8B0A03',
	A_100: '#28A0CB',
	A_200: '#07648D',
	A_300: '#044562',
	O_100: '#C05600',
	O_200: '#775540',
	O_300: '#553A2A',
};

export const colors = {
	dark,
	light,
};

export type Theme = {
	colors: typeof dark | typeof light;
	breakPoints: {
		[key: string]: number;
	};
	spacing: {
		[key: string]: string;
	};
};

export const theme: Theme = {
	colors: light,
	breakPoints: {
		m: 768,
		l: 1024,
		xl: 1200,
	},
	spacing: {
		m: '5px',
		l: '7px',
		xl: '12px',
	},
};
