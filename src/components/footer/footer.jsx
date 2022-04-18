import React from 'react';
import Styles from './footer.module.scss';

class Footer extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<h5>WORLDWIDE OBITUARIES</h5>
				<p>&copy; 2021 WWO Inc. All rights reserved</p>
			</div>
		);
	}
}

export default Footer;
