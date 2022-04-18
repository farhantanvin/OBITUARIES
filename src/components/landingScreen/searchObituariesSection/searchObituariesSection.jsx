import React from 'react';
import FlowerIcon from '../../svgComponents/flower';
import SearchObituaryForm from '../../searchObituaryForm';
import Styles from './searchObituariesSection.module.scss';

class SearchObituariesSection extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<h4>SEARCH OBITUARIES</h4>
				<FlowerIcon className={Styles.flowerIcon1} />
				<FlowerIcon className={Styles.flowerIcon2} />
				<SearchObituaryForm history={this.props.history} />
			</div>
		);
	}
}

export default SearchObituariesSection;
