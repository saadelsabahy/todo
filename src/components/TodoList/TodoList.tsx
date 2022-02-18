import styled from 'styled-components';

const TodoList = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-auto-rows: min-content;
	color: ${(props) => props.theme.text1};
	/* overflow-y: scroll; */
	//background-color: #cdc;
`;

export default TodoList;
