import styled from '@emotion/styled';
import * as React from 'react';

interface Props {
	children?: React.ReactNode;
}

const TaskSection = ({ children }: Props) => {
	const [addSection, setAddSection] = React.useState<boolean>(false);
	return (
		<SectionLayout>
			<TaskSectionWrapper>{children}</TaskSectionWrapper>
			<AddInput />
		</SectionLayout>
	);
};

export default TaskSection;

const AddInput = styled.div`
	display: none;
	width: 20px;
	margin-left: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.light.SHADOW};
	border-radius: ${props => props.theme.spacing.m};
	background-color: transparent;
	&:hover {
		cursor: pointer;
	}
`;
const SectionLayout = styled.div`
	display: flex;
	width: fit-content;
	border: 2px red dashed;
	&:hover {
		${AddInput} {
			display: block;
		}
	}
`;

const TaskSectionWrapper = styled.div`
	width: fit-content;
	background-color: yellow;
`;
