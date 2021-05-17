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
			<MenuSection>
				<MenuListSection>
					<LeftMenu current={current} />
				</MenuListSection>
			</MenuSection>
			<ContentsSection>{children}</ContentsSection>
		</SiteLayout>
	);
};

export default CommonLayout;

const SiteLayout = styled.div`
	${mq({
		display: 'flex',
		flexDirection: ['column', 'row'],
		width: '100%',
		// height: '100%',
	})}
`;

const MenuSection = styled.div`
	height: 100%;
	//position: sticky;
	${mq({
		left: [null, 0],
		top: [0, null],
	})}
`;

const MenuListSection = styled.div`
	${mq({
		position: ['fixed', 'relative'],
		width: [`calc(100% - 15px)`, '100px'],
	})};
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 3px 3px 10px 2px ${props => props.theme.colors.SHADOW};
`;

const ContentsSection = styled.div`
	display: flex;
	z-index: 1;
	${mq({
		position: ['absolute', 'relative'],
		top: ['120px', 0],
		padding: ['15px 15px 0 0', '15px 15px 15px 25px'],
		width: [`calc(100% - 15px)`, '100%'],
	})};
	height: calc(100% - 120px);
	overflow-y: auto;
	&:after {
		content: '';
		position: fixed;
		${mq({
			bottom: ['-180px', '0'],
		})};
		right: 15px;
		width: 50%;
		height: 50%;
		background-image: url(${doodles});
		background-size: 100%;
		background-repeat: no-repeat;
	}
`;
