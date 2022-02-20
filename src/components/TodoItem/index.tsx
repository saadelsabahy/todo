import { EditOutline } from '@styled-icons/evaicons-outline/EditOutline';
import { DeleteBin7 } from '@styled-icons/remix-line/DeleteBin7';
import React from 'react';
import { useAppDispatch } from '../../hooks';
import { deleteToDo } from '../../redux/slices/todo.slice';
import { TodoState } from '../../types';
import { IconsContainer } from '../footer/Footer';
import Todo, { TodoName } from './TodoItem';
type Props = {
	name: string;
	id: string;
	state: TodoState;
};

const ToDoItem = ({ name, id, state }: Props) => {
	const dispatch = useAppDispatch();
	const onDeletePressed = () => {
		dispatch(deleteToDo(id));
	};
	return (
		<Todo>
			<TodoName>{name}</TodoName>
			<IconsContainer>
				<EditOutline size='25' />
				<DeleteBin7 size='25' onClick={onDeletePressed} />
			</IconsContainer>
		</Todo>
	);
};

export default ToDoItem;
