import React from 'react';
import { shallow } from 'enzyme';
import TextInput from '../textInput.js';

it('renders without crashing', () => {
		shallow(<TextInput />);
});

it('renders input text node', () => {
  const wrapper = shallow(<TextInput />);
	const node = wrapper.node.props.children;

	expect(wrapper.find('input').node.props.type).toEqual('text');
});

it('fires onChange event', () => {
	var updatedText;
	const wrapper = shallow(<TextInput onChange={(value) => updatedText=value} />);

	wrapper.find('input').simulate('change', {target: {value: 'foo'}});
	expect(updatedText).toEqual('foo');
});

it('displays label if present', () => {
	const wrapper = shallow(<TextInput label='foo' />);
	expect(wrapper.find('label').node.props.children).toEqual('foo');
});

it('does not display label if not present', () => {
	const wrapper = shallow(<TextInput />);
	expect(wrapper.find('label').node).toBeUndefined();
});

it('does not display hint if not present', () => {
	const wrapper = shallow(<TextInput />);
	expect(wrapper.find('label').node).toBeUndefined();
});
