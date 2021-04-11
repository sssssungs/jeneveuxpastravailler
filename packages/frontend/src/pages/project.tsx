import React from 'react';
import CommonLayout from '../components/common/commonLayout';
import { GET_TASKS } from '../graphql/task/query/getTasks';
import { addApolloState, initializeApollo } from 'apollo';
import {
	GetTasksDocument,
	GetTasksQuery,
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
import { useApolloClient } from '@apollo/react-hooks';
import _cloneDeep from 'lodash/cloneDeep';
import TaskSection from '../components/project/taskSection';

const Project = () => {
	const { data } = useGetTasksQuery();
	const ac = useApolloClient();
	// const [data, setData] = React.useState(data);
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [content, setContent] = React.useState<string>('');
	const [createTaskMutation] = useCreateTaskMutation({
		variables: { content, sectionId: 0 },
		refetchQueries: [{ query: GET_TASKS }],
	});
	const [changeTaskOrderMutation, { loading, error }] = useChangeTaskOrderMutation({
		onCompleted: a => {
			console.log('변경완료', a);
		},
	});
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
	};

	const dragEnd = async e => {
		setIsDragging(false);
		const { oldIndex, newIndex } = e;
		const { getTasks } = _cloneDeep(ac.readQuery({ query: GetTasksDocument }));
		[getTasks[oldIndex], getTasks[newIndex]] = [getTasks[newIndex], getTasks[oldIndex]];
		await changeTaskOrderMutation({
			variables: {
				sectionId: 0,
				selectOrder: data.getTasks[oldIndex].order,
				targetOrder: data.getTasks[newIndex].order,
			},
			update: (cache, { data }) => {
				cache.writeQuery<GetTasksQuery>({
					query: GetTasksDocument,
					data: {
						getTasks: data!.changeTaskOrder,
					},
				});
			},
		});
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
			<TaskSection>
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
							<TaskCard
								task={task}
								key={index}
								order={String(task.order)}
								isDragging={isDragging}
							/>
						))}
					</ReactSortable>
				)}
			</TaskSection>
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
