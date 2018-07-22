import {GRAY_LIGHT, PINK} from 'src/utils/colors';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, View} from 'native-base';

export default class CircleButton extends Component {

    render() {
        let {text, color, onPress} = this.props;
        return (
            <View style={[styles.container, {backgroundColor: color}]}>
                <Text uppercase style={styles.text}>{text}</Text>
            </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: GRAY_LIGHT,
        width: 60,
        height: 60,
        borderRadius: 30,
        padding: 8,
        margin: 4,

        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 22,
        textAlign: 'center',
        flex: 1,
        alignSelf: 'center'
    }
});

CircleButton.defaultProps = {
    color: GRAY_LIGHT,
    text: '',
    onPress: () => {}
};

CircleButton.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onPress: PropTypes.func,
};