import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';
import {GRAY_LIGHT, SELECTED} from 'src/utils/colors';

export default class CheckboxItem extends Component {

    render() {
        const {isSelected, title, onSelect} = this.props;
        return (
            <View style={styles.container}>
                <Button key={this.props.title} rounded light titleStyle={{padding: 10}}
                        style={{backgroundColor: isSelected ? SELECTED : GRAY_LIGHT}}
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
    text: {
        fontSize: 16,
        marginHorizontal: 10
    }
});

CheckboxItem.propTypes = {
    isSelected: PropTypes.bool,
    title: PropTypes.string,
    onSelect: PropTypes.func,
};