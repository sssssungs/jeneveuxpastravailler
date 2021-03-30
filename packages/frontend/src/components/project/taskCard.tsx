import * as React from 'react';
import styled from '@emotion/styled';
import { TaskDto } from 'generated/graphql';
import { Modal } from 'react-responsive-modal';
import TaskModal from './taskModal';

interface Props {
	task: TaskDto;
}

const TaskCard = ({ task }: Props) => {
	const [modalOpen, setModalOpen] = React.useState(false);
	const [content, setContent] = React.useState(task.content);
	const setModal = (value: boolean) => () => {
		setModalOpen(value);
	};

	const resetContent = () => {
		setModalOpen(false);
		// for modal close animation
		setInterval(() => {
			setContent(task.content);
		}, 300);
	};

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const updateTask = () => {};

	return (
		<>
			<TaskCardWrapper onClick={setModal(true)}>
				<TaskCardContent>{task.content}</TaskCardContent>
			</TaskCardWrapper>
			<Modal
				open={modalOpen}
				onClose={resetContent}
				closeOnOverlayClick
				center
				showCloseIcon={false}
			>
				<TaskModal
					content={content}
					setModal={setModal}
					onChange={onChange}
					onSave={updateTask}
					onClose={resetContent}
				/>
			</Modal>
		</>
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
	&:hover {
		cursor: pointer;
		box-shadow: 2px 2px 5px ${props => props.theme.colors.light.B_300};
	}
	&:last-of-type {
		margin-bottom: 0;
	}
`;

const TaskCardContent = styled.div`
	width: inherit;
`;
