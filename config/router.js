import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../components/Home';
import Details from '../components/Details';
import Settings from '../components/Settings';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Contacts'
    }
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  }
});

const SettingsStack = StackNavigator({
  Settings: {
    screen: Settings,
    navigationOptions: {
      title: 'Preferences'
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="people" size={35} color={tintColor} />
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: 'Preferences',
      tabBarIcon: ({ tintColor }) => <Icon name="settings" size={35} color={tintColor} />
    }
  }
});
