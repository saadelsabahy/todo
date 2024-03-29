import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DropResult } from 'react-beautiful-dnd';
import { v4 } from 'uuid';
import {
	IonDrag,
	ITodo,
	ITodoState,
	TDroppableId,
	toDoItemProps,
} from '../../types';

const initialState: ITodoState = {
	todos: { inProgress: [], done: [], todo: [] },
	editMode: false,
	editedItem: undefined,
	modalIsOpen: false,
};
type changeTodoPayload = {
	item: ITodo;
} & IonDrag;
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
			state.modalIsOpen = true;
			state.editedItem = { ...payload };
		},
		submitUpdatedTodo: (state, action: PayloadAction<string>) => {
			state.todos[state?.editedItem?.droppableId as TDroppableId][
				state?.editedItem?.index as number
			].name = action.payload;
			state.editMode = false;
			state.modalIsOpen = false;
			state.editedItem = undefined;
		},
		toggleModal: (state) => {
			state.modalIsOpen = !state.modalIsOpen;
		},
	},
});
export const {
	createToDo,
	deleteToDo,
	changeTodoState,
	editTodo,
	submitUpdatedTodo,
	toggleModal,
} = todoSlice.actions;
export default todoSlice.reducer;
