import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";

export default class Form extends Component{

    constructor(props){
        super(props);
    }

    validate(items) {
        const { shouldValidate } = this.props;
        let passValidation = true;
        if(shouldValidate) {
            passValidation = this.checkForm(items);
        }

        return passValidation;
    }

    checkForm(formItems) {
        let validItems = [];
        for(let i = 0; i < formItems.length; i++) {
            let item = formItems[i];
            let validationResult = item.isValid();
            validItems.push(validationResult);
        }

        return validItems.includes(true);
    }

    render() {
        let formContainerStyles = [styles.formContainer, this.props.style ? this.props.style : {}];
        return(
            <View style={formContainerStyles}>
                {this.props.children}
            </View>
        );
    }
}

Form.propTypes = {
    shouldValidate: PropTypes.bool,
    style: PropTypes.any
};

Form.defaultProps = {
    shouldValidate: false,
    style: {}
};

const styles = {
    formContainer:{},
    formItem:{}
};