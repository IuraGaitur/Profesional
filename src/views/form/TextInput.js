import React, {Component} from 'react';
import {Input} from "react-native-elements";
import PropTypes from 'prop-types';
import ValidationUtil from "../../utils/ValidationUtil";
export const REQUIRED = 'required';
export const EMAIL = 'email';
export const CONFIRMATION = 'confirmation';

export default class TextInput extends Component{

    constructor(props) {
        super(props);
        this.state = {errorMessage: null}
    }

    componentDidMount() {
        this.setState({...this.props});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    validateRequired(value, errorMessage) {
        let isValid =  value != "" && value != null;
        if (!isValid) {
            this.setState({...this.state, errorMessage: errorMessage});
        } else {
            this.setState({...this.state, errorMessage: null});
        }
        return isValid;
    }

    validateEmail(value, errorMessage) {
        let isValid = ValidationUtil.validateEmail(value);
        if (!isValid) {
            this.setState({...this.state, errorMessage: errorMessage});
        } else {
            this.setState({...this.state, errorMessage: null});
        }
        return isValid;
    }

    validateConfirmation(value1, value2, errorMessage) {
        let isValid = value1 == value2;
        if (!isValid) {
            this.setState({...this.state, errorMessage: errorMessage});
        } else {
            this.setState({...this.state, errorMessage: null});
        }
        return isValid;
    }

    isValid() {
        let { value, confirmationValue } = this.props;
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
            }
            passValidations.push(isValid);
        }
        return !passValidations.includes(false);
    }


    render() {
        const {onChangeText, value, inputStyle, keyboardAppearance, placeholder, autoFocus,
            autoCapitalize, autoCorrect, keyboardType, returnKeyType, blurOnSubmit,
                placeholderTextColor, containerStyle, editable, rightIcon} = this.props;
        const { errorMessage } = this.state;
            return <Input onChangeText={onChangeText}
                          value={value}
                          inputStyle={inputStyle}
                          keyboardAppearance={keyboardAppearance}
                          placeholder={placeholder}
                          autoFocus={autoFocus}
                          autoCapitalize={autoCapitalize}
                          autoCorrect={autoCorrect}
                          keyboardType={keyboardType}
                          returnKeyType={returnKeyType}
                          blurOnSubmit={blurOnSubmit}
                          placeholderTextColor={placeholderTextColor}
                          containerStyle={containerStyle}
                          editable={editable}
                          rightIcon={rightIcon}
                          errorMessage={errorMessage}/>
    }
}

TextInput.propTypes = {
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    confirmationValue: PropTypes.string,
    inputStyle: PropTypes.number,
    keyboardAppearance: PropTypes.string,
    placeholder: PropTypes.string,
    autoFocus: PropTypes.bool,
    autoCapitalize: PropTypes.string,
    autoCorrect: PropTypes.bool,
    keyboardType: PropTypes.string,
    returnKeyType: PropTypes.string,
    blurOnSubmit: PropTypes.bool,
    placeholderTextColor: PropTypes.string,
    containerStyle: PropTypes.number,
    validation: PropTypes.array,
    editable: PropTypes.bool,
    rightIcon: PropTypes.object
};
