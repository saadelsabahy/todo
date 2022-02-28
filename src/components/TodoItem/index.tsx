import { EditOutline } from '@styled-icons/evaicons-outline/EditOutline';
import { DeleteBin7 } from '@styled-icons/remix-line/DeleteBin7';
import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useAppDispatch } from '../../hooks';
import { deleteToDo, editTodo } from '../../redux/slices/todo.slice';
import { TDroppableId } from '../../types';
import { IconsContainer } from '../footer/Footer';
import Todo, { TodoName } from './TodoItem';
export type toDoItemProps = {
	name: string;
	id: string;
	index: number;
	droppableId: TDroppableId;
};

const ToDoItem = ({ name, id, index, droppableId }: toDoItemProps) => {
	const dispatch = useAppDispatch();
	const onDeletePressed = () => {
		dispatch(deleteToDo({ id, droppableId }));
	};
	const OnEditPress = () => {
		dispatch(editTodo({ name, id, index, droppableId }));
	};
	return (
		<Draggable key={id} index={index} draggableId={id.toString()}>
			{(provided, snapshot) => {
				return (
					<Todo
						ref={provided.innerRef}
						{...provided.draggableProps}
						{...provided.dragHandleProps}
					>
						<TodoName>{name}</TodoName>
						<IconsContainer>
							<EditOutline size='25' onClick={OnEditPress} />
							<DeleteBin7 size='25' onClick={onDeletePressed} />
						</IconsContainer>
					</Todo>
				);
			}}
		</Draggable>
	);
};

export default ToDoItem;
