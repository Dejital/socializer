import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';

export default class AddContact extends Component {
  render() {
    return (
      <ScrollView>
        <FormLabel>
          Name
        </FormLabel>
        <FormInput
          placeholder="Enter the contact's name"
        />

        <FormLabel>
          Description
        </FormLabel>
        <FormInput
          placeholder='Enter a short description'
        />

      </ScrollView>
    );
  }
}
