import styled from 'styled-components';

const RootContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: ${(props) => props.theme.background};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export { RootContainer };
