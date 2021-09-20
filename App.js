import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeContainer from './assets/src/container/HomeContainer'
import { Provider } from 'react-redux';
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Provider />
      <HomeContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 