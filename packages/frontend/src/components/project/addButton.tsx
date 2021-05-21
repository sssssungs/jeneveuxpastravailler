import styled from '@emotion/styled';
import * as React from 'react';
import { mq } from '../../styles/mq';

interface Props {
	onClick: (value: boolean) => void;
	taskLength: number;
	showAddButton: boolean;
}

const AddButton = ({ onClick, taskLength, showAddButton = false }: Props) => {
	const clickAddButton = () => {
		onClick(true);
	};
	return (
		<AddButtonWrapper
			onClick={clickAddButton}
			taskLength={taskLength}
			showAddButton={showAddButton}
		>
			+
		</AddButtonWrapper>
	);
};

export default AddButton;

export const AddButtonWrapper = styled.button<{ taskLength: number; showAddButton: boolean }>`
	display: ${props => (props.showAddButton ? 'block' : props.taskLength !== 0 ? 'none' : 'block')};
	justify-content: center;
	align-items: center;
	${mq({
		width: ['100%', '200px'],
	})}
	height: 70px;
	box-sizing: border-box;
	font-size: 35px;
	color: ${props => props.theme.colors.G_100};
	background-color: ${props => props.theme.colors.SHADOW};
	padding: ${props => props.theme.spacing.m};
	border-radius: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.G_100};
	margin-bottom: 15px;
	box-shadow: 2px 2px 5px ${props => props.theme.colors.SHADOW};
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.B_200};
		box-shadow: 2px 2px 5px ${props => props.theme.colors.G_200};
	}
`;
