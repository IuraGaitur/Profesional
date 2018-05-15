import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class ToolbarTitle extends Component {

    render() {

        return (

            <Text style={[styles.text, this.props.style]}>{this.props.children}</Text>

        );
    }
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 20,
        marginTop: 8,
        color: '#fff',
        fontFamily: 'WorkSans-Regular'
    }
});

export default ToolbarTitle;
