'use strict';

import React, { Component } from 'react';

export default class TextInput extends Component {
	handleChange = (value) => {
      this.props.onChange(value);
  }

	render() {
		const {
			name,
			label,
			placeholder,
			onChange
		} = this.props;

		let labelNode;
		if (label) {
			labelNode = (<label for={name}>{label}</label>);
		}

		return <div>
							{labelNode}
					 		<input
								type='text'
								placeholder={placeholder}
								name={name}
								onChange={(e) => this.handleChange(e.target.value)}>
							</input>
						</div>
	}
}
