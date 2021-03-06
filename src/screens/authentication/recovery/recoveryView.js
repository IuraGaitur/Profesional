import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions, Platform} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR} from 'src/utils/colors';
import {EMAIL, REQUIRED, STRONG_PASS} from 'src/views/form/textInput';
import Form from 'src/views/form/formData';
import SubmitButton from 'src/views/native_elements/submitButton';
import {Button, Label, Icon, Toast} from 'native-base';
import FormItem from 'src/views/native_elements/formItem';
import BackMenu from 'src/views/menu/backMenu';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class RecoveryView extends Component {

    user = {};

    constructor(props) {
        super(props);
        this.state = {
            showPass:false,
            email: '',
            password: '',
            ...props
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    reset = (email, password, resetCallback) => {
      let passValidation = this.refs.formData.validate([this.refs.emailEdit, this.refs.passEdit]);
      if (passValidation) {
          resetCallback(email, password);
      }
    };

    updateForm = (item, value) => {
        this.setState({[item]: value});
        this.user[item] = value;
    };

    showPass(showPass) {
        this.setState({...this.state, showPass: !showPass});
    };

    showMessage(message) {
        Toast.show({
            text: message,
            buttonText: 'Okay'
        });
    }

    render() {
        const {email, newPass, actionResetCallback, actionInfoCallback, showLoading, showPass} = this.state;
        return (
            <ContainerFlex>
                <BackMenu title={'<p><b>FORGOT</b> YOUR PASSWORD</p>'} actions={
                    <Button transparent onPress={() => actionInfoCallback()}>
                        <Icon name='information-circle-outline' style={{color: GRAY_COLOR}}/>
                    </Button>
                }/>
                <ContentFlex padding={16}>
                    <Form shouldValidate={true} ref='formData'>
                        <Text style={{paddingTop: 20}}>Enter your email and choose a new password.</Text>
                        <Text style={{paddingBottom: 20}}>You will receive a PIN via email. Enter the pin to reset the password.</Text>
                        <FormItem ref='emailEdit'
                                  value={email}
                                  onChangeText={(text) => {this.updateForm('email', text)}}
                                  onSubmitEditing={() => this.refs.passEdit.focus()}
                                  validation={[{name: REQUIRED, error: 'Required'},
                                                {name: EMAIL, error: 'Not valid email'}]}>
                            <Label>Email Address</Label>
                        </FormItem>
                        <FormItem ref='passEdit' password={true}
                                  value={newPass}
                                  onChangeText={(text) => {this.updateForm('newPass', text)}}
                                  isLast validation={[{name: REQUIRED, error: 'Required'}, {name: STRONG_PASS, error: 'Not a strong pass'}]}>
                            <Label>New Password</Label>
                        </FormItem>
                        <SubmitButton text='RESET PASSWORD' showLoading={showLoading} onPress={() => this.reset(this.user.email, this.user.pass, actionResetCallback)}/>
                    </Form>
                </ContentFlex>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        height: Platform.OS === 'ios' ? 90 : 90 - 24
    },
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        width: SCREEN_WIDTH - SCREEN_WIDTH * 0.4,
        alignItems: 'center',
        padding: 10
    },
    titleBold: {
        color: TEXT_COLOR,
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        color: TEXT_COLOR,
        fontSize: 22
    },
    inputsContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    input: {
        color: 'black',
        fontSize: 18
    },
    inputContainer: {
        marginTop: 30,
        width: 'auto'
    },
    buttonStyle: {
        backgroundColor: PRIMARY,
        borderWidth: 2,
        borderColor: 'white',
        padding: 4,
        height: 50
    },
    buttonContainer: {
        width: 'auto',
        marginTop: 20
    },
    buttonTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    headerContainer: {
        backgroundColor: LIGHT_COLOR
    },
});


RecoveryView.propTypes = {
    actionResetCallback: PropTypes.func,
    actionInfoCallback: PropTypes.func,
    actionBackCallback: PropTypes.func,
    showLoading: PropTypes.bool
};
