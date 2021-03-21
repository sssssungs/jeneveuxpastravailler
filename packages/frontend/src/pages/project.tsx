import React from "react";
import CommonLayout from "../components/common/commonLayout";
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../graphql/task/query/getTasks";

const Project = () => {
	// const { data, loading } = useQuery(GET_TASKS);
	return (
		<CommonLayout current={"project"}>
			<div className="container">
				<div>helloTest</div>
			</div>
		</CommonLayout>
	);
};

export default Project;
