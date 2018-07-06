import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {GRAY_COLOR, LIGHT_COLOR, PRIMARY} from 'src/utils/Colors';
import TouchOpacityDebounce from 'src/utils/touchable_debounce/TouchOpacityDebounce';
import PropTypes from 'prop-types';

export default class HeaderItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { selectPageCallback, title } = this.props;

        return (
            <View style={styles.inline}>
                <TouchOpacityDebounce onPress={() => selectPageCallback(0)}>
                    <View style={styles.switchContainer}>
                        <Image style={styles.imageItem} source={require('Sytem_Pro/assets/images/logo.png')}/>
                    </View>
                </TouchOpacityDebounce>
                <View style={styles.line}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        backgroundColor: GRAY_COLOR
    },

    imageItem: {
        width: 100,
        height: 72
    },

    switchContainer: {
        flexDirection: 'row',
        margin: 16,
        height: 'auto',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: LIGHT_COLOR
    },

    inline: {
        flex: 1,
        flexDirection: 'column',
    },
});