import React, {Component} from 'react';
import {View, StatusBar, Platform} from 'react-native';

type Props = {
  style?: StyleProp<ViewStyle>,
  children?: React.ReactElement,
};

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 19 : 0;

class Container extends Component<Props> {
  render() {
    const {style, children, statusBar, bgStatusBar} = this.props;
    return (
      <View style={[styles.container, style]}>
        {statusBar && (
          <StatusBar
            backgroundColor={bgStatusBar || 'red'}
            barStyle="dark-content"
            translucent
          />
        )}
        {children}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: STATUSBAR_HEIGHT,
  },
};

export default Container;
