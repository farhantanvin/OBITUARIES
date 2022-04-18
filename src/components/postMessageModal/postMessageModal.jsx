import React from 'react';
import Styles from './postMessageModal.module.scss';
import InputStyles from '../inputField/inputField.module.scss';
import InputField from '../inputField';

class PostMessageModal extends React.Component {
	async submitDocument() {
		this.props.closeModal('success');
	}

	render() {
		return (
			<div className={Styles.primaryModalContainer} onClick={() => {
				this.props.closeModal();
			}}>
				<form className={`modalContent ${Styles.modalContent}`} onClick={(e) => { e.stopPropagation(); }} onSubmit={(e) => {
					e.stopPropagation();
					e.preventDefault();

					this.submitDocument();
				}}>
					<button className={Styles.closeButton} onClick={() => { this.props.closeModal(); }} aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
					<h5 className={Styles.modalHeader}>Post a Message for {this.props.name}</h5>
					<div className={Styles.inputsContainer}>
						<InputField label="Name" type="text" className="mt-1" required={true} />
						<InputField label="Location" type="text" className="mt-1" required={true} />
						<div className={`mt-2 w-100 ${InputStyles.inputContainer}`}>
							<label>Special Message *</label>
							<div className={Styles.inputField}>
								<textarea placeholder="Add a message to celebrate the memory of your loved one. This will be added to all digital posts" type="text" required />
							</div>
						</div>
						<div className={`mt-2 ${InputStyles.inputContainer}`}>
							<label>Attachments  *</label>
							<div className={Styles.imageInput}>
								<input type="file" />
							</div>
						</div>
					</div>
					<button
						className={Styles.submitButton}
						type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default PostMessageModal;
