import React from 'react';
import { StyleSheet, ListView, View, Text, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class Settings extends React.Component {
  constructor(props) {
    super(props);

    var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      ds: ds
    };
  }

  componentDidMount() {
    this.props.getData();
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
        <View style={styles.container}>
          <ListView enableEmptySections={true}
            dataSource={this.state.ds.cloneWithRows(this.props.data)}
            renderRow={this.renderRow.bind(this)}
            />
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 25,
  },
  activityIndicatorContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  row: {
      borderBottomWidth: 1,
      borderColor: '#ccc',
      padding: 10
  },
  name: {
      fontSize: 15,
      fontWeight: '600'
  },
  description: {
      marginTop: 5,
      fontSize: 14
  }
});
