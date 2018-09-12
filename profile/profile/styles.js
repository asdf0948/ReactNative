import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const rate = width / 375;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageContainer: {
    width: 110 * rate,
    height: 110 * rate
  }
});
