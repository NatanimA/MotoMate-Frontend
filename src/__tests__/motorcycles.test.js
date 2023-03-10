import React from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import Motorcycles from '../Components/Pages/Motorcycles';
import store from '../redux/configureStore';

describe('Motorcycles component', () => {
  it('renders a "No motorcycles available" message when there are no motorcycles', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Motorcycles />
      </Provider>,
    );
    expect(getByText('No motorcycles available')).toBeInTheDocument();
  });
});
