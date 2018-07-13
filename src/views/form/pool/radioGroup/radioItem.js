import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Text} from 'native-base';
import {GRAY_LIGHT, SELECTED} from 'src/utils/colors';

export default class RadioItem extends Component {

    render() {
        const {style, title, isSelected, onSelect} = this.props;
        let customStyle = style ? style : {};
        return (
            <View style={[customStyle, styles.parent]}>
                <Button key={title} rounded light titleStyle={{padding: 20}}
                        style={{width: '100%', height: 60, backgroundColor: isSelected ? SELECTED : GRAY_LIGHT, justifyContent: 'center'}}
                        onPress={onSelect}>
                    <Text style={styles.text}>{title}</Text>
                </Button>
            </View>);
    }
}

const styles = StyleSheet.create({
    parent: {
        marginVertical: 10,
        marginRight: 10
    },
    text: {
        flex: 1,
        fontSize: 22,
        textAlign: 'center',
        marginHorizontal: 18,
        marginVertical: 14
    }
});

RadioItem.propTypes = {
    style: PropTypes.object,
    title: PropTypes.string,
    isSelected: PropTypes.bool,
    onSelect: PropTypes.func
};