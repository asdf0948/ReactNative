import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';

import { CALL, MESSAGE } from '../assets/index';

import { styles, informationBoxStyles } from './styles';

export default class Profile extends React.Component {
  render() {
    const { myProfile, profile } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350' }}
            style={styles.topImage}>
          </Image>
          <Text style={styles.topName} >
            {profile.name}
          </Text>
          <Text style={styles.index} >
            {profile.gradeNumber + '학번' + ' |  ' + profile.major + ' | ' + profile.order + '기'}
          </Text>
        </View>


        <InformationBox
          title={'Occupation'}
          subTitle={profile.occupation}
          description={profile.company + ' ' + profile.department + ' ' + profile.rank}
          myProfile={myProfile}
        />

        <InformationBox
          title={'Mobile'}
          description={profile.phoneNumber}
          myProfile={myProfile}
        />

        <InformationBox
          title={'Email'}
          description={profile.email}
          myProfile={myProfile}
        />
        <InformationBox
          title={'Address'}
          description={profile.address}
          myProfile={myProfile}
        />
        <View style={styles.none}>
        </View>
        <InformationBox
          title={'Additional Information'}
          description={profile.additionalInformation}
          myProfile={myProfile}
        />
      </View>

    );
  }
}

class InformationBox extends React.Component {
  render() {
    const { title, subTitle, description, myProfile } = this.props;
    if (myProfile) {
      return (
        <TouchableOpacity style={informationBoxStyles.container}>
          <View style={informationBoxStyles.titleContainer}>
            <Text style={informationBoxStyles.title}>{title}</Text>
            {
              subTitle === undefined ?
                null :
                <Text style={informationBoxStyles.subTitle}> {subTitle}</Text>
            }
          </View>
          <Text style={informationBoxStyles.description}>{description}</Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={informationBoxStyles.container}>
          <View style={informationBoxStyles.titleContainer}>
            <Text style={informationBoxStyles.title}>{title}</Text>
            {
              subTitle === undefined ?
                null :
                <Text style={informationBoxStyles.subTitle}>{subTitle}</Text>
            }
          </View>
          <Text style={informationBoxStyles.description}>{description}</Text>
          {
            title !== 'Mobile' ? null :
              <TouchableOpacity style={{ position: 'absolute', right: 15, backgroundColor: 'black', borderRadius: 50, width: 47, height: 47, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={CALL} />
              </TouchableOpacity>
          }
        </View>
      );
    }
  }
}