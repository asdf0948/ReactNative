import { createStackNavigator } from 'react-navigation';

import Init from '../Init';
import MyProfile from '../profile/myprofile/index';
import XProfile from '../profile/xprofile/index';

export const RootStack = createStackNavigator(
  {
    Init,
    XProfile,
    MyProfile
  },
  {
    initialRouteName: 'Init',
    navigationOptions: {
    //   header: null
    }
  }
);