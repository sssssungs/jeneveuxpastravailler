import styled from '@emotion/styled';
import * as React from 'react';
import Link from 'next/link';
import { route } from 'routes';
import { useTheme } from '@emotion/react';

interface Props {
	current: string;
}

const LeftMenu = ({ current }: Props) => {
	const theme = useTheme();
	return (
		<LeftMenuList>
			{route(theme.colors.G_100).map(menu => (
				<LeftMenuItems key={menu.link} active={menu.link === `/${current}`}>
					<Link href={menu.link} as={menu.as}>
						<Icons>{menu.icon}</Icons>
					</Link>
				</LeftMenuItems>
			))}
		</LeftMenuList>
	);
};

export default LeftMenu;

const Icons = styled.div`
	display: flex;
	height: 100%;
	justify-content: center;
	align-items: center;
`;

const LeftMenuList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-left: 0;
`;

const LeftMenuItems = styled.li<{ active: boolean }>`
	width: 70px;
	height: 70px;
	list-style: none;
	margin-top: 10px;
	box-sizing: border-box;
	border-radius: 10px;
	box-shadow: ${props => props.active && `2px 2px 5px ${props.theme.colors.SHADOW}`};
	&:hover {
		cursor: pointer;
		box-shadow: 2px 2px 5px ${props => props.theme.colors.SHADOW};
	}
	&:first-of-type {
		margin-top: 0;
	}
`;
