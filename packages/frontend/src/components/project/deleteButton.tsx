import styled from '@emotion/styled';
import * as React from 'react';
import { mq } from 'styles/mq';

interface Props {
	onClick: (value: boolean) => void;
	taskLength: number;
}

const DeleteButton = ({ onClick, taskLength }: Props) => {
	const clickAddButton = () => {
		onClick(true);
	};
	return (
		<DeleteButtonWrapper onClick={clickAddButton} taskLength={taskLength}>
			-
		</DeleteButtonWrapper>
	);
};

export default DeleteButton;

export const DeleteButtonWrapper = styled.button<{ taskLength: number }>`
	display: ${props => (props.taskLength !== 0 ? 'none' : 'block')};
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
		color: ${props => props.theme.colors.O_300};
		box-shadow: 2px 2px 5px ${props => props.theme.colors.G_200};
	}
`;
