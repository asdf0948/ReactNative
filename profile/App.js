if(typeof global.self === 'undefined')
{
    global.self = global;
}

import React from 'react';

import { RootStack } from './naviagation/rootNavigation';

export default class App extends React.Component {
  render() {
    return (
      <RootStack />
    );
  }
}
