import React from 'react';
import BasicPrize from '../svgComponents/price/BacisPrice';
import PlusPrize from '../svgComponents/price/PlusPrize';
import PremiumPrize from '../svgComponents/price/PremiumPrize';
import PricingComponent from './PricingComponent';
import Styles from './pricingScreen.module.scss';

class PricingScreen extends React.Component {
	render() {
		return (
			<div className={Styles.priceMainContainer}>
				<h2>Plans <span>& Price</span></h2>
				<h4>{'Let the memory of your loved one be a happy one.'}</h4>
				<h5>{'Leaves an afterglow of smiles when even in their after life with one of our affordable packages.'}</h5>
				<div className={Styles.plansContainer}>
					<PricingComponent planName ={'Basic'} planPrice={'$50 USD'} planDetail1={'Post Timeline on Website - 3 Years'} planDetail2={'FB Boosting - 3 Years'} planDetail3={'Publication on Website'}>
						<BasicPrize className={Styles.icon}/>
					</PricingComponent>
					<PricingComponent planName ={'Plus'} planPrice={'$150 USD'} planDetail1={'Timeline on Website 5 Years'} planDetail2={''} planDetail3={''}>
						<PlusPrize className={Styles.icon}/>
					</PricingComponent>
					<PricingComponent planName ={'Premium'} planPrice={'$250 USD'} planDetail1={'Timeline on Website - Lifetime'} planDetail2={'FB Boosting - 1 Day'} planDetail3={'Publication on Website'}>
						<PremiumPrize className={Styles.icon}/>
					</PricingComponent>
				</div>
			</div>
		);
	}
}

export default PricingScreen;
