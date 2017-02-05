// @flow
import React, { Component } from 'react';

type Props = {
	label: { before: string, after: string } | string,
	max: string,
	min: string,
	defaultValue?: string,
	step?: string,
	name: string,
	onChange: (value: string | number, name: string) => void
}

class InputRange extends Component {

	static defaultProps = {
		step: '1',
	};

	props: Props;

	handleChange: (event: Object) => void;

	handleChange = (event: Object) => {
		const { name, value } = event.target;
		this.props.onChange(value, name);
	}

	renderLabel: () => Object;

	renderLabel = () => {
		if (typeof this.props.label === 'object') {
			return (
				<label htmlFor={this.props.name}>{
					this.props.label.before} {this.props.label.after}
				</label>
			);
		}
		return <label htmlFor={this.props.name}>{this.props.label}</label>;
	}

	render() {
		return (
			<div>
				{this.renderLabel()}
				<input
					type="range"
					max={this.props.max}
					min={this.props.min}
					defaultValue={this.props.defaultValue}
					step={this.props.step}
					name={this.props.name}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}

export default InputRange;
