import React, { Component } from "react";
import { StyleSheet, View, ActivityIndicator, Picker, ToolbarAndroid } from "react-native";
import { fetchData } from "../redux/actions/cryptoActions";
import Rate from './rate';
import { connect } from "react-redux";


class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cryptoType : "BTC"
    }
  }

  render() { 
      if (this.props.cryptoData.isFetching) {
        return (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        );
      } else {
        return (
          <View style={styles.containerToolbar}>
            <ToolbarAndroid
              style={styles.toolbar}
              title="Crypto Rate"/>
            <Picker
              selectedValue={this.state.cryptoType}
              onValueChange={(itemValue, itemIndex) => {
                                                         this.setState({cryptoType: itemValue});
                                                         this.props.fetchData(itemValue);
                                                         return;
                                                       }
                             }>
              <Picker.Item label="BTC" value="btc" />
              <Picker.Item label="BCH" value="bch" />
              <Picker.Item label="ETH" value="eth" />
              <Picker.Item label="LTC" value="ltc" />
            </Picker>
            <Rate data ={this.props.cryptoData.details} />
          </View>
        );
     }
  }

  componentDidMount() {
    this.props.fetchData("btc");
  }  
}

const mapStateToProps = state => {
  return {
    cryptoData: state
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  containerToolbar: {
    flex: 1,
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    // https://github.com/facebook/react-native/issues/2957#event-417214498
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56,
  }
})
export default connect(mapStateToProps, { fetchData })(Main);
