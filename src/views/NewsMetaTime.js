import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//Later
//import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

class NewsMetaTime extends Component {

    render() {

        return (

            <View style={styles.container}>
                <Ionicons name="ios-clock-outline" size={13} color="#696969" style={styles.metaIcon}/>
                {

                    <Text style={styles.meta}>{this.props.children}</Text>

                }

            </View>

        );

    }
}

const styles = StyleSheet.create({
    metaIcon: {
        marginRight: 4,
        flexDirection: 'column'
    },
    meta: {
        flexDirection: 'column',
        fontSize: 11,
        color: '#696969',
        fontFamily: 'WorkSans-Regular'
    },
    container: {
        flexDirection: 'row',
        marginRight: 8
    }
});

export default NewsMetaTime;
