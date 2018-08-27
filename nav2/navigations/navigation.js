
import { createStackNavigator } from 'react-navigation';

import Page1 from '../Page1';
import Page2 from '../Page2';

export const RootStack = createStackNavigator(
    {
        Page1route: Page1,
        Page2route: Page2
    },
    {
        initialRouteName: 'Page1route'
    },
)
