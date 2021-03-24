import React from "react";
import CommonLayout from "../components/common/commonLayout";
import { GET_TASKS } from "../graphql/task/query/getTasks";
import { addApolloState, initializeApollo } from "apollo";
import { TaskDto } from "generated/graphql";
import TaskCard from "components/project/taskCard";

const Project = initialState => {
	const { data } = initialState;
	return (
		<CommonLayout current={"project"}>
			{data.getTasks?.map(task => (
				<TaskCard task={task} />
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
