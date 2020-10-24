import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PersistGate } from 'zustand-persist';

export default function App() {
  return (
    <PersistGate
      onBeforeLift={() => { console.log('ON BEFORE EVENT') }}
      loading={<View style={styles.container}><Text>LOADING!</Text></View>}
    >
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
    </PersistGate>
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
