import React from 'react';
import { View, Text, StyleSheet, SafeAreaView,Platform } from 'react-native';
import Constants from 'expo-constants';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.view}>
        <Text>Welcome to the HomeScreen page</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    paddingTop: Platform.OS ==='ios'? 0 :  Constants.statusBarHeight
  },
});

export default HomeScreen;
