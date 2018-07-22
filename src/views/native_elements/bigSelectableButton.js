import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from 'native-base';
import {StyleSheet, Text, View} from 'react-native';
import {TEXT_COLOR} from 'src/utils/colors';

export default class BigSelectableButton extends Component {

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
        marginTop: 16,
        width: '100%',
        height: 70,
        marginBottom: 16,

        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,

    },
    indicator: {
        padding: 8
    },
    text: {
        color: TEXT_COLOR,
        fontSize: 24
    }
});

BigSelectableButton.defaultProps = {};

BigSelectableButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool
};