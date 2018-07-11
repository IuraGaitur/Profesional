import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {GRAY_COLOR, LIGHT_COLOR} from 'src/utils/colors';
import TouchOpacityDebounce from 'src/utils/touchable_debounce/touchOpacityDebounce';


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
                        <Text style={styles.drawerItem}>{title} </Text>
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

    drawerItem: {
        fontSize: 18,
        color: 'black'
    },

    switchContainer: {
        flexDirection: 'row',
        margin: 16,
        height: 'auto',
        backgroundColor: LIGHT_COLOR
    },

    inline: {
        flex: 1,
        flexDirection: 'column',
    },
});

MenuItem.propTypes = {
    selectPageCallback: PropTypes.func,
    title: PropTypes.string,
    position: PropTypes.number
};
