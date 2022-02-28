import React from 'react';
import { DroppableProvided, DroppableProvidedProps } from 'react-beautiful-dnd';
import List from './TodoList';
interface Props {
	children: React.ReactNode;
}
// type RefType = Pick<DroppableProvided,'innerRef'>;
const TodoList = React.forwardRef<HTMLDivElement, Props>(
	({ children, ...props }, ref): JSX.Element => (
		<List ref={ref} {...props}>
			{children}
		</List>
	)
);

export default TodoList;
