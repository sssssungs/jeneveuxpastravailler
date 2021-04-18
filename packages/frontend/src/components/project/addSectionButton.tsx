import * as React from 'react';
import styled from '@emotion/styled';
import { Modal } from 'react-responsive-modal';
import { GetSectionsDocument, useCreateSectionMutation } from '../../generated/graphql';

const AddSectionButton = () => {
	const [openAddSectionModal, setOpenAddSectionModal] = React.useState<boolean>(false);
	const [createSectionMutation] = useCreateSectionMutation({
		refetchQueries: [{ query: GetSectionsDocument }],
	});
	const toggleModal = async () => {
		await createSectionMutation({ variables: { order: 1 } });
		// setOpenAddSectionModal(!openAddSectionModal);
	};

	return (
		<>
			<Modal open={openAddSectionModal} onClose={toggleModal}>
				<div>asdf</div>
			</Modal>
			<AddSection onClick={toggleModal}>Add Section</AddSection>
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
