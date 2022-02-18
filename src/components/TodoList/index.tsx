import React from 'react';
import List from './TodoList';
type Props = {};

const TodoList: React.FC<Props> = ({ children }) => {
	return <List>{children}</List>;
};

export default TodoList;
