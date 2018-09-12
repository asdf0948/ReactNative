import React from 'react';
import { Text, View } from 'react-native';

import Profile from '../index';

import { styles } from './styles';

export default class MyProfile extends React.Component {
  render() {
    const profile = {
      "additionalInformation": "추가 정보",
      "address": "관악구 관악로 19 다길 39, 609호",
      "company": "회사_6",
      "createdAt": "2018-09-02T08:40:17.421165",
      "department": "부서_4",
      "email": "hello@gmail.com",
      "id": 48,
      "major": "자유전공학부",
      "name": "2기_이름_12",
      "occupation": "업종_5",
      "order": 2,
      "phoneNumber": "01014320008",
      "profileUrl": null,
      "rank": "CEO",
      "studentOrder": 5,
      "updatedAt": null
    }

    return (
      <View style={styles.container}>
        {/* <Text>MyProfile</Text> */}
        <Profile myProfile={true} profile={profile} />
      </View>
    );
  }
}
