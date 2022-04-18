import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Styles from './signInScreen.module.scss';
import InputField from '../inputField';
import FlowerIcon from '../../assets/flower.png';

class SignIn extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<Col lg={5} md={7} sm={8}>
					<form onSubmit={(e) => {
						e.preventDefault();

						this.props.history.push('/dashboard');
					}}>
						<img src={FlowerIcon} alt="" />
						<h3>SIGN IN</h3>
						<hr />
						<InputField label="Email Address" type="email" required={true} />
						<InputField label="Password" type="password" required={true} className="mt-2" sensitiveField={true} />
						<button type="submit">SIGN IN</button>
						<p>Don't have an account? <Link className={Styles.link} to="/sign-up">SIGN UP</Link></p>
					</form>
				</Col>
			</div>
		);
	}
}

export default SignIn;
