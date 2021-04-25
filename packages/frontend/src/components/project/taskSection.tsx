import styled from '@emotion/styled';
import * as React from 'react';
import { AddButtonWrapper } from './addButton';

interface Props {
	children?: React.ReactNode;
	currentSectionId: number;
	mySectionId: number;
}

const TaskSection = ({ children, currentSectionId, mySectionId }: Props) => {
	return (
		<SectionLayout currentSectionId={currentSectionId} mySectionId={mySectionId}>
			<TaskSectionWrapper>{children}</TaskSectionWrapper>
		</SectionLayout>
	);
};

export default TaskSection;

const SectionLayout = styled.div<{ currentSectionId: number; mySectionId: number }>`
	display: flex;
	width: fit-content;
	height: fit-content;
	margin-right: ${props => props.theme.spacing.xl};
	&:hover {
		${AddButtonWrapper} {
			display: block;
		}
	}
`;

const TaskSectionWrapper = styled.div`
	width: fit-content;
`;
