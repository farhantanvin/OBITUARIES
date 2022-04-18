import React from 'react';
import Styles from './inputField.module.scss';
import VisibilityIcon from '../svgComponents/visibilityIcon';

class InputField extends React.Component {
	constructor(props) {
		super(props);

		this.state = { showSensitiveInfo: false };
	}

	toggleVisibility() {
		this.setState({ showSensitiveInfo: !this.state.showSensitiveInfo });
	}

	render() {
		return (
			<div className={`${Styles.inputContainer} ${this.props.className}`}>
				<label>{this.props.label} {this.props.required ? '*' : null}</label>
				<div className={Styles.inputField}>
					<input
						ref={this.props.inputRef}
						type={this.props.sensitiveField && this.state.showSensitiveInfo ? 'text' : this.props.type}
						onChange={(e) => {
							if (this.props.onChange) {
								this.props.onChange(e);
							}
						}}
						required={this.props.required} />
					{
						this.props.sensitiveField
						&& <VisibilityIcon
							toggleVisibility={() => { this.toggleVisibility(); }}
							show={this.state.showSensitiveInfo}
							styles={Styles.visibilityIcon} />
					}
				</div>
			</div>
		);
	}
}

export default InputField;
