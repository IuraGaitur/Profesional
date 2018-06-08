import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {PRIMARY} from "../utils/Colors";

class StatusBarBackground extends Component {
    render() {
        return (
            <View style={[styles.statusBarBackground,
                        {backgroundColor: this.props.transparent ? 'transparent': PRIMARY,},
                        this.props.style || {}]} />
        );
    }
}

const styles = StyleSheet.create({
    statusBarBackground: {
        height: (Platform.OS === 'ios') ? 20 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)

    }

})

StatusBarBackground.propTypes = {
    transparent: PropTypes.bool,
};

export default StatusBarBackground;