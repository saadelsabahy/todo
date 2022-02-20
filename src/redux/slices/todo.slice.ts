import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { ITodoState, TodoState } from '../../types';

const initialState: ITodoState = {
	todos: [
		{
			id: v4(),
			name: 'first todo',
			state: TodoState.NEW,
		},
		{
			id: v4(),
			name: 'second todo',
			state: TodoState.INPROGRESS,
		},
		{
			id: v4(),
			name: 'third todo',
			state: TodoState.INPROGRESS,
		},
		{
			id: v4(),
			name: 'fourth todo',
			state: TodoState.DONE,
		},
		{
			id: v4(),
			name: 'fifth todo',
			state: TodoState.NEW,
		},
	],
};
const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		createToDo: (state, action: PayloadAction<string>) => {
			console.log(action.payload);
			state.todos.push({
				name: action.payload,
				id: v4(),
				state: TodoState.NEW,
			});
		},
		deleteToDo: (state, action: PayloadAction<string>) => {
			console.log({ delete: action.payload });

			state.todos = state.todos.filter((todo) => todo.id !== action.payload);
		},
	},
});
export const { createToDo, deleteToDo } = todoSlice.actions;
export default todoSlice.reducer;
