import React from 'react';
import { TabNavigator, StackNavigator, NavigationActions } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Button } from 'react-native';

import Home from '../components/Home';
import Details from '../components/Details';
import Settings from '../components/Settings';
import AddContact from '../components/AddContact';

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Contacts',
      headerRight:
        <Button
          title='Add'
          onPress={() => navigation.navigate('AddContact')}
        />
    })
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`
    })
  },
  AddContact: {
    screen: AddContact,
    navigationOptions: {
      title: 'New Contact'
    }
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
