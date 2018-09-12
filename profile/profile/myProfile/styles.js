import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const rate = width / 375;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
