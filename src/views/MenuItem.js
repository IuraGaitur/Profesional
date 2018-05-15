import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Platform} from 'react-native';
import {PRIMARY} from "../utils/Colors";
import TouchOpacityDebounce from "../utils/touchable_debounce/TouchOpacityDebounce";
import PropTypes from 'prop-types';

export default class MenuItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { selectPageCallback, title, position } = this.props;

        return (
            <View style={styles.inline}>
                <TouchOpacityDebounce onPress={() => selectPageCallback(position)}>
                    <View style={styles.switchContainer}>
                        <Text style={styles.drawerItem}> {title} </Text>
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
        height: 2,
        marginLeft: 15,
        backgroundColor: 'white'
    },

    drawerItem: {
        fontSize: 24,
        color: '#fff'
    },

    switchContainer: {
        flexDirection: 'row',
        paddingRight: 8,
        height: 38,
        backgroundColor: PRIMARY
    },

    inline: {
        flexDirection: 'column',
    },
});

MenuItem.propTypes = {
    selectPageCallback: PropTypes.func,
    title: PropTypes.string,
    position: PropTypes.number
};
