import { EditOutline } from '@styled-icons/evaicons-outline/EditOutline';
import { DeleteBin7 } from '@styled-icons/remix-line/DeleteBin7';
import React from 'react';
import { IconsContainer } from '../footer/Footer';
import Todo, { TodoName } from './TodoItem';
type Props = {};

const ToDoItem = (props: Props) => {
	return (
		<Todo>
			<TodoName>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sequi
				facilis fuga possimus eos aperiam. Ipsum nisi reprehenderit maxime
				corporis perferendis voluptates quos tenetur? Quae fuga laudantium
				commodi amet libero.
			</TodoName>
			<IconsContainer>
				<EditOutline size='25' />
				<DeleteBin7 size='25' />
			</IconsContainer>
		</Todo>
	);
};

export default ToDoItem;
