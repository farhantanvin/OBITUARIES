import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './obituariesScreen.module.scss';
import SearchObituaryForm from '../searchObituaryForm';

class ObituariesScreen extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<Link to="/create-obituary" className={Styles.addObituaryButton}>ADD NEW OBITUARY</Link>
				<h3 className="mb-0">SEARCH OBITUARY</h3>
				<SearchObituaryForm className={Styles.searchForm} history={this.props.history} />
			</div>
		);
	}
}

export default ObituariesScreen;
