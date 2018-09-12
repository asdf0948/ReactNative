import React from 'react';
import { Text, View } from 'react-native';

import {styles} from './styles';

export default class Profile extends React.Component {
  render() {
    const { myProfile, profile } = this.props;
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        {
          myProfile ?
            <Text>연필이랑 비밀번호가 나와야함. Touch 가능.</Text>:
            <Text>전화랑 문자가 보여야함. Touch 불가.</Text>
        }
      </View>
    );
  }
}
