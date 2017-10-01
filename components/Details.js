import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as Actions from '../actions';

class Details extends Component {
  componentDidMount(){
    let name = this.props.navigation.state.params.name;
    this.props.getContact(name);
  }

  render() {
    const { name, description, touched, oneOnOned } = this.props.data;
    if (this.props.loading) {
      return (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator
            animating={true}
            style={[{height: 80}]}
            size="small"
            />
        </View>
      );
    } else {
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
}

function mapStateToProps(state, props) {
  return {
    loading: state.contactReducer.loading,
    data: state.contactReducer.data
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);

const styles = StyleSheet.create({
  listHeader: {
    color: 'gray',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: -10
  },
  activityIndicatorContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
