import React from 'react';
import CommonLayout from '../components/common/commonLayout';
import { GET_TASKS } from '../graphql/task/query/getTasks';
import { addApolloState, initializeApollo } from 'apollo';
import {
	TaskDto,
	useChangeTaskOrderMutation,
	useCreateTaskMutation,
	useGetTasksQuery,
} from 'generated/graphql';
import TaskCard from 'components/project/taskCard';
import { Modal } from 'react-responsive-modal';
import TaskModal from '../components/project/taskModal';
import AddButton from '../components/project/addButton';
import { ReactSortable } from 'react-sortablejs';

const Project = () => {
	const { data } = useGetTasksQuery();
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [content, setContent] = React.useState<string>('');
	const [createTaskMutation] = useCreateTaskMutation({
		variables: { content, sectionId: 0 },
		refetchQueries: [{ query: GET_TASKS }],
	});
	const [changeTaskOrderMutation] = useChangeTaskOrderMutation();
	const [isDragging, setIsDragging] = React.useState<boolean>(false);

	const setModal = (value: boolean) => {
		setModalOpen(value);
	};

	const resetContent = () => {
		setModalOpen(false);
		// for modal close animation
		setContent('');
	};

	const addNewTask = async () => {
		await createTaskMutation();
		resetContent();
	};

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const dragStart = async e => {
		setIsDragging(true);
		// console.log('ee', e);
		// console.log('이전 ', from, oldIndex, '바뀐것 ', to, newIndex);
		// await changeTaskOrderMutation({ variables: { sectionId, selectOrder: oldIndex } });
	};

	const dragEnd = async e => {
		setIsDragging(false);
		const { from, to } = e;
		console.log('ee', e, from.id, to.id);
		// console.log('이전 ', from, oldIndex, '바뀐것 ', to, newIndex);
		// await changeTaskOrderMutation({ variables: { sectionId, selectOrder: oldIndex } });
	};

	return (
		<CommonLayout current={'project'}>
			<Modal
				open={modalOpen}
				onClose={resetContent}
				closeOnOverlayClick
				center
				showCloseIcon={false}
			>
				<TaskModal
					title={'Add New Task'}
					content={content}
					setModal={setModal}
					onChange={onChange}
					onSave={addNewTask}
					onClose={resetContent}
					showDelete={false}
				/>
			</Modal>
			<AddButton onClick={setModal} />
			{data?.getTasks && (
				<ReactSortable
					group={'0'}
					list={data?.getTasks as TaskDto[]}
					setList={data => {}}
					animation={300}
					swapThreshold={0.75}
					fallbackOnBody={true}
					forceFallback={true}
					onStart={dragStart}
					onEnd={dragEnd}
				>
					{data?.getTasks?.map((task: TaskDto, index) => (
						<TaskCard task={task} key={index} id={String(task.order)} isDragging={isDragging} />
					))}
				</ReactSortable>
			)}
		</CommonLayout>
	);
};

export default Project;

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query({ query: GET_TASKS });
	return addApolloState(apolloClient, {
		props: {},
	});
};
