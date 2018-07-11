import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {Form} from 'native-base';

export default class FormData extends Component {

    constructor(props) {
        super(props);
    }

    validate(items) {
        const {shouldValidate} = this.props;
        let passValidation = true;
        if (shouldValidate) {
            passValidation = FormData.passValidation(items);
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
                <Form>
                    {this.props.children}
                </Form>
            </View>
        );
    }
}

FormData.propTypes = {
    shouldValidate: PropTypes.bool,
    style: PropTypes.any
};

FormData.defaultProps = {
    shouldValidate: true,
    style: {}
};

const styles = {
    formContainer: {width: '100%'},
    formItem: {}
};