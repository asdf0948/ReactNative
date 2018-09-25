import React from 'react';

import Profile from '../index';

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
      "name": "곽민우",
      "occupation": "증권",
      "order": 2,
      "phoneNumber": "01014320008",
      "profileUrl": null,
      "rank": "CEO",
      "studentOrder": 5,
      "updatedAt": null,
      "gradeNumber": 12,
      "name": "곽민우"
    }

    return <Profile myProfile={true} profile={profile} />;
  }
}
