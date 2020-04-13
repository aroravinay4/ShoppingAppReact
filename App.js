import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ProductsReducers from './store/reducers/productsReducer';
import { View, Text } from 'react-native';
import ShoppingNavigator from './navigation/ShoppingNavigator';
import { enableScreens } from 'react-native-screens';
import CartReducers from './store/reducers/CartReducers';
import OrderReducers from './store/reducers/ordersReducers';

enableScreens();

const rootReducer = combineReducers({
  products: ProductsReducers,
  cart: CartReducers,
  order: OrderReducers

});

const store = createStore(rootReducer);

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <ShoppingNavigator />
    </Provider>

  );
};



export default App;
