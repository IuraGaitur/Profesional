import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import {TEXT_COLOR} from 'src/utils/colors';

export default class BigButton extends Component {

    render() {
        return (
            <Button block style={[styles.mainButton, {backgroundColor: this.props.color}]}
                    disabled={this.props.disabled}
                    onPress={(e) => this.props.onPress(e)}>
                <Text style={styles.text}>{this.props.text}</Text>
            </Button>);
    }
}

const styles = StyleSheet.create({
    mainButton: {
        marginTop: 15,
        width: '100%',
        height: 80,
    },
    indicator: {
        padding: 8
    },
    text: {
        color: TEXT_COLOR,
        fontSize: 22
    }
});

BigButton.defaultProps = {};

BigButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};