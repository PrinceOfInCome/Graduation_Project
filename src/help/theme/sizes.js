import {Dimensions} from 'react-native';

const {widthDevice, heightDevice} = Dimensions.get('window');

const sizes = {
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,

  // font sizes
  h1: 26,
  h2: 20,
  h3: 18,
  title: 18,
  header: 16,
  body: 14,
  caption: 12,

  // device
  widthDevice,
  heightDevice,
};

export default sizes;
