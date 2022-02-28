import styled from 'styled-components';
import { Container } from '../container';

const Footer = styled(Container)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.surface};
	color: ${(props) => props.theme.text1};
	text-transform: capitalize;
`;

export const CopyRight = styled.h4`
	@media (max-width: 600px) {
		margin-right: 1em;
	}
`;
export const IconsContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	> *:not(:last-child) {
		margin-right: 1em;
	}
	> * {
		cursor: pointer;
	}
`;
export const Anchor = styled.a.attrs({
	target: '_blank',
})`
	text-decoration: none;
	color: inherit;
`;
export default Footer;
