import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/task/query/getTasks";

const Project = () => {
	const { data } = useQuery(GET_TASKS);
	return (
		<div className="container">
			<div>{data && data.getTasks.map(task => <div>{task.content}</div>)}</div>
		</div>
	);
};

export default Project;
