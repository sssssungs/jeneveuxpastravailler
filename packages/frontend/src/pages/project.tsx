import React from 'react';
import CommonLayout from '../components/common/commonLayout';
import { GET_TASKS } from '../graphql/task/query/getTasks';
import { addApolloState, initializeApollo } from 'apollo';
import { useCreateTaskMutation, useGetTasksQuery } from 'generated/graphql';
import TaskCard from 'components/project/taskCard';
import { Modal } from 'react-responsive-modal';
import TaskModal from '../components/project/taskModal';

const Project = () => {
	const { data } = useGetTasksQuery();
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [content, setContent] = React.useState<string>('');
	const [createTaskMutation] = useCreateTaskMutation({
		variables: { content },
		refetchQueries: [{ query: GET_TASKS }],
	});

	const setModal = (value: boolean) => () => {
		setModalOpen(value);
	};

	const resetContent = () => {
		setModalOpen(false);
		// for modal close animation
		setInterval(() => {
			setContent('');
		}, 300);
	};

	const addNewTask = async () => {
		await createTaskMutation();
		resetContent();
	};

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	return (
		<CommonLayout current={'project'}>
			<button onClick={setModal(true)}>new task</button>
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
					onSave={addNewTask}
					onClose={resetContent}
				/>
			</Modal>
			{data?.getTasks?.map((task, index) => (
				<TaskCard task={task} key={index} />
			))}
		</CommonLayout>
	);
};

export default Project;

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();
	await apolloClient.query({ query: GET_TASKS });
	console.log('apolloClient', apolloClient);
	return addApolloState(apolloClient, {
		props: {},
	});
};
