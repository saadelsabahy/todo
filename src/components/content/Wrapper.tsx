import {
	PlusCircleFill,
	PlusCircleFillDimensions,
} from '@styled-icons/bootstrap/PlusCircleFill';
import styled from 'styled-components';
import { Container } from '../container';
const Wrapper = styled(Container)`
	height: 100%;
	width: 100vw;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1rem;
	padding-top: ${PlusCircleFillDimensions.height}px;
	padding-bottom: 1em;
	overflow-y: auto;
	top: 0;

	@media screen and (max-width: 767px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
	}
`;
export const AddButton = styled(PlusCircleFill).attrs({
	size: '45',
})`
	position: absolute;
	/* top: calc(3% + ${PlusCircleFillDimensions.height / 2}px);
	left: 50%;
	right: calc(50% - ${PlusCircleFillDimensions.width / 2}px); */
	top: calc(3% + ${PlusCircleFillDimensions.height / 2}px);
	left: calc(50% - ${PlusCircleFillDimensions.width}px);
	margin: 1em 0;
	cursor: pointer;
	color: ${(props) => props.theme.text1};
`;
export const ListName = styled.h3`
	margin: 0 0 1em;
	text-transform: capitalize;
	//padding: 0;
	/* background-color: red; */
`;
export default Wrapper;
