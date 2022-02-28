import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DropResult } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import { ITodo, ITodoState, TDroppableId, toDoItemProps } from '../../types';

const initialState: ITodoState = {
	todos: { inProgress: [], done: [], todo: [] },
	editMode: false,
	editedItem: {},
};
type changeTodoPayload = {
	item: ITodo | undefined;
} & Pick<DropResult, 'destination' | 'source'>;
type DeleteItemPayloadType = {
	id: string;
	droppableId: TDroppableId;
};
const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		createToDo: (state, action: PayloadAction<string>) => {
			console.log(action.payload);
			state.todos.todo.push({
				name: action.payload,
				id: v4(),
			});
		},
		deleteToDo: (
			state,
			{ payload: { droppableId, id } }: PayloadAction<DeleteItemPayloadType>
		) => {
			console.log(droppableId, id);

			state.todos[droppableId] = state.todos[droppableId].filter(
				(todo) => todo.id !== id
			);
		},
		changeTodoState: (
			state,
			{
				payload: { destination, source, item },
			}: PayloadAction<changeTodoPayload>
		) => {
			state.todos[source.droppableId].splice(source.index, 1);

			state.todos[destination.droppableId].splice(
				destination.index,
				0,
				item
			);
		},
		editTodo: (state, { payload }: PayloadAction<toDoItemProps>) => {
			state.editMode = true;
			state.editedItem = { ...payload };
		},
		submitUpdatedTodo: (state, action: PayloadAction<string>) => {
			state.todos[state.editedItem.droppableId][
				state.editedItem.index
			].name = action.payload;
			state.editMode = false;
			state.editedItem = {};
		},
	},
});
export const {
	createToDo,
	deleteToDo,
	changeTodoState,
	editTodo,
	submitUpdatedTodo,
} = todoSlice.actions;
export default todoSlice.reducer;
