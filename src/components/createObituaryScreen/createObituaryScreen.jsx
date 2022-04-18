import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Country, State } from 'country-state-city';
import lottie from 'lottie-web';
import Styles from './createObituaryScreen.module.scss';
import InputStyles from '../inputField/inputField.module.scss';
import InputField from '../inputField';
import SuccessLottie from '../../assets/success.json';

class GetQuoteScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			submitted: false,
			makePublicWorldwide: true,
			countries: [],
			states: []
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

		this.setState({
			countries: Country.getAllCountries().map((country) => (
				<option key={country.isoCode} value={country.isoCode}>{country.name}</option>
			))
		});
	}

	render() {
		return (
			<div className={Styles.mainContainer}>
				<h3>CREATE NEW OBITUARY</h3>
				<Col lg={8} md={9} sm={8}>
					{
						this.state.submitted
							? <div className={Styles.lottieContainer}>
								<div className={Styles.successLottie} id="submittedFormLottie" />
								<p>{'New obituary created successfully. Let`s remember your loved one together forever!'}</p>
							</div>
							: <form onSubmit={(e) => {
								e.preventDefault();

								this.setState({ submitted: true });

								this.submitForm();
							}}>
								<img src={null} alt="" />
								<Row>
									<InputField label="First Name" type="text" className="mt-2 col-xl-4 col-lg-12" required={true} />
									<InputField label="Middle Name" type="text" className="mt-2 col-xl-4 col-lg-12" required={false} />
									<InputField label="Last Name" type="text" className="mt-2 col-xl-4 col-lg-12" required={true} />
									<InputField label="Date of Birth" className="mt-2 col-xl-6 col-lg-12" type="date" required={true} />
									<InputField label="Date of Passing" className="mt-2 col-xl-6 col-lg-12" type="date" required={true} />
									<InputField label="What city did they live in most recently?" type="text" className="mt-2 col-12" required={false} />
									<div className={`mt-2 col-12 ${InputStyles.inputContainer}`}>
										<label>Photo of Loved One  *</label>
										<div className={Styles.imageInput}>
											<input type="file" required accept="image/png, image/jpeg" />
										</div>
									</div>
								</Row>
								<div className={`mt-2 ${InputStyles.inputContainer}`}>
									<label>Special Message *</label>
									<div className={Styles.inputField}>
										<textarea ref={this.props.inputRef} placeholder="Add a message to celebrate the memory of your loved one. This will be added to all digital posts" type="text" required />
									</div>
								</div>
								<div className={InputStyles.inputContainer}>
									<label>Make Obituary Public Worldwide?</label>
									<div className="d-flex">
										<div className={Styles.radioContainer}>
											<input onChange={() => {
												this.setState({ makePublicWorldwide: true });
											}} name="makePublicWorldwide" type="radio" defaultChecked />
											<p className="m-0">Yes</p>
										</div>
										<div className={Styles.radioContainer}>
											<input onChange={() => {
												this.setState({ makePublicWorldwide: false });
											}} name="makePublicWorldwide" type="radio" />
											<p className="m-0">No</p>
										</div>
									</div>
								</div>
								{
									!this.state.makePublicWorldwide
										? <div className={`mt-4 row px-0 mx-0 ${InputStyles.inputContainer}`}>
											<label className="my-2">Please select the location to make obituary public</label>
											<Col sm={12} md={6} className="text-left px-2 mt-3">
												<select defaultValue="" onChange={async (e) => {
													await this.setState({
														statesData: State.getStatesOfCountry(e.target.value),
														states: State.getStatesOfCountry(e.target.value).map((state) => (
															<option
																key={state.isoCode}
																value={state.isoCode}>{state.name}</option>
														))
													});
												}}>
													<option value="" disabled>Country</option>
													{this.state.countries}
												</select>
											</Col>
											<Col sm={12} md={6} className="text-left px-2 mt-3">
												<select ref={(e) => { this.userState = e; }} defaultValue="">
													<option value="" disabled>State</option>
													{this.state.states}
												</select>
											</Col>
										</div>
										: null
								}
								<h2 className="my-5">About You</h2>
								<Row>
									<InputField label="First Name" type="text" className="mt-2 col-xl-6 col-lg-12" required={true} />
									<InputField label="Last Name" type="text" className="mt-2 col-xl-6 col-lg-12" required={true} />
									<InputField label="Email" className="mt-2 col-xl-6 col-lg-12" type="text" required={true} />
									<InputField label="Relation to Person" className="mt-2 col-xl-6 col-lg-12" type="text" required={true} />
								</Row>
								<button type="submit">SUBMIT</button>
							</form>
					}
				</Col>
			</div>
		);
	}
}

export default GetQuoteScreen;
