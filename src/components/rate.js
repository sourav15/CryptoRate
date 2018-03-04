import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";


export default class Rate extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.titleText}>
          Market Price: {this.props.data.market}
        </Text>
        <Text style={styles.titleText}>
          Selling Price: {this.props.data.sell}
        </Text>
        <Text style={styles.titleText}>
          Buying Price: {this.props.data.buy}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   titleText: {
     fontSize: 20,
     fontWeight: 'bold',
     margin: 16
   },
});

