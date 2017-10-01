import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Settings extends Component {
  render() {
    return (
      <ScrollView>

        <List>
          <ListItem
            title='Relations'
          />
        </List>

      </ScrollView>
    );
  }
}
