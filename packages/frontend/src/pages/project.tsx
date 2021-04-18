import React from 'react';
import CommonLayout from '../components/common/commonLayout';
import { addApolloState, initializeApollo } from 'apollo';
import {
	GetTasksDocument,
	Task,
	useCreateTaskMutation,
	useGetSectionsQuery,
} from 'generated/graphql';
import { Modal } from 'react-responsive-modal';
import TaskModal from '../components/project/taskModal';
import AddButton from '../components/project/addButton';
import TaskSection from '../components/project/taskSection';
import { GET_SECTIONS } from '../graphql/section/query/getSections';
import { ReactSortable } from 'react-sortablejs';
import TaskCard from 'components/project/taskCard';
import styled from '@emotion/styled';
import AddSectionButton from '../components/project/addSectionButton';

const Project = () => {
	const { data } = useGetSectionsQuery();
	const [modalOpen, setModalOpen] = React.useState<boolean>(false);
	const [content, setContent] = React.useState<string>('');
	const [sectionId, setSectionId] = React.useState<number>(-1);

	const [createTaskMutation] = useCreateTaskMutation({
		refetchQueries: [{ query: GetTasksDocument }],
	});
	// const [changeTaskOrderMutation, { loading, error }] = useChangeTaskOrderMutation({
	// 	onCompleted: a => {
	// 		console.log('변경완료', a);
	// 	},
	// });
	// const [isDragging, setIsDragging] = React.useState<boolean>(false);

	const setModal = (value: boolean, sectionId?: number) => {
		setSectionId(sectionId);
		setModalOpen(value);
	};

	const resetContent = () => {
		setModalOpen(false);
		// for modal close animation
		setContent('');
		setSectionId(-1);
	};

	const addNewTask = async () => {
		await createTaskMutation({ variables: { content, sectionId } });
		resetContent();
	};

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	// const dragStart = async e => {
	// 	setIsDragging(true);
	// };
	//
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
			<AddSectionButton />
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
				<SectionWrapper>
					{data?.getSections.map(section => (
						<TaskSection key={section.id}>
							<AddButton onClick={() => setModal(true, section.id)} />
							<div>
								{section?.tasks && (
									<ReactSortable
										group={'0'}
										list={section?.tasks}
										setList={data => {}}
										animation={300}
										swapThreshold={0.75}
										fallbackOnBody={true}
										forceFallback={true}
										// onStart={dragStart}
										// onEnd={dragEnd}
									>
										{section?.tasks.map((task: Task, index) => (
											<TaskCard
												task={task}
												key={index}
												order={String(task.order)}
												sectionId={section.id}
												// isDragging={isDragging}
											/>
										))}
									</ReactSortable>
								)}
							</div>
						</TaskSection>
					))}
				</SectionWrapper>
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

const SectionWrapper = styled.div`
	display: flex;
	flex-direction: row;
`;
