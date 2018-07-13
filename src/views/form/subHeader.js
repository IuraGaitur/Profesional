import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export default class SubHeader extends Component {

    render() {
        return <View style={[styles.container, {backgroundColor: this.props.color}]}>
            <Text style={styles.text}>{this.props.title}</Text>
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 8,
        paddingVertical: 16,
        alignItems: 'flex-start'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 14
    }
});

SubHeader.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
};