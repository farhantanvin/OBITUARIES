import React from 'react';
import { Col } from 'react-bootstrap';
import lottie from 'lottie-web';
import Styles from './getQuoteScreen.module.scss';
import InputStyles from '../inputField/inputField.module.scss';
import InputField from '../inputField';
import FlowerIcon from '../../assets/flower.png';
import SuccessLottie from '../../assets/success.json';

class GetQuoteScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			submitted: false
		};
	}

	submitForm() {
		setTimeout(() => {
			lottie.loadAnimation({
				container: document.getElementById('submittedFormLottie'),
				animationData: SuccessLottie,
				renderer: 'svg',
				loop: false,
				autoplay: true,
				name: 'benefit',
				rendererSettings: {
					preserveAspectRatio: 'xMidYMid meet'
				}
			});
		}, 200);
	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		return (
			<div className={Styles.mainContainer}>
				<h3 className="mb-0">Plan a Beautiful Personalised Digital Remembrance</h3>
				<h4 className="px-4">GET A FREE GUIDE AND QUOTATION</h4>
				<Col lg={5} md={7} sm={8}>
					{
						this.state.submitted
							? <div className={Styles.lottieContainer}>
								<div className={Styles.successLottie} id="submittedFormLottie" />
								<p>{'Your request for quotation has been submitted successfully. Someone from the team will contact you shortly!'}</p>
							</div>
							: <form onSubmit={(e) => {
								e.preventDefault();

								this.setState({ submitted: true });

								this.submitForm();
							}}>
								<img src={FlowerIcon} alt="" />
								<h5>Please fill the information below</h5>
								<hr />
								<InputField label="Contact Name" type="text" required={true} />
								<InputField label="Contact Number" type="text" required={true} />
								<InputField label="Location" type="text" required={true} />
								<div className={InputStyles.inputContainer}>
									<label>Message *</label>
									<div className={Styles.inputField}>
										<textarea ref={this.props.inputRef} type="text" required/>
									</div>
								</div>
								<button type="submit">SUBMIT</button>
							</form>
					}
				</Col>
			</div>
		);
	}
}

export default GetQuoteScreen;
