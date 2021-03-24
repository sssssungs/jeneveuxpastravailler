import * as React from "react";
import styled from "@emotion/styled";
import { TaskDto } from "generated/graphql";

interface Props {
	task: TaskDto;
}

const TaskCard = ({ task }: Props) => {
	return (
		<TaskCardWrapper>
			<TaskCardContent>{task.content}</TaskCardContent>
		</TaskCardWrapper>
	);
};

export default TaskCard;

const TaskCardWrapper = styled.div`
	display: flex;
	width: 200px;
	height: 70px;
	box-sizing: border-box;
	padding: ${props => props.theme.spacing.m};
	border-radius: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.light.G_100};
	margin-bottom: 15px;
	box-shadow: 2px 2px 5px ${props => props.theme.colors.light.SHADOW};
	&:last-of-type {
		margin-bottom: 0;
	}
`;

const TaskCardContent = styled.div`
	width: inherit;
`;
