import styled from '@emotion/styled';
import * as React from 'react';

interface Props {
	onClick: (value: boolean) => void;
	taskLength: number;
}

const AddButton = ({ onClick, taskLength }: Props) => {
	const clickAddButton = () => {
		onClick(true);
	};
	return (
		<AddButtonWrapper onClick={clickAddButton} taskLength={taskLength}>
			+
		</AddButtonWrapper>
	);
};

export default AddButton;

export const AddButtonWrapper = styled.button<{ taskLength: number }>`
	display: ${props => (props.taskLength !== 0 ? 'none' : 'block')};
	justify-content: center;
	align-items: center;
	width: 200px;
	height: 70px;
	box-sizing: border-box;
	font-size: 35px;
	color: ${props => props.theme.colors.light.G_100};
	padding: ${props => props.theme.spacing.m};
	border-radius: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.light.G_100};
	margin-bottom: 15px;
	box-shadow: 2px 2px 5px ${props => props.theme.colors.light.SHADOW};
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.light.G_200};
		box-shadow: 2px 2px 5px ${props => props.theme.colors.light.G_200};
	}
`;
