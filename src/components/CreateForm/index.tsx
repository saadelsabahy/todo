import React, { useRef } from 'react';
import { useAppDispatch } from '../../hooks';
import { createToDo } from '../../redux/slices/todo.slice';
import {
	ButtonsContainer,
	CloseIcon,
	CreateFormContainer,
	Form,
	FormSection,
	Input,
	Separator,
	Title,
} from './Form';
type Props = {
	placeholder?: string;
	onCloseModal: () => void;
	//onSubmitForm: (inpRef: React.MutableRefObject<null>) => void;
	title: string;
	editMode?: boolean;
};

const CreateForm = ({
	placeholder,
	onCloseModal,
	//onSubmitForm,
	title,
	editMode,
}: Props) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const dispatch = useAppDispatch();
	const onSubmitForm = () => {
		dispatch(createToDo(inputRef?.current.value));

		if (inputRef.current) {
			inputRef.current.value = '';
		}
		onCloseModal();
	};
	return (
		<CreateFormContainer>
			<FormSection>
				<Title>{editMode ? 'update' : 'create'} todo</Title>
				<CloseIcon onClick={onCloseModal} />
			</FormSection>
			<Separator />
			<FormSection>
				<Input
					type={'text'}
					placeholder='enter your todo name'
					ref={inputRef}
				/>
			</FormSection>
			<Separator />
			<ButtonsContainer>
				<button
					children={editMode ? 'update' : 'submit'}
					onClick={onSubmitForm}
				/>
				<button onClick={onCloseModal}>cancel</button>
			</ButtonsContainer>
		</CreateFormContainer>
	);
};

export default CreateForm;
