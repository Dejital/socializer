import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { View, ScrollView, Text, StyleSheet, ActivityIndicator, Button } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import * as Actions from '../actions';

class Details extends Component {
  componentDidMount(){
    let id = this.props.navigation.state.params.id;
    this.props.getContact(id);
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
              rightTitle={touched ? new Date(touched).toLocaleDateString() : 'Never'}
              rightTitleStyle={styles.dateStyle}
              hideChevron
            />
            <ListItem
              title='Last One on One'
              rightTitle={oneOnOned ? new Date(oneOnOned).toLocaleDateString() : 'Never'}
              rightTitleStyle={styles.dateStyle}
              hideChevron
            />
          </List>

          <Button
            title='Contacted Today'
            onPress={this.markContactedToday.bind(this)}
          />

          <Button
            title='Contacted Yesterday'
            onPress={this.markContactedYesterday.bind(this)}
          />

          <Button
            title='One on Oned Today'
            onPress={this.markOneOnOnedToday.bind(this)}
          />

          <Button
            title='One on Oned Yesterday'
            onPress={this.markOneOnOnedYesterday.bind(this)}
          />

        </ScrollView>
      );
    }
  }

  markContactedToday() {
    let date = new Date();
    this.props.data.touched = date;
    this.props.updateContact(this.props.data);
    this.forceUpdate();
  }

  markOneOnOnedToday() {
    let date = new Date();
    this.props.data.oneOnOned = date;
    this.props.updateContact(this.props.data);
    this.forceUpdate();
  }

  markContactedYesterday() {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    this.props.data.touched = date;
    this.props.updateContact(this.props.data);
    this.forceUpdate();
  }

  markOneOnOnedYesterday() {
    let date = new Date();
    date.setDate(date.getDate() - 1);
    this.props.data.oneOnOned = date;
    this.props.updateContact(this.props.data);
    this.forceUpdate();
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
  },
  dateStyle: {
    marginRight: 5,
    color: 'black'
  }
});
