import React from "react";
import { render, screen } from "../test/test-utils";
import Project from "./project";

describe("test", () => {
	it("should render the test", () => {
		render(<Project />);
		const heading = screen.getByText("helloTest");
		expect(heading).toBeInTheDocument();
	});
});
