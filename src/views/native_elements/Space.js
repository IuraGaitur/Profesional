import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class Space extends Component{

    render() {
        return <View style={{width: this.props.width, height: this.props.height}}></View>
    }
}

Space.propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
};