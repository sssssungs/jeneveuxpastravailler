import styled from "@emotion/styled";
import * as React from "react";
import Link from "next/link";
import planetIcon from "../../../public/static/images/icons/Planet.png";
import videoIcon from "../../../public/static/images/icons/Video.png";
import backpackIcon from "../../../public/static/images/icons/Backpack.png";

interface Props {
	current: string;
}

const LeftMenu = ({ current }: Props) => {
	const linkInfo: { icon: string; link: string; as?: string }[] = [
		{ icon: planetIcon, link: "/", as: "/" },
		{ icon: videoIcon, link: "/project", as: "/project" },
		{ icon: backpackIcon, link: "/mySetting", as: "/mySetting" },
	];
	return (
		<LeftMenuList>
			{linkInfo.map(menu => (
				<LeftMenuItems key={menu.link} active={menu.link === `/${current}`}>
					<Link href={menu.link} as={menu.as}>
						<img src={menu.icon} alt={"a"} width={"100%"} />
					</Link>
				</LeftMenuItems>
			))}
		</LeftMenuList>
	);
};

export default LeftMenu;

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
	box-shadow: ${props => props.active && "2px 2px 5px lightgrey"};
	&:hover {
		cursor: pointer;
		box-shadow: 2px 2px 5px lightgrey;
	}
	&:first-of-type {
		margin-top: 0;
	}
`;
