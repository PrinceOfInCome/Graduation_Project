import React, {Component} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import * as Animatable from 'react-native-animatable';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve('result');
      }, 3000),
    );
  };

  componentDidMount = async () => {
    const {navigation} = this.props;
    const data = await this.performTimeConsumingTask();
    if (data !== null) {
      navigation.navigate('BottomTap');
    }
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Animatable.Image
          animation="pulse"
          easing="ease-in-out"
          iterationCount="infinite"
          source={{
            uri:
              'https://cdn1.iconfinder.com/data/icons/love-and-romance-circle-flat-vol-3/512/Dining_fork_heart_sign_love_Wedding_plate_Knife-512.png',
          }}
          style={styles.img}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ffa726',
  },
  img: {position: 'absolute', alignSelf: 'center', width: 160, height: 160},
});

export default SplashScreen;
