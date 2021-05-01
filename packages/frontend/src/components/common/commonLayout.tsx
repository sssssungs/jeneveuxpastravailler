import * as React from 'react';
import styled from '@emotion/styled';
import LeftMenu from './leftMenu';
import doodles from 'public/static/images/open-doodles-laying.png';
import Toggle from 'react-toggle';
import { useQuery } from '@apollo/react-hooks';
import GetAppConfig from '../../graphql/common/getAppConfig';
import appConfigVar from '../../config/appConfigVar';

interface Props {
	current: string;
	children?: React.ReactNode;
}

const CommonLayout = ({ current, children }: Props) => {
	const [isLight, setIsLight] = React.useState<boolean>(false);
	const {
		data: { appConfig },
	} = useQuery(GetAppConfig);

	const onChangeDarkToggle = () => {
		setIsLight(!isLight);
	};

	React.useEffect(() => {
		console.log('config-------', appConfig);
		appConfigVar({ isLightMode: !isLight });
	}, [isLight]);

	return (
		<>
			<SiteLayout>
				<LeftMenuSection>
					<LeftMenuListSection>
						<LeftMenu current={current} />
					</LeftMenuListSection>
					<LeftMenuToggleSection>
						<ToggleText>L</ToggleText>
						<Toggle
							className={'toggle-class'}
							defaultChecked={isLight}
							icons={false}
							onChange={onChangeDarkToggle}
						/>
						<ToggleText>D</ToggleText>
					</LeftMenuToggleSection>
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
	height: 100%;
`;

const ToggleText = styled.div`
	margin-left: 5px;
	margin-right: 5px;
	font-size: 17px;
	font-weight: 600;
`;

const LeftMenuToggleSection = styled.div`
	display: flex;
	width: 100%;
	height: 30px;
	margin-top: 15px;
	justify-content: center;
	align-items: center;
	.toggle-class.react-toggle--checked .react-toggle-track {
		background-color: gray;
	}
`;

const LeftMenuListSection = styled.div`
	width: 100px;
	position: sticky;
	padding-top: 5px;
	padding-bottom: 5px;
	border-radius: 10px;
	box-sizing: border-box;
	box-shadow: 3px 3px 10px lightgrey;
`;

const RightContentsSection = styled.div`
	padding: 15px;
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
