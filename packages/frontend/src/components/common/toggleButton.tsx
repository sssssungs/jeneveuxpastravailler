import * as React from 'react';
import styled from '@emotion/styled';
import Toggle from 'react-toggle';

interface Props {
	isLight: boolean;
	onChangeDarkToggle: () => void;
}

const ToggleButton = ({ isLight, onChangeDarkToggle }: Props) => {
	return (
		<ToggleSection>
			<ToggleText>L</ToggleText>
			<Toggle
				className={'toggle-class'}
				defaultChecked={!isLight}
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
	top: 290px;
	left: 15px;
	height: 30px;
	margin-top: 15px;
	.toggle-class.react-toggle--checked .react-toggle-track {
		background-color: gray;
	}
`;
