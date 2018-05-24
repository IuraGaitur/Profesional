import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from "react-native-elements";
import {CheckBox} from "native-base";
import PropTypes from 'prop-types';
import {PRIMARY} from "../../utils/Colors";
export const REQUIRED = 'required';

export default class CheckboxInput extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    isValid() {
        this.setState({...this.state, startValidation: true});
        return this.state.checked;
    }

    needValidation() {
        if (this.state.needValidation && !this.state.checked && this.state.startValidation) {
            return <Text style={styles.validatorText}>Required</Text>
        }
        return <View/>
    }

    render() {
        let requiredValidator = this.needValidation();
        let {checked, checkedColor, onPress} = this.state;
        return <View style={styles.checkValidator}>
                    <CheckBox
                        color={checkedColor}
                        checked={checked}
                        onPress={onPress}/>
                    {requiredValidator}
                </View>
    }

}

const styles = StyleSheet.create({
    checkValidator: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    textValidator: {
        alignItems: 'flex-start'
    },
    validatorText: {
        color: 'red',
        fontSize: 12
    }
});

CheckboxInput.propTypes = {
    needValidation: PropTypes.bool,
    checked: PropTypes.bool,
    onPress: PropTypes.func,
    checkedColor: PropTypes.string
};