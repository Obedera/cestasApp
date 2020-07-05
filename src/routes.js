import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './pages/home'
import Login from './pages/login'
import Doar from './pages/doar'
import Cadastrar from './pages/cadastrar'
import StatusPedido from './pages/statusPedido'

const Routes = createSwitchNavigator({
    Login: {
        screen: Login,
    },
    Status: {
        screen: StatusPedido
    },
    Home: {
        screen: Home,
    },
    Cadastrar: {
        screen: Cadastrar
    },
    Doar: {
        screen: Doar,
    }
}, {
    initialRouteName: "Home"
});




export default createAppContainer(Routes);