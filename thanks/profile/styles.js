import {
    StyleSheet,
    Dimensions
} from 'react-native';
const { width } = Dimensions.get('window');
const rate = width / 375;

export const informationBoxStyle = StyleSheet.create(
    {
        container: {
            width: '100%',
            height: 62 * rate,
            justifyContent: 'center',
            borderBottomWidth: 0.4,
            backgroundColor: 'white',
        },
        titleBar: {
            flexDirection: 'row',
            marginLeft: 29 * rate
        },
        titleSt: {
            fontSize: 16 * rate,
        },
        subtitleSt: {
            fontSize: 12 * rate,
            marginTop: 4 * rate,
            marginLeft: 2 * rate
        },
        discriptionSt: {
            fontSize: 14 * rate,
            color: '#707070',
            marginLeft: 29 * rate,
            marginTop: 4 * rate
        },
        none: {
            width: '100%',
            height: 13 * rate,
            backgroundColor: '#f2f2f2',
            borderBottomWidth: 0.4,

        }


    }

)

export const topContainer = StyleSheet.create(
    {
        topContainer: {
            alignItems: 'center',
            height: 214 * rate,
            width: 375 * rate,
            backgroundColor: '#f5f5f5'
        },
        topImage: {
            width: 110 * rate,
            height: 110 * rate,
            borderRadius: 50,
            marginTop: 30 * rate
        },
    },



)