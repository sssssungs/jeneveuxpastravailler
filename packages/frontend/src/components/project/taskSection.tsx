import styled from '@emotion/styled';
import { GetSectionsDocument, useUpdateSectionNameMutation } from 'generated/graphql';
import * as React from 'react';
import { mq } from 'styles/mq';
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
	const [useUpdateSectionName] = useUpdateSectionNameMutation({
		refetchQueries: [{ query: GetSectionsDocument }],
	});

	const onChangeSectionName = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentSectionName(e.target.value);
	};

	const onBlurSectionTitleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentSectionName(e.target.value);
		setModifyMode(false);
		await useUpdateSectionName({
			variables: { sectionId: mySectionId, title: currentSectionName },
		});
	};

	const onClickSectionTitle = () => {
		setModifyMode(true);
	};

	React.useEffect(() => {
		if (modifyMode) {
			inputRef.current.focus();
		}
	}, [modifyMode]);

	const onKeyDownSectionTitle = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') inputRef.current.blur();
	};
	return (
		<SectionLayout currentSectionId={currentSectionId} mySectionId={mySectionId}>
			{modifyMode ? (
				<SectionTitleModify
					value={currentSectionName}
					onChange={onChangeSectionName}
					onBlur={onBlurSectionTitleInput}
					onKeyDown={onKeyDownSectionTitle}
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
	background-color: ${props => props.theme.colors.SHADOW};
`;

const SectionLayout = styled.div<{ currentSectionId: number; mySectionId: number }>`
	z-index: 2;
	display: flex;
	flex-direction: column;
	width: 100%;
	//height: fit-content;
	margin-right: ${props => props.theme.spacing.xl};
	&:hover {
		${AddButtonWrapper} {
			display: block;
		}
	}
`;

const TaskSectionWrapper = styled.div`
	${mq({
		width: ['100%', 'fit-content'],
	})}
`;

const SectionTitle = styled.div`
	font-size: 17px;
	margin-bottom: 5px;
	margin-left: 2px;
	font-weight: 600;
`;
