import * as React from "react";
import styled from "@emotion/styled";
import LeftMenu from "./leftMenu";
import doodles from "public/static/images/open-doodles-laying.png";

interface Props {
	current: string;
	children?: React.ReactNode;
}

const CommonLayout = ({ current, children }: Props) => {
	return (
		<>
			<SiteLayout>
				<LeftMenuSection>
					<LeftMenu current={current} />
				</LeftMenuSection>
				<RightContentsSection>{children}</RightContentsSection>
			</SiteLayout>
		</>
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
	height: 100%;
	position: sticky;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 3px 3px 10px lightgrey;
`;

const RightContentsSection = styled.div`
	padding: 15px;
	width: 100%;
	min-height: 90vh;
	&:after {
		content: "";
		position: absolute;
		right: 15px;
		bottom: 0;
		width: 50%;
		height: 50%;
		background-image: url(${doodles});
		background-size: 100%;
		background-repeat: no-repeat;
	}
`;
