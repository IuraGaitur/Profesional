import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from "react-native";

export default class Form extends Component {

    constructor(props) {
        super(props);
    }

    validate(items) {
        const {shouldValidate} = this.props;
        let passValidation = true;
        if (shouldValidate) {
            passValidation = Form.passValidation(items);
        }

        return passValidation;
    }

    static passValidation(formItems) {
        let itemValidations = [];
        if (!formItems) return true;

        for (let item in formItems) {
            let isValid = formItems[item].isValid();
            itemValidations.push(isValid);
        }

        return !itemValidations.includes(false);
    }

    render() {
        let formContainerStyles = [styles.formContainer, this.props.style ? this.props.style : {}];
        return (
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
    shouldValidate: true,
    style: {}
};

const styles = {
    formContainer: {},
    formItem: {}
};