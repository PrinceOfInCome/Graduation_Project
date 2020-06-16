import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';

const TouchBTN = ({icon, name}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} source={{uri: icon}} />
      <Text style={styles.txtName}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 70,
    flexDirection: 'column',
  },
  img: {
    width: '100%',
    height: '60%',
  },
  txtName: {
    fontSize: 12,
    color: '#000',
    paddingTop: 10,
    textAlign: 'center',
  },
});

export default TouchBTN;
