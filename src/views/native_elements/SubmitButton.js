import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "native-base";
import {PRIMARY} from "../../utils/Colors";

export default class SubmitButton extends Component {

    render() {
        return <Button block style={styles.mainButton}
                       onPress={(e) => this.props.onPress(e)}>
                    {!this.props.showLoading && <Text style={{color: 'white'}}>{this.props.text}</Text>}
                    {this.props.showLoading && <ActivityIndicator style={styles.indicator}
                                                                  color={'white'} animating={true}
                                                                  size="small"/>}
                </Button>
    }
}

const styles = StyleSheet.create({
    mainButton: {
        backgroundColor: PRIMARY,
        marginTop: 15,
        width: '100%'
    },
    indicator: {
        padding: 8
    }
});

SubmitButton.propTypes = {
    text: PropTypes.string,
    showLoading: PropTypes.bool,
    onPress: PropTypes.func
};