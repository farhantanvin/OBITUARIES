import { City, Country, State } from 'country-state-city';
import gsap from 'gsap';
import React, { createRef } from 'react';
import { Alert, Col, Row } from 'react-bootstrap';
import ObituariesData from '../../data/obituaries.json';
import ObituarySearchResult from '../obituarySearchResult';
import PostMessageModal from '../postMessageModal';
import Spinner from '../spinner';
import Styles from './searchObituaryForm.module.scss';

class SearchObituaryForm extends React.Component {
	constructor(props) {
		super(props);

		this.firstName = createRef('');
		this.lastName = createRef('');
		this.country = createRef('');
		this.userState = createRef('');
		this.city = createRef('');
		this.year = createRef('');
		this.keyword = createRef('');

		this.state = {
			countries: [],
			statesData: [],
			states: [],
			cities: [],
			searchingObituaries: false,
			searchResults: [],
			noSearchResults: false,
			showPostMessageModal: false,
			postMessageFor: '',
			success: false
		};
	}

	componentDidMount() {
		this.setState({
			countries: Country.getAllCountries().map((country) => (
				<option key={country.isoCode} value={country.isoCode}>{country.name}</option>
			))
		});
	}

	searchObituaries() {
		this.hideResults();

		if (this.firstName.value
			|| this.lastName.value
				|| this.country.value
				|| this.userState.value
				|| this.city.value
				|| this.year.value
				|| this.keyword.value
		) {
			this.setState({
				searchingObituaries: true,
				noSearchResults: false,
				searchResults: []
			});

			const obituariesResults = ObituariesData.filter((obituary) => (
				(this.keyword.value ? JSON.stringify(obituary).includes(this.keyword.value) : false)
				|| ((this.firstName.value ? obituary.firstName.includes(this.firstName.value) : false)
					|| (this.lastName.value ? obituary.lastName.includes(this.lastName.value) : false)
					|| (this.country.options[this.country.selectedIndex].text
						? obituary.country === this.country.options[this.country.selectedIndex].text
						: false)
					|| (this.userState.options[this.userState.selectedIndex].text
						? obituary.state === this.userState.options[this.userState.selectedIndex].text
						: false)
					|| (this.city.value ? obituary.city === this.city.value : false)
					|| (this.year.value ? obituary.yearOfPassing === this.year.value : false))
			));

			setTimeout(() => {
				this.setState({
					searchingObituaries: false,
					noSearchResults: !obituariesResults.length,
					searchResults: obituariesResults
				});

				if (obituariesResults.length) {
					gsap.to('.obituariesResults', {
						height: 'fit-content',
						duration: 0.5
					});
				} else {
					setTimeout(() => {
						this.setState({
							noSearchResults: false
						});
					}, 5000);
				}
			}, 1000);
		} else {
			this.setState({
				noSearchResults: true
			});

			setTimeout(() => {
				this.setState({
					noSearchResults: false
				});
			}, 5000);
		}
	}

	hideResults() {
		this.setState({
			searchingObituaries: false,
			searchResults: []
		});

		gsap.to('.obituariesResults', {
			height: 0,
			duration: 0.5
		});
	}

	showModal(name) {
		this.setState({
			showPostMessageModal: true,
			postMessageFor: name
		});
	}

	hideModal(message) {
		this.setState({
			showPostMessageModal: false,
			postMessageFor: '',
			success: message === 'success' ? 'Message successfully posted!' : ''
		});

		setTimeout(() => {
			this.setState({ success: '' });
		}, 5000);
	}

	render() {
		return (
			<div className={`${Styles.mainContainer} ${this.props.className}`}>
				<Alert
					show
					variant="success"
					className={`text-center w-100 ${Styles.banner} ${this.state.success ? Styles.showBanner : null}`}>
					{this.state.success ? this.state.success : null}
				</Alert>
				<Row className={Styles.inputsContainer}>
					<Col sm={12} md={6}>
						<input ref={(e) => { this.firstName = e; }} type="text" placeholder="First Name" />
					</Col>
					<Col sm={12} md={6}>
						<input ref={(e) => { this.lastName = e; }} type="text" placeholder="Last Name" />
					</Col>
				</Row>
				<Row className={Styles.dropdownsContainer}>
					<Col sm={12} md={6}>
						<select ref={(e) => { this.country = e; }} defaultValue="" onChange={async (e) => {
							await this.setState({
								statesData: State.getStatesOfCountry(e.target.value),
								states: State.getStatesOfCountry(e.target.value).map((state) => (
									<option key={state.isoCode} value={state.isoCode}>{state.name}</option>
								))
							});
						}}>
							<option value="" disabled>Country</option>
							{this.state.countries}
						</select>
					</Col>
					<Col sm={12} md={6}>
						<select ref={(e) => { this.userState = e; }} defaultValue="" onChange={(e) => {
							this.setState({
								cities: City.getCitiesOfState(
									this.state.statesData[e.target.selectedIndex - 1].countryCode,
									e.target.value
								).map((city) => (
									<option key={city.name} value={city.name}>{city.name}</option>
								))
							});
						}}>
							<option value="" disabled>State</option>
							{this.state.states}
						</select>
					</Col>
				</Row>
				<Row className={Styles.dropdownsContainer}>
					<Col sm={12} md={6}>
						<select ref={(e) => { this.city = e; }} defaultValue="" onChange={(e) => {
							this.setState({ selectedCity: e.target.value });
						}}>
							<option value="" disabled>City</option>
							{this.state.cities}
						</select>
					</Col>
					<Col sm={12} md={6}>
						<select ref={(e) => { this.year = e; }} defaultValue="">
							<option value="" disabled>Year</option>
							{[...Array(100)].map((year, index) => (
								<option
									key={new Date().getFullYear() - index}
									value={new Date().getFullYear() - index}>
									{new Date().getFullYear() - index}
								</option>
							))}
						</select>
					</Col>
				</Row>
				<input ref={(e) => { this.keyword = e; }} className={Styles.searchKeywordInput} type="text" placeholder="Search by keyword" />
				<button className={Styles.searchButton} onClick={() => { this.searchObituaries(); }}>
					{
						this.state.searchingObituaries
							? <Spinner className={Styles.spinner} />
							: 'Search'
					}
				</button>
				<p className={Styles.noSearchResultsText}>{this.state.noSearchResults ? 'No Search Results Found!' : null}</p>
				<div className={`obituariesResults ${Styles.obituariesResults}`}>
					<button
						className={Styles.closeButton}
						onClick={() => { this.hideResults(); }}>
						&times;
					</button>
					<h5>SEARCH RESULTS</h5>
					<div className="mt-5">
						{
							this.state.searchResults
								? this.state.searchResults.map((obituary, index) => (
									<ObituarySearchResult
										obituary={obituary}
										showModal={this.showModal.bind(this)}
										index={index}
										history={this.props.history} />
								))
								: null
						}
					</div>
				</div>
				{
					this.state.showPostMessageModal
						? <PostMessageModal
							name={this.state.postMessageFor}
							closeModal={this.hideModal.bind(this)} />
						: null
				}
			</div>
		);
	}
}

export default SearchObituaryForm;
