import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Page1 extends React.Component {
 static navigationOptions = {
        title: 'home'
    }
        onPress = () => {
            this.props.navigation.push('Page2route');
        }

        render() {
            return (
                <View style={styles.container}>
                    <Button
                        title="flacList"
                        onPress={this.onPress}
                    >
                    </Button>
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
