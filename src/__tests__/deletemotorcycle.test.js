import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import DeleteMotorcycles from '../Components/Pages/DeleteMotorcycle';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('DeleteMotorcycles component', () => {
  it('renders without crashing', () => {
    const store = mockStore({
      motorcycles: [
        {
          id: 1,
          name: 'Motorcycle 1',
          imageUrl: 'http://example.com/motorcycle1.jpg',
          price: 2000,
          description: 'This is a description for Motorcycle 1',
        },
        {
          id: 2,
          name: 'Motorcycle 2',
          imageUrl: 'http://example.com/motorcycle2.jpg',
          price: 3000,
          description: 'This is a description for Motorcycle 2',
        },
      ],
    });
    render(
      <Provider store={store}>
        <DeleteMotorcycles />
      </Provider>,
    );
  });
});
