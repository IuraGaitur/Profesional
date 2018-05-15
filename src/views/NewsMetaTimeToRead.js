import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
//Later
//import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

class NewsMetaTimeToRead extends Component {

    render() {

        let timeToRead = this.props.children;

        if (timeToRead != null && timeToRead != '') {

            return (

                <View style={styles.container}>
                    <Ionicons name="ios-list-box-outline" size={13} color="#696969" style={styles.metaIcon}/>
                    {

                        <Text style={styles.meta}>{this.props.children}</Text>

                    }

                </View>

            );

        } else {
           return (null);
        }


    }
}

const styles = StyleSheet.create({
    metaIcon: {
        marginRight: 3,
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
        marginRight: 5
    }
});

export default NewsMetaTimeToRead;
