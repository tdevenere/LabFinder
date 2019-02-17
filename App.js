import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { MenuProvider } from 'react-native-popup-menu'

import rootReducer from './app/reducers';
import PrimaryContainer from './app/containers/PrimaryContainer';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__ });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));

const App = () => (
  <Provider store={store}>
    <PrimaryContainer/>
  </Provider>
);     

export default App;