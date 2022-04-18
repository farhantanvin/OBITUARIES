import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Styles from '../signInScreen/signInScreen.module.scss';
import InputField from '../inputField';
import FlowerIcon from '../../assets/flower.png';

class SignUp extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<Col lg={5} md={7} sm={8}>
					<form onSubmit={(e) => {
						e.preventDefault();

						this.props.history.push('/dashboard');
					}}>
						<img src={FlowerIcon} alt="" />
						<h3>SIGN UP</h3>
						<hr />
						<InputField label="First Name" type="text" required={true} />
						<InputField label="Last Name" type="text" className="mt-2" required={true} />
						<InputField label="Email Address" type="email" className="mt-2" required={true} />
						<InputField label="Password" type="password" required={true} className="mt-2" sensitiveField={true} />
						<InputField label="Confirm Password" type="password" required={true} className="mt-2" sensitiveField={true} />
						<button type="submit">SIGN UP</button>
						<p>Already have an account? <Link className={Styles.link} to="/sign-in">SIGN IN</Link></p>
					</form>'
				</Col>
			</div>
		);
	}
}

export default SignUp;
