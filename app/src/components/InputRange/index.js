// @flow
import React, { Component } from 'react';
import numeral from '../../helpers/numeral';

import './InputRange.styl';

type Props = {
	label: { before: string, after: string } | string,
	max: string,
	min: string,
	defaultValue?: number,
	formatNumber?: string,
	step?: string,
	name: string,
	onChange: (value: string | number, name: string) => void
}

type State = {
	value: string,
}

class InputRange extends Component {

	static defaultProps = {
		step: '1',
	};

	constructor(props: Props) {
		super(props);
		this.state = {
			value: this.getDefaultvalue(props),
		};
	}

	state: State;

	componentWillReceiveProps(nextProps: Props) {
		if (this.props.defaultValue !== nextProps.defaultValue) {
			this.setState({ value: this.getDefaultvalue(nextProps) });
		}
	}

	getDefaultvalue = (props: Props): string => (typeof props.defaultValue === 'undefined' ? '' : props.defaultValue.toString());

	props: Props;

	handleChange = (event: Object) => {
		const { name, value } = event.target;
		this.setState({ value });
		this.props.onChange(value, name);
	};

	formateValueToShow = (): string => {
		const { props, state } = this;
		if (props.formatNumber !== 'undefined') return numeral(state.value).format(props.formatNumber);
		return state.value;
	}

	renderLabel = () => {
		const { props } = this;
		const value = this.formateValueToShow();
		if (typeof props.label === 'object') {
			return (
				<label htmlFor={props.name} className="form-grour__label">
					{props.label.before} {value} {props.label.after}
				</label>
			);
		}
		return <label className="form-grour__label" htmlFor={props.name}>{props.label} {value}</label>;
	}

	render() {
		return (
			<div className="form-group">
				{this.renderLabel()}
				<input
					className="form-grour__input input-range"
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