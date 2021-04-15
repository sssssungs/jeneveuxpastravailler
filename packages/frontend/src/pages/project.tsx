import React from 'react';
import CommonLayout from '../components/common/commonLayout';
import { addApolloState, initializeApollo } from 'apollo';
import {
	useChangeTaskOrderMutation,
	useCreateTaskMutation,
	useGetSectionsQuery,
} from 'generated/graphql';
import { Modal } from 'react-responsive-modal';
import TaskModal from '../components/project/taskModal';
import AddButton from '../components/project/addButton';
import { useApolloClient } from '@apollo/react-hooks';
import TaskSection from '../components/project/taskSection';
import { GET_SECTIONS } from '../graphql/section/query/getSections';

const Project = () => {
	const { data } = useGetSectionsQuery();
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [content, setContent] = React.useState<string>('');
	const [createTaskMutation] = useCreateTaskMutation({
		variables: { content, sectionId: 0 },
		refetchQueries: [{ query: GET_SECTIONS }],
	});
	// const [changeTaskOrderMutation, { loading, error }] = useChangeTaskOrderMutation({
	// 	onCompleted: a => {
	// 		console.log('변경완료', a);
	// 	},
	// });
	// const [isDragging, setIsDragging] = React.useState<boolean>(false);

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

	// const dragEnd = async e => {
	// 	setIsDragging(false);
	// 	const { oldIndex, newIndex } = e;
	// 	const { getTasks } = _cloneDeep(ac.readQuery({ query: GetTasksDocument }));
	// 	[getTasks[oldIndex], getTasks[newIndex]] = [getTasks[newIndex], getTasks[oldIndex]];
	// 	await changeTaskOrderMutation({
	// 		variables: {
	// 			sectionId: 0,
	// 			selectOrder: data.getTasks[oldIndex].order,
	// 			targetOrder: data.getTasks[newIndex].order,
	// 		},
	// 		update: (cache, { data }) => {
	// 			cache.writeQuery<GetTasksQuery>({
	// 				query: GetTasksDocument,
	// 				data: {
	// 					getTasks: data!.changeTaskOrder,
	// 				},
	// 			});
	// 		},
	// 	});
	// };

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
				{data?.getSections.map(v => (
					<div>{v.tasks.map(vv => vv.content)}</div>
				))}
				{/*{data?.getSections && (*/}
				{/*	<ReactSortable*/}
				{/*		group={'0'}*/}
				{/*		list={data?.getSections as TaskDto[]}*/}
				{/*		setList={data => {}}*/}
				{/*		animation={300}*/}
				{/*		swapThreshold={0.75}*/}
				{/*		fallbackOnBody={true}*/}
				{/*		forceFallback={true}*/}
				{/*		onStart={dragStart}*/}
				{/*		onEnd={dragEnd}*/}
				{/*	>*/}
				{/*		{data?.getTasks?.map((task: TaskDto, index) => (*/}
				{/*			<TaskCard*/}
				{/*				task={task}*/}
				{/*				key={index}*/}
				{/*				order={String(task.order)}*/}
				{/*				isDragging={isDragging}*/}
				{/*			/>*/}
				{/*		))}*/}
				{/*	</ReactSortable>*/}
				{/*)}*/}
			</TaskSection>
		</CommonLayout>
	);
};

export default Project;

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query({ query: GET_SECTIONS });
	return addApolloState(apolloClient, {
		props: {},
	});
};
