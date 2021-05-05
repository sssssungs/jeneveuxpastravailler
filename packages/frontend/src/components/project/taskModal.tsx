import styled from '@emotion/styled';
import * as React from 'react';

interface Props {
	title: string;
	content: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onSave: () => void;
	onClose: () => void;
	showDelete?: boolean;
	onDelete?: () => void;
}

const TaskModal = ({
	title,
	onChange,
	content = '',
	onSave,
	onClose,
	showDelete,
	onDelete,
}: Props) => {
	const ref = React.useRef<HTMLTextAreaElement>(null);
	React.useEffect(() => {
		ref.current.blur();
	}, []);

	const onClickSave = () => {
		onSave?.();
	};

	const onClickClose = () => {
		onClose?.();
	};

	const onClickDelete = () => {
		onDelete?.();
	};

	return (
		<TaskModalWrapper>
			<TaskTitle>{title}</TaskTitle>
			<TaskContent ref={ref} onChange={onChange} value={content} />
			<TaskModalBottom>
				<SaveButton onClick={onClickSave}>Save</SaveButton>
				<CancelButton onClick={onClickClose}>Cancel</CancelButton>
				{showDelete && <DeleteButton onClick={onClickDelete}>Delete</DeleteButton>}
			</TaskModalBottom>
		</TaskModalWrapper>
	);
};

export default TaskModal;

const TaskModalWrapper = styled.div`
	width: 500px;
	height: 300px;
`;

const TaskTitle = styled.div`
	font-size: 20px;
	font-weight: bold;
	margin-bottom: 10px;
	color: ${props => props.theme.colors.G_100};
`;

const TaskContent = styled.textarea`
	width: 98%;
	height: 70%;
	resize: none;
	padding: ${props => props.theme.spacing.m};
	border-radius: ${props => props.theme.spacing.m};
	border: 1px solid ${props => props.theme.colors.SHADOW};
	background-color: ${props => props.theme.colors.BACKGROUND};
	color: ${props => props.theme.colors.G_100};
`;

const TaskModalBottom = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 10px;
`;

const SaveButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: ${props => props.theme.spacing.m};
	background-color: ${props => props.theme.colors.B_200};
	color: ${props => props.theme.colors.BACKGROUND};
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.BACKGROUND};
		background-color: ${props => props.theme.colors.B_100};
	}
`;

const CancelButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: ${props => props.theme.spacing.m};
	color: ${props => props.theme.colors.BACKGROUND};
	background-color: ${props => props.theme.colors.R_200};
	margin-left: ${props => props.theme.spacing.m};
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.BACKGROUND};
		background-color: ${props => props.theme.colors.R_100};
	}
`;

const DeleteButton = styled.button`
	width: 100px;
	height: 30px;
	border-radius: ${props => props.theme.spacing.m};
	background-color: ${props => props.theme.colors.O_200};
	margin-left: ${props => props.theme.spacing.m};
	text-transform: uppercase;
	&:hover {
		cursor: pointer;
		color: ${props => props.theme.colors.BACKGROUND};
		background-color: ${props => props.theme.colors.O_100};
	}
`;
