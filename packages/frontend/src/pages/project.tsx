import React from "react";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/task/query/getTasks";

const Project = () => {
	const { data } = useQuery(GET_TASKS);
	console.log("a", data);
	return (
		<div className="container">
			<div>
				<span>'project page'</span>
			</div>
		</div>
	);
};

export default Project;
