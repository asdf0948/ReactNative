import { createStackNavigator } from 'react-navigation';

import Init from '../Init';
import MyProfile from '../profile/myProfile/index';
import XProfile from '../profile/xProfile/index';

export const RootStack = createStackNavigator(
  {
    Init,
    MyProfile,
    XProfile
  },
  {
    initialRouteName: 'Init',
    navigationOptions: {
      header: null
    }
  }
);