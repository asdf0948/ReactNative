import { StyleSheet } from 'react-native';


export const informationBoxNav = StyleSheet.create({
    navTop: {
        height: 22,
        backgroundColor: '#fF5733'
    },
    left: {
        borderColor: '#f1f1f1',
        backgroundColor: '#FF5733',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1
    },
    center: {
        backgroundColor: '#FF5733',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.9,
        height: 45,
    },
    navText:
    {
        fontSize: 17,
        color: 'white',
        fontWeight: 'bold'
    },
    right: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF5733'
    },
    navimg:
    {
        height: 20,
        width: 20
    }

});

export const informationBoxHeaderStyles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },
    bigImage: {
        margin: 15,
        width: 30,
        height: 30
    },
    smallImage: {
        width: 20,
        height: 20
    }

});

export const informationBoxBody = StyleSheet.create({
    body: {
        borderColor: '#f1f1f1',
        padding: 22,
        borderBottomWidth: 0.5,
        backgroundColor: '#f1f1f1'
    },
    textBar:
    {
        width: 280,
        justifyContent: 'center'
    }

});
