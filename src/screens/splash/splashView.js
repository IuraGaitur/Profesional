import React, { Component } from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions, ActivityIndicator} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class SplashView extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 20}}>Loading...</Text>
                <ActivityIndicator style={styles.indicator} color={PRIMARY} animating={true} size="small"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    separator: {
        flex: 1,
    },
    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: PRIMARY,
    },
    indicator: {
        margin: 20
    }
});

SplashView.defaultProps = {
};


SplashView.propTypes = {
    imageUri: PropTypes.string,
};
