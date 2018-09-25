import React from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { RootStack } from './navigation/rootnavigation'

export default class App extends React.Component {
  render() {
    return(
    
        <RootStack />
    )
  }
}
