import styled from "@emotion/styled";
import * as React from "react";
import Link from "next/link";
import planetIcon from "../../../public/static/images/icons/Planet.png";
import videoIcon from "../../../public/static/images/icons/Video.png";
import backpackIcon from "../../../public/static/images/icons/Backpack.png";

const LeftMenu = () => {
	const linkInfo: { icon: string; link: string }[] = [
		{
			icon: planetIcon,
			link: "/",
		},
		{ icon: videoIcon, link: "/project" },
		{ icon: backpackIcon, link: "/setting" },
	];

	return (
		<LeftMenuList>
			{linkInfo.map(menu => (
				<LeftMenuItems>
					<Link href={menu.link} as={menu.link}>
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

const LeftMenuItems = styled.li`
	width: 70px;
	height: 70px;
	list-style: none;
	margin-top: 10px;
	box-sizing: border-box;
	border-radius: 10px;
	&:hover {
		cursor: pointer;
		box-shadow: 2px 2px 5px lightgrey;
	}
	&:first-of-type {
		margin-top: 0;
	}
`;
