export type ThemeType = 'dark' | 'light';

export type TDroppableId = 'todo' | 'inProgress' | 'done';
export interface ITodo {
	id: string;
	name: string;
}
export interface ITodoState {
	todos: { inProgress: ITodo[]; done: ITodo[]; todo: ITodo[] };	editMode:boolean,editedItem:ITodo|{}
}

export type IOnDragEnd {
	destination: { droppableId: TDroppableId; index: number };
	source: { droppableId: TDroppableId; index: number };
}
