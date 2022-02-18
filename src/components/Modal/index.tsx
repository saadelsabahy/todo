import React from 'react';
import { default as Modal, default as ReactModal } from 'react-modal';
interface Props extends ReactModal.Props {}

const customStyles: ReactModal.Styles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',

		transform: 'translate(-50%, -50%)',
	},
	overlay: {
		background: 'rgba(0,0,0,.4)',
	},
};
const CustomModal: React.FC<Props> = ({ children, ...props }) => {
	return (
		<Modal
			// isOpen={true}
			// onAfterOpen={afterOpenModal}
			//onRequestClose={closeModal}
			style={customStyles}
			ariaHideApp={false}
			contentLabel='custom modal'
			{...props}
		>
			{children}
			{/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
			{/* <button onClick={closeModal}>close</button>
				<div>I am a modal</div>
				<form>
					<input />
					<button>tab navigation</button>
					<button>stays</button>
					<button>inside</button>
					<button>the modal</button>
				</form> */}
		</Modal>
	);
};

export default CustomModal;
