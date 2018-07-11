import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Button, Text} from 'native-base';
import {GRAY_LIGHT, SELECTED} from 'src/utils/colors';
const BUTTON_WIDTH = (Dimensions.get('window').width / 2) - (Dimensions.get('window').width / 20);


export default class BigCheckboxItem extends Component {

    render() {
        let style = this.props.style ? this.props.style : {};
        const {isSelected, title, onSelect} = this.props;
        return (
            <View style={[style, styles.container]}>
                <Button key={this.props.title} rounded light titleStyle={{padding: 20}}
                        style={[styles.button, {backgroundColor: isSelected ? SELECTED : GRAY_LIGHT}]}
                        onPress={onSelect}>
                    <Text style={styles.text}>{title}</Text>
                </Button>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginRight: 10
    },
    button: {
        width: BUTTON_WIDTH,
        height: 60,
        justifyContent: 'center'
    },
    text: {
        fontSize: 22,
        marginHorizontal: 18,
        textAlign: 'center',
        marginVertical: 14
    }
});

BigCheckboxItem.propTypes = {
    isSelected: PropTypes.bool,
    title: PropTypes.string,
    onSelect: PropTypes.func,
};