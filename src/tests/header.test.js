import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/pages/Header';
import store from '../redux/configStore';

it('renders correctly', () => {
  const tree = renderer
    .create(<Router><Provider store={store}><Header /></Provider></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
