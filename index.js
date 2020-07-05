/**
 * @format
 */
import axios from 'axios'
import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';
import storeConfig from './src/store/storeConfig'

axios.defaults.baseURL = 'http://'
const store = storeConfig()

const Redux = () => {
    return <Provider store={store}>
        <App />
    </Provider>
}

AppRegistry.registerComponent(appName, () => Redux);
