import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import React, {Component} from 'react';
import {GRAY_COLOR, PRIMARY} from 'src/utils/Colors';
import ValidationUtil from 'src/utils/ValidationUtil';
import {Icon, Input, Item, Text, View} from 'native-base';

export const REQUIRED = 'required';
export const EMAIL = 'email';
export const CONFIRMATION = 'confirmation';
export const STRONG_PASS = 'strong_pass';

export default class FormItem extends Component {

    textInput = {};
    hasError = false;

    constructor(props) {
        super(props);
        this.state = {
            touched: false,
            error: false,
            password: false,
            isSecure: props.password,
            ...props
        };
    }

    changeText(e, callback) {
        let error = false;
        if (!e) error = true;
        this.setState({value: e, error: error});
        if(callback) {
            callback(e);
        }

    };

    changeVisibility = () => {
      this.setState({isSecure: !this.state.isSecure});
    };

    validateRequired(value, errorMessage) {
        let isValid =  value != '' && value != null;
        return this.setValidState(isValid, errorMessage);
    }

    validateEmail(value, errorMessage) {
        let isValid = ValidationUtil.validateEmail(value);
        return this.setValidState(isValid, errorMessage);
    }

    validateConfirmation(value1, value2, errorMessage) {
        let isValid = value1 == value2;
        return this.setValidState(isValid, errorMessage);
    }

    validateStrongPass(value, errorMessage) {
        let isValid = ValidationUtil.validateStrongPassword(value);
        return this.setValidState(isValid, errorMessage);
    }

    setValidState(isValid, errorMessage) {

        if (!isValid) {
            this.setState({...this.state, errorMessage: errorMessage});
        } else {
            this.setState({...this.state, errorMessage: null});
        }
        this.hasError = !isValid;

        return isValid;
    }

    isValid() {
        let { confirmationValue } = this.props;
        let { value } = this.props;

        if (!this.props.validation) return true;
        let passValidations = [];

        for (let prop in this.props.validation) {
            let isValid = true;
            let name = this.props.validation[prop].name;
            let error = this.props.validation[prop].error;
            switch (name) {
                case REQUIRED:
                    isValid = this.validateRequired(value, error);
                    break;
                case EMAIL:
                    isValid = this.validateEmail(value, error);
                    break;
                case CONFIRMATION:
                    isValid = this.validateConfirmation(value, confirmationValue, error);
                    break;
                case STRONG_PASS:
                    isValid = this.validateStrongPass(value, error);
                    break;
            }
            passValidations.push(isValid);
            if(!isValid) break;
        }
        let isValid = !passValidations.includes(false);
        return isValid;
    }

    setTouched = () => {
        this.isValid();
        this.setState({borderColor: (this.hasError ? 'red': GRAY_COLOR), borderWidth: 1});
    };

    onEndEdit = (callback) => {
        callback();
    };

    focus() {
        this.textInput._root.focus();
    }

    setOnFocus(callback) {
        this.setState({touched: true, borderColor: (this.state.errorMessage ? 'red': PRIMARY), borderWidth: 2});
        if(callback) { callback();}
    }

    render() {
        const {error, password, isSecure, onChangeText, isDisabled, onFocus, errorMessage, borderColor, borderWidth} = this.state;
        const {value, isLast, onSubmitEditing, numberOfLines} = this.props;

        return (<View>
                    <Item floatingLabel style={{borderColor: this.state.borderColor, borderBottomWidth: borderWidth}}>
                        {this.props.children}
                        <Input getRef={item => this.textInput = item}
                               onChangeText={e => this.changeText(e, onChangeText)}
                               onBlur={() => this.setTouched()}
                               value={value}
                               editable={!isDisabled}
                               onFocus={() => this.setOnFocus(onFocus)}
                               secureTextEntry={isSecure}
                               returnKeyType={isLast? 'done': 'next'}
                               onSubmitEditing={onSubmitEditing}
                               numberOfLines={numberOfLines}
                               autoCapitalize='none'
                               multiline={numberOfLines ? true : false}

                        />
                        {password && <Icon active name={isSecure ? 'eye-off': 'eye'}
                                           onPress={() => this.changeVisibility()}/>}
                    </Item>
                    {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
                </View>);
    }

}

const styles = StyleSheet.create({
   error: {
       fontSize: 10,
       color: 'red'
   }
});

FormItem.propTypes = {
    value: PropTypes.string,
    confirmationValue: PropTypes.string,
    onChangeText: PropTypes.func,
    onSubmitEditing: PropTypes.func,
    onFocus: PropTypes.func,
    validation: PropTypes.array,
    password: PropTypes.bool,
    isLast: PropTypes.bool,
    numberOfLines: PropTypes.number,
};

