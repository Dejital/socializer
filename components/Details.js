import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Details extends Component {
  render() {
    const { name, description, touched, oneOnOned } = this.props.navigation.state.params;
    return <ScrollView>

      <List>
        <ListItem
          title="Name"
          rightTitle={name ? name : ' '}
          hideChevron
        />
        <ListItem
          title="Description"
          rightTitle={description ? description : ' '}
          hideChevron
        />
      </List>

      <List>
        <ListItem
          title="Last Touch"
          rightTitle={touched ? touched : 'Never'}
          hideChevron
        />
        <ListItem
          title="Last One On One"
          rightTitle={oneOnOned ? oneOnOned : 'Never'}
          hideChevron
        />
      </List>

    </ScrollView>;
  }
}
