import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Importação de paginas

import Login from './screens/Login';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
// import ItemDetailPage from './screens/ItemDetailPage';
// import NewPlantPage from './screens/NewPlantPage';

// Cria o sistema de navegação entre as paginas
const AppNavigator = createStackNavigator(
    {
        Login,
        Welcome,
        Home,
},{
    defaultNavigationOptions:{
        title: 'GRIn Store',
        headerTintColor:'white',

        headerStyle:{
            backgroundColor: 'black',
            borderBottomWidth: 3,
            borderBottomColor:'red',
        },
        headerTitleStyle:{
            color:'white',
            fontSize: 25,
        }
    }
});

const  AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
    render()
    {
        return <AppContainer/>;
    }
}