import styled from "@emotion/styled";
import * as React from "react";

interface Props {
	setModal: (value: boolean) => () => void;
}

const TaskModal = ({ setModal }: Props) => {
	return (
		<TaskModalWrapper>
			<TaskTitle>Add New Task</TaskTitle>
			<TaskContent />
			<TaskModalBottom>
				<SaveButton>Save</SaveButton>
				<CancelButton onClick={setModal(false)}>Cancel</CancelButton>
			</TaskModalBottom>
		</TaskModalWrapper>
	);
};

export default TaskModal;

const TaskModalWrapper = styled.div`
	width: 500px;
	height: 300px;
`;

const TaskTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
`;

const TaskContent = styled.textarea`
	width: 98%;
	height: 70%;
	resize: none;
	border: 1px solid ${props => props.theme.colors.light.SHADOW};
`;

const TaskModalBottom = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

const SaveButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: ${props => props.theme.spacing.m};
	background-color: ${props => props.theme.colors.dark.B_200};
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.light.BACKGROUND};
		background-color: ${props => props.theme.colors.light.B_100};
	}
`;

const CancelButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: ${props => props.theme.spacing.m};
	background-color: ${props => props.theme.colors.dark.R_200};
	margin-left: ${props => props.theme.spacing.m};
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.light.BACKGROUND};
		background-color: ${props => props.theme.colors.light.R_100};
	}
`;
