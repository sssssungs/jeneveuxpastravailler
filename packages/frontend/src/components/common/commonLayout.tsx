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
		flexDirection: ['column', 'row'],
		width: '100%',
		height: '100%',
	})}
`;

const LeftMenuSection = styled.div`
	height: 100%;
	position: sticky;
	${mq({
		left: [null, 0],
		top: [0, null],
	})}
`;

const LeftMenuListSection = styled.div`
	${mq({
		width: ['100%', '100px'],
	})};
	z-index: 99;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 3px 3px 10px 2px ${props => props.theme.colors.SHADOW};
`;

const RightContentsSection = styled.div`
	display: flex;
	z-index: 1;
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
