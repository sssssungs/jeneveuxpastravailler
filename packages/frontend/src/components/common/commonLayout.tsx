import * as React from 'react';
import styled from '@emotion/styled';
import LeftMenu from './leftMenu';
import doodles from 'public/static/images/open-doodles-laying.png';
import { mq } from 'styles/mq';

interface Props {
	current: string;
	children?: React.ReactNode;
}

const CommonLayout = ({ current, children }: Props) => {
	return (
		<SiteLayout>
			<LeftMenuSection>
				<LeftMenuListSection>
					<LeftMenu current={current} />
				</LeftMenuListSection>
			</LeftMenuSection>
			<RightContentsSection>{children}</RightContentsSection>
		</SiteLayout>
	);
};

export default CommonLayout;

const SiteLayout = styled.div`
	${mq({
		display: 'flex',
		flexDirection: ['column', 'column', 'row'],
		width: '100%',
		height: '100%',
	})}
`;

const LeftMenuSection = styled.div`
	height: 100%;
`;

const LeftMenuListSection = styled.div`
	width: 100px;
	position: sticky;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 3px 3px 10px 2px ${props => props.theme.colors.SHADOW};
`;

const RightContentsSection = styled.div`
	display: flex;
	padding: 15px 15px 15px 25px;
	width: 100%;
	min-height: 90vh;
	&:after {
		content: '';
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
