import React, { Component } from 'react';
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
import Navigation from './app/navigation';
import SplashScreen from './app/screens/SplashScreen';

const loggerMiddleware = createLogger({predicate: (getState, action) => __DEV__ });


const persistConfig = {
  key: 'root',
  storage: storage, 
  stateReconciler: autoMergeLevel2,
  blacklist: ['userLocation']
};

const pReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(pReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));
const persistor = persistStore(store);


const App = () => (
  <MenuProvider>
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <Navigation persistenceKey={"NavigationState"}/>
      </PersistGate>
    </Provider>
  </MenuProvider>
)

export default App;
