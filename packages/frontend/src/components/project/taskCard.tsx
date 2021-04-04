import * as React from 'react';
import styled from '@emotion/styled';
import {
	GetTasksDocument,
	GetTasksQuery,
	TaskDto,
	useDeleteTaskMutation,
	useUpdateTaskContentMutation,
} from 'generated/graphql';
import { Modal } from 'react-responsive-modal';
import TaskModal from './taskModal';
import { GET_TASKS } from '../../graphql/task/query/getTasks';

interface Props {
	task: TaskDto;
	isDragging: boolean;
	order: string;
}

const TaskCard = ({ task, isDragging, order }: Props) => {
	const [updateTaskMutation] = useUpdateTaskContentMutation({
		refetchQueries: [{ query: GET_TASKS }],
	});
	const [deleteTaskMutation] = useDeleteTaskMutation({
		refetchQueries: [{ query: GET_TASKS }],
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
		await updateTaskMutation({ variables: { id: task.id, content } });
		resetContent();
	};

	const deleteTask = async () => {
		await deleteTaskMutation({
			variables: { id: task.id },
			update: (store, { data }) => {
				const tasks = store.readQuery<GetTasksQuery>({
					query: GetTasksDocument,
				});
				store.writeQuery<GetTasksQuery>({
					query: GetTasksDocument,
					data: {
						getTasks: [...tasks!.getTasks],
					},
				});
			},
		});
		resetContent();
	};

	return (
		<>
			<TaskCardWrapper modalOpen={modalOpen} isDragging={isDragging} id={order}>
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
					setModal={setModal}
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
	background-color: ${props => props.theme.colors.light.BACKGROUND};
	padding: ${props => props.theme.spacing.m};
	border-radius: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.light.G_100};
	margin-bottom: 15px;
	box-shadow: 2px 2px 5px
		${props => (props.modalOpen ? props.theme.colors.light.B_300 : props.theme.colors.light.SHADOW)};

	&:hover {
		cursor: move;
		box-shadow: 2px 2px 5px ${props => props.theme.colors.light.G_200};
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
		background-color: ${props => props.theme.colors.light.SHADOW};
	}
`;

const TaskCardContent = styled.div`
	width: inherit;
`;
