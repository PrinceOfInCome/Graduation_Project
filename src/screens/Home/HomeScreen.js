import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {TouchBTH} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.conatiner}>
      <ImageBackground
        source={{
          uri:
            'https://driver.gianhangvn.com/image/ho-guom-he-ve-299590j19421.jpg',
        }}
        style={styles.header}>
        <View>
          <Text style={[styles.txt, {fontSize: 18}]}>Well come to</Text>
          <Text style={[styles.txt, {fontWeight: 'bold', fontSize: 20}]}>
            Ha Noi
          </Text>
          <Text style={[styles.txt, {fontSize: 18}]}>36 0C</Text>
        </View>
      </ImageBackground>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.quiz}>What are you up to?</Text>
        <View style={styles.service}>
          <TouchBTH
            icon="https://www.pinclipart.com/picdir/middle/174-1748380_inbound-tours-tailor-made-tours-icon-clipart.png"
            name="foo"
          />
          <TouchBTH
            icon="https://www.pinclipart.com/picdir/middle/174-1748380_inbound-tours-tailor-made-tours-icon-clipart.png"
            name="hotel"
          />
          <TouchBTH
            icon="https://www.pinclipart.com/picdir/middle/174-1748380_inbound-tours-tailor-made-tours-icon-clipart.png"
            name="tour"
          />
        </View>
        <View style={styles.wapperTour}>
          <View style={styles.titleAdd}>
            <Text style={{color: '#ff6f00'}}>Popular address</Text>
            <TouchableOpacity>
              <Text style={{color: '#ff6f00'}}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  header: {
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    textAlign: 'center',
    color: '#fff',
  },
  quiz: {
    color: '#000',
    textAlign: 'center',
    paddingTop: 10,
    fontSize: 20,
    fontWeight: 'normal',
  },
  service: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'space-between',
    marginHorizontal: 36,
    marginTop: 14,
  },
  wapperTour: {
    marginTop: 16,
  },
  wapperHotel: {},
  wapperFood: {},
  titleAdd: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 12,
  },
});
