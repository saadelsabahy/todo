export type ThemeType = 'dark' | 'light';

export enum TodoState {
	NEW,
	INPROGRESS,
	DONE,
}
export interface ITodo {
	id: string;
	name: string;
	state: TodoState;
}
export interface ITodoState {
	todos: ITodo[];
}
