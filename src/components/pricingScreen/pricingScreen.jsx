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
					<PricingComponent planName ={'Basic'} planPrice={'$50 USD'} planDetail1={'Static post on Facebook and Instagram'} planDetail2={'FB Boosting – 1 Day'} planDetail3={'Post Timeline on Website - 3 Years'}>
						<BasicPrize className={Styles.icon}/>
					</PricingComponent>
					<PricingComponent planName ={'Plus'} planPrice={'$150 USD'} planDetail1={'Static post on Facebook and Instagram'} planDetail2={'Post Timeline on Website 5 Years'} planDetail3={'Ad on Facebook – 2 days'} planDetail4={'Memorial video - 20 secs plus free song'} planDetail5={'Digital Condolences Book'} planDetail6={'Memorial video - 20 secs plus free song'}>
						<PlusPrize className={Styles.icon}/>
					</PricingComponent>
					<PricingComponent planName ={'Premium'} planPrice={'$250 USD'} planDetail1={'Facebook Ad'} planDetail2={'Posting on FB and Instagram'} planDetail3={'Timeline on Website - Lifetime'} planDetail4={'Digital Condolences Book'} planDetail5 ={'Physical Condolence Book'}>
						<PremiumPrize className={Styles.icon}/>
					</PricingComponent>
				</div>
			</div>
		);
	}
}

export default PricingScreen;
