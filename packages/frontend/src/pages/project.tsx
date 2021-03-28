import React from "react";
import CommonLayout from "../components/common/commonLayout";
import { GET_TASKS } from "../graphql/task/query/getTasks";
import { addApolloState, initializeApollo } from "apollo";
import { TaskDto } from "generated/graphql";
import TaskCard from "components/project/taskCard";
import { Modal } from "react-responsive-modal";
import TaskModal from "../components/project/taskModal";

const Project = initialState => {
	const { data } = initialState;
	const [modalOpen, setModalOpen] = React.useState(false);

	const setModal = (value: boolean) => () => {
		setModalOpen(value);
	};

	return (
		<CommonLayout current={"project"}>
			<button onClick={setModal(true)}>new task</button>
			<Modal
				open={modalOpen}
				onClose={setModal(false)}
				closeOnOverlayClick
				center
				showCloseIcon={false}
			>
				<TaskModal setModal={setModal} />
			</Modal>
			{data.getTasks?.map((task, index) => (
				<TaskCard task={task} key={index} />
			))}
		</CommonLayout>
	);
};

export default Project;

export const getServerSideProps = async () => {
	const apolloClient = initializeApollo();
	const { data } = await apolloClient.query({ query: GET_TASKS });
	return addApolloState<TaskDto[]>(apolloClient, {
		props: { data: data as TaskDto[] },
	});
};
