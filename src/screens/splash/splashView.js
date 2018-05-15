import React, { Component } from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions} from "react-native";
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
            <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Loading...</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
    },

    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: PRIMARY,
    }
});

SplashView.defaultProps = {
};


SplashView.propTypes = {
    imageUri: PropTypes.string,
};
