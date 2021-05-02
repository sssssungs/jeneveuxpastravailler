import * as React from 'react';
import styled from '@emotion/styled';
import {
	GetSectionsDocument,
	Task,
	useDeleteTaskMutation,
	useUpdateTaskContentMutation,
} from 'generated/graphql';
import { Modal } from 'react-responsive-modal';
import TaskModal from './taskModal';

interface Props {
	task: Task;
	isDragging?: boolean;
	order: string;
	sectionId: number;
}

const TaskCard = ({ task, order, sectionId, isDragging = false }: Props) => {
	const [updateTaskMutation] = useUpdateTaskContentMutation({
		refetchQueries: [{ query: GetSectionsDocument }],
	});
	const [deleteTaskMutation] = useDeleteTaskMutation({
		refetchQueries: [{ query: GetSectionsDocument }],
	});
	const [modalOpen, setModalOpen] = React.useState(false);
	const [content, setContent] = React.useState(task.content);

	React.useEffect(() => {
		setContent(task.content);
	}, [task]);

	const setModal = (value: boolean) => () => {
		setModalOpen(value);
	};

	const resetContent = () => {
		setModalOpen(false);
		setContent(task.content);
	};

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const updateTaskContent = async () => {
		await updateTaskMutation({ variables: { id: task.id, content, sectionId } });
		resetContent();
	};

	const deleteTask = async () => {
		await deleteTaskMutation({
			variables: { taskId: task.id, sectionId },
			refetchQueries: [{ query: GetSectionsDocument }],
			// update: (store, { data }) => {
			// 	const tasks = store.readQuery<GetTasksQuery>({
			// 		query: GetTasksDocument,
			// 	});
			// 	store.writeQuery<GetTasksQuery>({
			// 		query: GetTasksDocument,
			// 		data: {
			// 			getTasks: [...tasks!.getTasks],
			// 		},
			// 	});
			// },
		});
		resetContent();
	};

	return (
		<>
			<TaskCardWrapper
				modalOpen={modalOpen}
				isDragging={isDragging}
				id={`${sectionId}_${task.id}_${order}`}
			>
				<TaskCardContent>
					{task.content}
					<MoreButton onClick={setModal(true)}>MORE</MoreButton>
				</TaskCardContent>
			</TaskCardWrapper>{' '}
			<Modal
				open={modalOpen}
				onClose={resetContent}
				closeOnOverlayClick
				center
				showCloseIcon={false}
			>
				<TaskModal
					title={'Modify your contents'}
					content={content}
					onChange={onChange}
					onSave={updateTaskContent}
					onClose={resetContent}
					showDelete
					onDelete={deleteTask}
				/>
			</Modal>
		</>
	);
};

export default TaskCard;

export const TaskCardWrapper = styled.div<{ modalOpen: boolean; isDragging: boolean }>`
	position: relative;
	display: flex;
	width: 200px;
	height: 70px;
	box-sizing: border-box;
	white-space: normal;
	word-break: break-all;
	overflow-y: auto;
	background-color: ${props => props.theme.colors.BACKGROUND};
	padding: ${props => props.theme.spacing.m};
	border-radius: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.G_100};
	margin-bottom: 15px;
	box-shadow: 2px 2px 5px
		${props => (props.modalOpen ? props.theme.colors.B_300 : props.theme.colors.SHADOW)};

	&:hover {
		cursor: move;
		box-shadow: 2px 2px 5px ${props => props.theme.colors.G_200};
		& div {
			visibility: ${props => !props.isDragging && 'visible'};
		}
	}

	&:last-of-type {
		margin-bottom: 0;
	}
`;

const MoreButton = styled.div`
	position: absolute;
	right: 5px;
	top: 5px;
	font-size: 12px;
	visibility: hidden;
	&:hover {
		cursor: pointer;
		background-color: ${props => props.theme.colors.SHADOW};
	}
`;

const TaskCardContent = styled.div`
	width: inherit;
`;
