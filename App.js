import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

// React-Navigation
import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import CustomeDrawer from './src/screens/CustomeDrawer';

// Screen
import Home from './src/screens/Home';
import AddNote from './src/screens/AddNote';
import EditNote from './src/screens/EditNote';


const StackNavigator = createStackNavigator({
    Home : Home,
    AddNote: AddNote,
    EditNote: EditNote
})

const AppNavigator = createDrawerNavigator({
    Home: StackNavigator
}, {
    contentComponent: CustomeDrawer

})

const AppContainer = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return(
      <AppContainer />
    )
  }
}