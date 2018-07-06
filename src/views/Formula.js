import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Thumbnail, View} from 'native-base';
import HtmlText from 'src/views/native_elements/HtmlText';
import FormulaUtils from 'src/utils/FormulaUtils';

export default class Formula extends Component {

    render() {
        return (
            <View style={styles.formulaContainer}>
                <Thumbnail source={require('Sytem_Pro/assets/images/ic_high.png')}
                           style={[styles.paranthases, {alignSelf: 'flex-start'}]}/>
                <HtmlText html={FormulaUtils.transformInHtml(this.props.text)}
                          styles={styles.formulaTitle} textStyle={styles.text}/>

                <View style={styles.rightIcon}>
                    <Thumbnail source={require('Sytem_Pro/assets/images/ic_low.png')}
                               style={[styles.paranthases, {alignSelf: 'flex-end'}]}/>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16
    },
    paranthases: {
        width: 30,
        height: 30,
        marginLeft: -15,
        marginRight: -5
    },
    formulaContainer: {
        flexWrap:'wrap',
        width: 'auto',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    formulaTitle: {
        maxWidth: '80%',
        height: 'auto',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        paddingTop: 25,
        paddingBottom: 25,
    },
    rightIcon: {
        flexWrap:'wrap',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }

});

Formula.defaultProps = {
    text: '',
};

Formula.propTypes = {
    text: PropTypes.string,
};