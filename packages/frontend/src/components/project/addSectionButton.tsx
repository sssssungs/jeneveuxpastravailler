import * as React from 'react';
import styled from '@emotion/styled';

const AddSectionButton = () => {
	return <AddSection>Add Section</AddSection>;
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
