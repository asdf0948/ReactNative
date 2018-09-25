import React from 'react';
import {
    Button,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class Init extends React.Component {

    render() {

        return (
            <View style={styles.container} >
                <Button
                    title='Myprofile'
                    onPress={() => this.props.navigation.navigate('MyProfile')}
                />
                <Button
                    title='xProfile'
                    onPress={() => this.props.navigation.navigate('XProfile')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
