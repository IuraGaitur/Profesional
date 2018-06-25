import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "native-base";
import {PRIMARY, TEXT_COLOR} from "../../utils/Colors";

export default class BigButton extends Component {

    render() {
        return (
            <Button block style={[styles.mainButton, {backgroundColor: this.props.color}]}
                    onPress={(e) => this.props.onPress(e)}>
                <Text style={{color: TEXT_COLOR, fontSize: 22}}>{this.props.text}</Text>
            </Button>);
    }
}

const styles = StyleSheet.create({
    mainButton: {
        marginTop: 15,
        width: '100%',
        height: 100,
    },
    indicator: {
        padding: 8
    }
});

BigButton.defaultProps = {};

BigButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func
};