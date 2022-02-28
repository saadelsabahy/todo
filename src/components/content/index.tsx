import React, { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeTodoState } from '../../redux/slices/todo.slice';
import CreateForm from '../CreateForm';
import CustomModal from '../Modal';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import Wrapper, { AddButton, ListName } from './Wrapper';
type Props = {};

const Content = (props: Props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [name, setName] = useState<string>('');
	const { todos, editMode } = useAppSelector((state) => state.todoSlice);
	const dispatch = useAppDispatch();
	const openModal = () => {
		setIsOpen(true);
	};

	function closeModal() {
		setIsOpen(false);
	}
	// type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
	const onDragEnd = ({
		destination,
		source,
	}: Pick<DropResult, 'destination' | 'source'>) => {
		if (!destination) {
			// console.log('not dropped in droppable area');
			return;
		}
		if (
			destination.index === source.index &&
			destination.droppableId === source.droppableId
		) {
			// console.log('dropped in same position');
			return;
		}
		const item = todos[source.droppableId].find(
			(_, dx: number) => dx === source.index
		);
		//console.log({ item });

		dispatch(
			changeTodoState({
				item,
				source,
				destination,
			})
		);
	};
	return (
		<>
			<AddButton onClick={openModal} />
			<CustomModal
				isOpen={modalIsOpen || editMode}
				onRequestClose={closeModal}
			>
				<CreateForm
					onCloseModal={closeModal}
					title={'create todo'}
					//editMode={true}
				/>
			</CustomModal>
			<DragDropContext onDragEnd={onDragEnd}>
				<Wrapper>
					<Droppable droppableId={'todo'}>
						{(provided) => {
							return (
								<TodoList
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<ListName>Todo</ListName>
									{todos.todo.map((todo, index) => (
										<TodoItem
											key={todo.id}
											name={todo.name}
											id={todo.id}
											index={index}
											droppableId={'todo'}
										/>
									))}
									{provided.placeholder}
								</TodoList>
							);
						}}
					</Droppable>
					<Droppable droppableId={'inProgress'}>
						{(provided) => {
							return (
								<TodoList
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<ListName>in-progress</ListName>
									{todos.inProgress.map((todo, index) => (
										<TodoItem
											key={todo.id}
											name={todo.name}
											id={todo.id}
											index={index}
											droppableId={'inProgress'}
										/>
									))}
									{provided.placeholder}
								</TodoList>
							);
						}}
					</Droppable>
					<Droppable droppableId={'done'}>
						{(provided) => {
							return (
								<TodoList
									ref={provided.innerRef}
									{...provided.droppableProps}
								>
									<ListName>done</ListName>
									{todos.done.map((todo, index) => (
										<TodoItem
											key={todo.id}
											name={todo.name}
											id={todo.id}
											index={index}
											droppableId={'done'}
										/>
									))}
									{provided.placeholder}
								</TodoList>
							);
						}}
					</Droppable>
				</Wrapper>
			</DragDropContext>
		</>
	);
};

export default Content;
