import React from 'react';
import PricingScreen from '../pricingScreen/pricingScreen';
import HeroSection from './heroSection';
import Styles from './landingScreen.module.scss';
import PlanRemembranceSection from './planRemembranceSection';
import RecentObituariesSection from './recentObituariesSection';
import SearchObituariesSection from './searchObituariesSection';

class LandingScreen extends React.Component {
	render() {
		return (
			<div className={Styles.mainContainer}>
				<HeroSection />
				<SearchObituariesSection history={this.props.history} />
				<RecentObituariesSection history={this.props.history} />
				<PlanRemembranceSection history={this.props.history} />
				<PricingScreen />
			</div>
		);
	}
}

export default LandingScreen;
