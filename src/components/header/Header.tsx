import styled from 'styled-components';
import { Container } from '../container';

const Header = styled(Container)`
	background-color: ${(props) => props.theme.surface};
	color: ${(props) => props.theme.text1};
	display: flex;
	justify-content: space-between;
	align-items: center;
	:nth-child(-n + 2) {
		cursor: pointer;
	}
`;
const AppName = styled.h2``;
export { Header, AppName };
