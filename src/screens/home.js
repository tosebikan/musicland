/* @flow weak */

import React from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {icons, images, COLORS, FONTS, SIZES} from '../constants';

const Home = ({}) => {
  function renderHeader() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerGroup}>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => alert('menu')}>
            <Image
              source={icons.menu}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cartContainer}
            onPress={() => alert('cart')}>
            <Image
              source={icons.cart}
              resizeMode="contain"
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTitle(title) {
    return (
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Sound of</Text>
        <Text style={styles.title}> {title}</Text>
        <Text> sup</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTitle('Guiters')}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      heigth: 3,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  headerContainer: {
    paddingHorizontal: SIZES.padding,
  },
  headerIcon: {
    width: 25,
    height: 25,
  },
  headerGroup: {
    flexDirection: 'row',
  },

  menuContainer: {flex: 1},
  cartContainer: {flex: 1, alignItems: 'flex-end'},

  titleContainer: {
    marginTop: SIZES.padding,
    marginHorizontal: SIZES.padding,
  },
  title: {
    fontWeight: 'bold',
    color: COLORS.black,
    ...FONTS.largeTitle,
  },
});
