
import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

class NoNetwork extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.textLabel}>Verificați conexiunea la internet și încercați din nou</Text>
                <TouchableOpacity style={styles.button} onPress={() => {this.props.loadMore();}}>
                    <Text style={styles.text}>Reîncarcă</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        alignSelf: 'stretch',
        padding: 10
    },
    button: {
        borderColor: '#442772',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    textLabel: {
        color: '#442772',
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular',
        marginBottom: 10,
        fontSize: 16
    },
    text: {
        color: '#442772',
        textAlign: 'center',
        fontFamily: 'WorkSans-Regular'
    }

});

export default NoNetwork;
