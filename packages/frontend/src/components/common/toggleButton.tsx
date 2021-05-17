import * as React from 'react';
import styled from '@emotion/styled';
import Toggle from 'react-toggle';
import { mq } from '../../styles/mq';

interface Props {
	isDark: boolean;
	onChangeDarkToggle: () => void;
}

const ToggleButton = ({ isDark, onChangeDarkToggle }: Props) => {
	return (
		<ToggleSection>
			<ToggleText>L</ToggleText>
			<Toggle
				className={'toggle-class'}
				checked={isDark}
				icons={false}
				onChange={onChangeDarkToggle}
			/>
			<ToggleText>D</ToggleText>
		</ToggleSection>
	);
};

export default ToggleButton;

const ToggleText = styled.div`
	margin-left: 5px;
	margin-right: 5px;
	font-size: 17px;
	font-weight: 600;
`;

const ToggleSection = styled.div`
	display: flex;
	position: absolute;
	z-index: 999;
	${mq({
		top: ['67px', '290px'],
	})}

	left: 15px;
	height: 30px;
	margin-top: 15px;
	.toggle-class.react-toggle--checked .react-toggle-track {
		background-color: gray;
	}
`;
