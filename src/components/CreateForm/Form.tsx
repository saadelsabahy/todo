import { Close } from '@styled-icons/evaicons-solid/Close';
import styled from 'styled-components';
const CreateFormContainer = styled.div`
	background-color: ${(props) => props.theme.background};
	color: ${(props) => props.theme.text1};
	width: 50vw;
	border-radius: 1em;
	@media screen and (max-width: 600px) {
		width: 80vw;
	}
`;
const FormSection = styled.section`
	padding: 1em;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.h4`
	font-size: 2em;
	font-weight: 600;
	text-transform: capitalize;
	margin: 0;
	padding: 0;
`;
const CloseIcon = styled(Close).attrs({
	size: '30',
})`
	width: 2.5em;
	height: 2.5em;
	border-radius: 1.25em;

	cursor: pointer;
	:hover {
		background-color: rgba(255, 255, 255, 0.6);
	}
`;
const Form = styled.form`
	width: 100%;
	height: 100%;
`;
const Input = styled.input`
	width: 100%;
	/* color: ${(props) => props.theme.text1}; */
	border: none;
	outline: none;
	height: 3em;
	border-radius: 1em;
	padding: 0 0.9em;
	text-transform: capitalize;
	:hover {
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
			0 6px 20px 0 rgba(0, 0, 0, 0.19);
	}
	/* :focus {
		outline: none;
	} */
`;
const ButtonsContainer = styled(FormSection)`
	justify-content: flex-end;
	> button {
		padding: 0.5em 1em;
		border-radius: 0.4em;
		border: none;
		background-color: ${(props) => props.theme.surface};
		color: ${(props) => props.theme.text1};
		font-size: 1.1em;
		font-weight: 500;
		cursor: pointer;
	}
	> button:not(:last-child) {
		margin-right: 1em;
	}
	> button:hover {
		background-color: ${(props) => props.theme.secondary};
		//border: 1px solid ${(props) => props.theme.secondary};
		color: white;
	}
`;
const Separator = styled.hr`
	color: ${(props) => props.theme.text1};
`;
export {
	CreateFormContainer,
	Title,
	Separator,
	FormSection,
	Input,
	Form,
	ButtonsContainer,
	CloseIcon,
};
