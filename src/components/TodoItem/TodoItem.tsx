import styled from 'styled-components';

const TodoItem = styled.div`
	display: flex;
	flex: 1;
	min-height: 2em;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.surface};
	color: ${(props) => props.theme.text1};
	padding: 1em;
	:not(:last-child) {
		margin-bottom: 1em;
	}
	:hover {
		opacity: 0.7;
		cursor: pointer;
	}
`;
const TodoName = styled.span`
	display: flex;
	flex: 1;
	text-align: justify;
	padding-right: 0.8em;
`;
const IconsContainer = styled.div`
	display: flex;
	flex: 1;
	justify-content: space-between;
	align-items: center;

	> *:not(:last-child) {
		margin-right: 1em;
	}
	:nth-child(-n + 2) {
		cursor: pointer;
	}
`;
export { TodoName, IconsContainer };
export default TodoItem;
