import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { addContact } from '../actions';
import { connect } from 'react-redux';

class AddContact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      locked: false
    };
  }

  render() {
    return (
      <ScrollView>
        <FormLabel>
          Name
        </FormLabel>
        <FormInput
          placeholder="Enter the contact's name"
          autoCorrect={false}
          autoCapitalize='words'
          onChangeText={(text) => this.setState({ name: text })}
          value={this.state.name}
        />

        <FormLabel>
          Summary
        </FormLabel>
        <FormInput
          placeholder='Enter a short summary'
          onChangeText={(text) => this.setState({ description: text })}
          value={this.state.description}
        />

        <Button
          title='Create'
          icon={{ name: 'person' }}
          backgroundColor='#2962ff'
          style={styles.createButton}
          onPress={this.addContact.bind(this)}
          disabled={this.state.locked}
        />

      </ScrollView>
    );
  }

  addContact() {
    this.state.locked = true;
    let newContact = {
      id: this.generateId(),
      name: this.state.name,
      description: this.state.description,
      touched: '',
      oneOnOned: ''
    };
    this.props.addContact(newContact);
    this.state.name = '';
    this.state.description = '';
    this.state.locked = false;
    this.props.navigation.goBack();
  }

  generateId() {
    let d = new Date().getTime();
    let id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(5);
    });
    return id;
  }
}

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps, {addContact})(AddContact);

const styles = StyleSheet.create({
  createButton: {
    paddingTop: 20
  }
});
