import React from 'react';
import { AsyncStorage, StyleSheet, ScrollView, ListView, View, Text, ActivityIndicator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds
    };
  }

  componentDidMount() {
    var _this = this;
    AsyncStorage.getItem('data', (err, contacts) => {
      if (contacts === null) {
        AsyncStorage.setItem('data', JSON.stringify([]));
      }
      _this.props.getData();
    });
  }

  render() {
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
            {this.props.data.map((contact) => (
              <ListItem
                key={contact.name}
                title={contact.name}
                subtitle={contact.description}
                onPress={() => this.onRowSelected(contact)}
              />
            ))}
          </List>
        </ScrollView>
      );
    }
  }

  renderRow(rowData, sectionId, rowId) {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>
          {rowData.name}
        </Text>
        <Text style={styles.description}>
          {rowData.description}
        </Text>
      </View>
    )
  }

  onRowSelected = contact => {
    this.props.navigation.navigate('Details', { ...contact });
  }

};

function mapStateToProps(state, props) {
  return {
    loading: state.dataReducer.loading,
    data: state.dataReducer.data
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
