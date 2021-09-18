import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

import {ASLConverterScreen} from './app/screens/ASLConverterScreen.js';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello !!!!</Text>
      <ASLConverterScreen></ASLConverterScreen>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
