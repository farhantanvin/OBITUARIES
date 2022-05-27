import React from 'react';
import SearchObituaryForm from '../../searchObituaryForm';
import Styles from './searchObituariesSection.module.scss';

class SearchObituariesSection extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<h4>Search <span>Obituaries</span></h4>
				<SearchObituaryForm history={this.props.history} />
			</div>
		);
	}
}

export default SearchObituariesSection;
