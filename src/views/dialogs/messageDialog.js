import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GRAY_COLOR, PRIMARY} from 'src/utils/colors';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';
import Overlay from 'react-native-modal-overlay';
import {validationEmail, validationRequired} from 'src/utils/validation';
import FormItem from 'src/views/native_elements/formItem';
import Form from 'src/views/form/formData';
import {Label} from "native-base";

export default class MessageDialog extends Component {

    constructor(props) {
        super(props);
        this.state = {...props, email: ''};
    }

    sendMessage = (actionSendMessage) => {
        let areFieldsValid = this.refs.formData.validate([this.refs.emailInput]);
        if (areFieldsValid) {
            this.setState({email: ''});
            actionSendMessage();
        }
    };

    render() {
        const {visible, dismissCallback, actionMessage} = this.props;
        const {email} = this.state;

        return (<Overlay
            visible={visible}
            closeOnTouchOutside={false} animationType='zoomIn'
            childrenWrapperStyle={styles.backgroundContainer}
            containerStyle={styles.container}
            animationDuration={500}>
            <Text style={styles.titleDialog}>Info</Text>
            <Text style={styles.messageDialog}>Enter email and try to send your diagnosis one more time</Text>
            <Form shouldValidate ref='formData'>
                <FormItem
                    ref="emailInput"
                    containerStyle={styles.inputEmail}
                    editStyle={styles.inputEmailEdit}
                    validation={[validationRequired, validationEmail]}
                    value={email}
                    onChangeText={text => this.setState({'email': text})}>
                    <Label style={styles.label}>Email address</Label>
                </FormItem>
            </Form>
            <View style={styles.buttonDialog}>
                <Button clear title='CANCEL' TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => dismissCallback(e)} color={PRIMARY} titleStyle={styles.title}/>
                <Button clear title='OK' TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => this.sendMessage(actionMessage)} color={PRIMARY} titleStyle={styles.title}/>
            </View>
        </Overlay>);
    }
}

MessageDialog.propTypes = {
    actionMessage: PropTypes.func,
    dismissCallback: PropTypes.func,
    visible: PropTypes.bool
};

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        borderColor: GRAY_COLOR,
        borderRadius: 10,
        alignItems: 'flex-start'
    },
    container: {
        backgroundColor: 'rgba(255,255,255, 0.3)'
    },
    buttonDialog: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 16
    },
    titleDialog: {
        fontSize: 20,
        marginBottom: 20

    },
    messageDialog: {
        fontSize: 15,
        color: GRAY_COLOR
    },
    title: {
        fontSize: 18,
        color: GRAY_COLOR
    },
    overlayContainer: {
        flex: 1,
        flexDirection: 'column',
        width: 300,
        backgroundColor: 'white',
        height: 150,
        padding: 16
    },
    inputEmail: {
        marginTop: 16,
        width: 200
    },
    label: {
        fontSize: 12,
        color: PRIMARY
    },
    inputEmailEdit: {
        fontSize: 14
    }
});
