import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should correctly render LoginPage', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});
test('should call startLogin on button click', () => {
  const LoginPage = jest.fn();
  const wrapper = shallow(<Header startLogout={LoginPage} />);
  wrapper.find('button').simulate('click');
  expect(LoginPage).toHaveBeenCalled();
});
