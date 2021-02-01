/* @flow weak */

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ItemDetails = ({}) => (
  <View style={styles.container}>
    <Text>I'm ItemDetails</Text>
  </View>
);

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
