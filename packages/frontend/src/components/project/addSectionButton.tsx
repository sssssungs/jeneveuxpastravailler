import * as React from 'react';
import styled from '@emotion/styled';
import { Modal } from 'react-responsive-modal';
import { GetSectionsDocument, useCreateSectionMutation } from '../../generated/graphql';
import TaskModal from './taskModal';

const AddSectionButton = () => {
	const [openAddSectionModal, setOpenAddSectionModal] = React.useState<boolean>(false);
	const [sectionTitle, setSectionTitle] = React.useState<string>('');
	const [createSectionMutation] = useCreateSectionMutation({
		refetchQueries: [{ query: GetSectionsDocument }],
	});

	const toggleSectionModal = () => {
		setOpenAddSectionModal(true);
	};

	const onSaveSection = async () => {
		await createSectionMutation({ variables: { order: 1, name: sectionTitle } });
		resetContent();
	};

	const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setSectionTitle(e.target.value);
	};

	const resetContent = () => {
		setOpenAddSectionModal(false);
		setSectionTitle('');
	};

	return (
		<>
			<Modal
				open={openAddSectionModal}
				onClose={resetContent}
				closeOnOverlayClick
				center
				showCloseIcon={false}
			>
				<TaskModal
					title={'Add New Section'}
					content={sectionTitle}
					onChange={onChange}
					onSave={onSaveSection}
					onClose={resetContent}
					showDelete={false}
				/>
			</Modal>
			<AddSection onClick={toggleSectionModal}>Add Section</AddSection>
		</>
	);
};

export default AddSectionButton;

const AddSection = styled.button`
	position: absolute;
	z-index: 999;
	bottom: 20px;
	right: 20px;
	width: 100px;
	height: 50px;
	background-color: ${props => props.theme.colors.light.BACKGROUND};
	border: 1px solid ${props => props.theme.colors.light.G_100};
	box-shadow: 2px 2px 3px ${props => props.theme.colors.light.G_100};
	border-radius: ${props => props.theme.spacing.l};
	cursor: pointer;
	&:hover {
		box-shadow: 2px 2px 5px ${props => props.theme.colors.light.G_300};
	}
`;
