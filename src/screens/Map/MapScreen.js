import React from 'react';
import {} from 'react-native';
import {StyleSheet, View, Text} from 'react-native';

const MapScreen = () => {
  return (
    <View style={styles.conatiner}>
      <Text>MapScreen</Text>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
