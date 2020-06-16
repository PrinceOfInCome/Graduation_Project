import React from 'react';
import {} from 'react-native';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.conatiner}>
      <View style={styles.header}>
        <View style={styles.weather}>
          <Text style={styles.textWeather}>Hà Nội: 33oC</Text>
        </View>
        <View style={styles.slide} />
      </View>
      <ScrollView style={{flex: 1}}>
        <View style={styles.wapper}>
          <View style={styles.wapperbtn}>
            <TouchableOpacity>
              <View style={styles.btnItem}>
                <Text>Food</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.btnItem}>
                <Text>Hotel</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View />
          <View style={[styles.wapperbtn, {marginVertical: 10}]}>
            <TouchableOpacity>
              <View style={styles.btnItem}>
                <Text>address travel</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View />
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
    flexDirection: 'column',
  },
  slide: {
    width: '90%',
    height: 150,
    backgroundColor: 'blue',
    marginTop: '5%',
    marginHorizontal: 24,
  },
  weather: {
    width: '90%',
    height: '50%',
    marginHorizontal: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textWeather: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  wapper: {
    flex: 1,
    marginTop: 90,
    flexDirection: 'column',
    marginHorizontal: 24,
  },
  wapperbtn: {flexDirection: 'row', justifyContent: 'space-between'},
  btnItem: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
