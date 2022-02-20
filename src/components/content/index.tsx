import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { TodoState } from '../../types';
import { Container } from '../container';
import CreateForm from '../CreateForm';
import CustomModal from '../Modal';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import Wrapper, { AddButton, ListName } from './Wrapper';

type Props = {};

const Content = (props: Props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [name, setName] = useState<string>('');
	const { todos } = useAppSelector((state) => state.todoSlice);
	const openModal = () => {
		setIsOpen(true);
	};

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<>
			<AddButton onClick={openModal} />
			<CustomModal isOpen={modalIsOpen} onRequestClose={closeModal}>
				<CreateForm
					onCloseModal={closeModal}
					title={'create todo'}
					//editMode={true}
				/>
			</CustomModal>
			<Wrapper>
				<TodoList>
					<ListName>Todo</ListName>
					{todos
						.filter((todo) => todo.state === TodoState.NEW)
						.map((todo) => (
							<TodoItem
								key={todo.id}
								name={todo.name}
								state={todo.state}
								id={todo.id}
							/>
						))}
				</TodoList>

				<TodoList>
					<ListName>in-progress</ListName>
					{todos
						.filter((todo) => todo.state === TodoState.INPROGRESS)
						.map((todo) => (
							<TodoItem
								key={todo.id}
								name={todo.name}
								state={todo.state}
								id={todo.id}
							/>
						))}
				</TodoList>

				<TodoList>
					<ListName>done</ListName>
					{todos
						.filter((todo) => todo.state === TodoState.DONE)
						.map((todo) => (
							<TodoItem
								key={todo.id}
								name={todo.name}
								state={todo.state}
								id={todo.id}
							/>
						))}
				</TodoList>
			</Wrapper>
		</>
	);
};

export default Content;
