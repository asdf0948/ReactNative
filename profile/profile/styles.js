import { Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');
const rate = width / 375;

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  topContainer: {
    alignItems: 'center',
    height: 214 * rate,
    width: 375 * rate,
    backgroundColor: '#f5f5f5',
    marginTop: 30 * rate
  },
  topImage: {
    width: 110 * rate,
    height: 110 * rate,
    borderRadius: 50,
    marginTop: 30 * rate
  },
  none: {
    width: '100%',
    height: 13 * rate,
    backgroundColor: '#f2f2f2'
  },
  topName: {
    fontSize: 24,
    marginTop: 15
  },
  index: {
    fontSize: 14,
    marginTop: 8,
    color: '#707070'
  },
  mobileCall: {
    height: 47 * rate,
    width: 47 * rate,
    borderRadius: 50 * rate,
    backgroundColor: 'black',
    right: 15,
    position: 'absolute'
  }
});

export const informationBoxStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 62 * rate,
    justifyContent: 'center',
    borderBottomWidth: 0.4,
    backgroundColor: 'white'
  },
  titleContainer: {
    flexDirection: 'row',
    marginLeft: 29 * rate
  },
  title: {
    fontSize: 16 * rate
  },
  subTitle: {
    fontSize: 12 * rate,
    marginTop: 4 * rate,
    marginLeft: 2 * rate
  },
  description: {
    marginTop: 4 * rate,
    fontSize: 14 * rate,
    marginLeft: 29 * rate,
    color: '#707070'
  }
});