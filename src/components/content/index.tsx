import React from 'react';
import { Container } from '../container';
import CustomModal from '../Modal';
import TodoItem from '../TodoItem';
import TodoList from '../TodoList';
import Wrapper, { AddButton, ListName } from './Wrapper';

type Props = {};

const Content = (props: Props) => {
	const [modalIsOpen, setIsOpen] = React.useState(false);

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
				<div>hello</div>
			</CustomModal>
			<Wrapper>
				<TodoList>
					<ListName>Todo</ListName>
					<TodoItem />
					{/* <TodoItem />
					<TodoItem />
					<TodoItem />
					<TodoItem />
					<TodoItem /> */}
				</TodoList>

				<TodoList>
					<ListName>in-progress</ListName>
					<TodoItem />
				</TodoList>

				<TodoList>
					<ListName>done</ListName>
					<TodoItem />
				</TodoList>
			</Wrapper>
		</>
	);
};

export default Content;
