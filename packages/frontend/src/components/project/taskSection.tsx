import styled from '@emotion/styled';
import * as React from 'react';

interface Props {
	children?: React.ReactNode;
}

const TaskSection = ({ children }: Props) => {
	return (
		<SectionLayout>
			<TaskSectionWrapper>{children}</TaskSectionWrapper>
		</SectionLayout>
	);
};

export default TaskSection;

const SectionLayout = styled.div`
	display: flex;
	width: fit-content;
	margin-right: ${props => props.theme.spacing.xl};
`;

const TaskSectionWrapper = styled.div`
	width: fit-content;
`;
