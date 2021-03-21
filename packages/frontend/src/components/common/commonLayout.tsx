import * as React from "react";
import styled from "@emotion/styled";
import LeftMenu from "./leftMenu";

const CommonLayout = ({ children }) => {
	return (
		<SiteLayout>
			<LeftMenuSection>
				<LeftMenu />
			</LeftMenuSection>
			<RightContentsSection>{children}</RightContentsSection>
		</SiteLayout>
	);
};

export default CommonLayout;

const SiteLayout = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const LeftMenuSection = styled.div`
	width: 100px;
	position: sticky;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 3px 3px 10px lightgrey;
`;

const RightContentsSection = styled.div`
	padding: 15px;
	display: block;
`;
