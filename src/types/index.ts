export type ThemeType = 'dark' | 'light';

export type TDroppableId = 'todo' | 'inProgress' | 'done';
export interface ITodo {
	id: string;
	name: string;
}

export type toDoItemProps = {
	name: string;
	id: string;
	index: number;
	droppableId: TDroppableId;
};
export interface ITodoState {
	todos: { inProgress: ITodo[]; done: ITodo[]; todo: ITodo[] };
	editMode: boolean;
	editedItem: toDoItemProps | undefined;
	modalIsOpen: boolean;
}

export type IOnDragEnd = {
	destination: { droppableId: TDroppableId; index: number };
	source: { droppableId: TDroppableId; index: number };
};

export interface DropResultItem {
	droppableId: TDroppableId;
	index: number;
}
export interface IonDrag {
	source: DropResultItem;
	destination: DropResultItem;
}
