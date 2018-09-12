import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

import { NavigationActions } from 'react-navigation';

export default class Init extends React.Component {
  render() {
    const one = NavigationActions.navigate({ routeName: 'MyProfile' });
    const two = NavigationActions.navigate({ routeName: 'XProfile' });

    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Button 
          title={'MyProfile'} 
          onPress={() => navigation.dispatch(one)} 
        />
        <Button 
          title={'XProfile'} 
          onPress={() => navigation.dispatch(two)} 
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
