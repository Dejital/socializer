import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Details extends Component {
  render() {
    const { name, description, touched, oneOnOned } = this.props.navigation.state.params;
    return (
      <ScrollView>

        <List>
          <ListItem
            title='Name'
            rightTitle={name ? name : ' '}
            textInput={true}
            hideChevron
          />
          <ListItem
            title='Summary'
            textInput={true}
            rightTitle={description ? description : ' '}
            hideChevron
          />
        </List>

        <Text style={styles.listHeader}>
          CONTACT HISTORY
        </Text>
        <List>
          <ListItem
            title='Last Contact'
            rightTitle={touched ? touched : 'Never'}
            hideChevron
          />
          <ListItem
            title='Last One on One'
            rightTitle={oneOnOned ? oneOnOned : 'Never'}
            hideChevron
          />
        </List>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {
    color: 'gray',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: -10
  }
});
