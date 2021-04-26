import styled from '@emotion/styled';
import * as React from 'react';
import { AddButtonWrapper } from './addButton';

interface Props {
	children?: React.ReactNode;
	currentSectionId: number;
	mySectionId: number;
	sectionName: string;
}

const TaskSection = ({ children, currentSectionId, mySectionId, sectionName }: Props) => {
	const [modifyMode, setModifyMode] = React.useState<boolean>(false);
	const [currentSectionName, setCurrentSectionName] = React.useState<string>(sectionName);
	const inputRef = React.useRef<HTMLInputElement>(null);

	const onChangeSectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentSectionName(e.target.value);
	};

	const onBlurSectionTitleInput = e => {
		setModifyMode(false);
		window.alert('저장하긔!');
	};

	const onClickSectionTitle = () => {
		setModifyMode(true);
	};

	React.useEffect(() => {
		if (modifyMode) {
			inputRef.current.focus();
		}
	}, [modifyMode]);

	return (
		<SectionLayout currentSectionId={currentSectionId} mySectionId={mySectionId}>
			{modifyMode ? (
				<SectionTitleModify
					value={currentSectionName}
					onChange={onChangeSectionName}
					onBlur={onBlurSectionTitleInput}
					ref={inputRef}
				/>
			) : (
				<SectionTitle onClick={onClickSectionTitle}>{sectionName}</SectionTitle>
			)}
			<TaskSectionWrapper>{children}</TaskSectionWrapper>
		</SectionLayout>
	);
};

export default TaskSection;

const SectionTitleModify = styled.input`
	font-size: 17px;
	margin-bottom: 5px;
	font-weight: 600;
	box-sizing: border-box;
	background-color: ${props => props.theme.colors.light.SHADOW};
`;

const SectionLayout = styled.div<{ currentSectionId: number; mySectionId: number }>`
	display: flex;
	flex-direction: column;
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

const SectionTitle = styled.div`
	font-size: 17px;
	margin-bottom: 5px;
	margin-left: 2px;
	font-weight: 600;
`;
