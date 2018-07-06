import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from 'src/views/form/FormData';
import {LIGHT_COLOR,} from 'src/utils/Colors';
import {EMAIL, REQUIRED} from 'src/views/form/TextInput';
import {StyleSheet, Platform} from 'react-native';
import {Label, Textarea} from 'native-base';
import FormItem from 'src/views/native_elements/FormItem';
import Space from 'src/views/native_elements/Space';
import SubmitButton from 'src/views/native_elements/SubmitButton';
import Message from 'src/data/models/Message';
import PickerInput from 'src/views/form/PickerInput';
import ContainerFlex from 'src/views/native_elements/ContainerFlex';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import BackMenu from 'src/views/menu/BackMenu';

export default class ContactView extends Component {

    formInputs = [];
    message = new Message();

    constructor(props) {
        super(props);
        this.state = {fullName: '', email: '', subject: '', salonName: '', city: '', message: ''}
    }

    sendMessage = (e) => {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            this.props.registerCallback(this.user);
        }
    };

    updateForm = (item, value) => {
        this.setState({[item]: value});
        this.user[item] = value;
    };


    render() {
        const {fullName, email, subject, issue, country, message} = this.state;
        const {showLoading, showNetworkError, actionBack, actionInfo, dismissDialogCallback, countries} = this.props;

        return (
            <ContainerFlex>
                <BackMenu title={'<p>CONTACT <b>US</b></p>'}/>
                <ContentFlex scrollable padding={8}>
                    <Form shouldValidate ref='formData'>

                        <FormItem
                            ref={item => this.formInputs[0] = item}
                            value={fullName}
                            onSubmitEditing={() => this.formInputs[0].focus()}
                            onChangeText={item => this.updateForm('fullName', item)}>
                            <Label>FULL NAME</Label>
                        </FormItem>
                        <Space height={15}/>
                        <FormItem
                            ref={item => this.formInputs[1] = item}
                            validation={[{name: REQUIRED, error: 'Required'},
                                {name: EMAIL, error: 'Not valid email'}]}
                            value={email}
                            onSubmitEditing={() => this.formInputs[1].focus()}
                            onChangeText={item => {
                                this.updateForm('email', item);
                            }}>
                            <Label>EMAIL ADDRESS*</Label>
                        </FormItem>
                        <Space height={15}/>
                        <FormItem
                            ref={item => this.formInputs[2] = item}
                            validation={[{name: REQUIRED, error: 'Required'}]}
                            onSubmitEditing={() => this.formInputs[2].focus()}
                            value={subject}
                            onChangeText={item => this.updateForm('subject', item)}>
                            <Label>SUBJECT*</Label>
                        </FormItem>
                        <Space height={15}/>
                        <FormItem
                            ref={item => this.formInputs[3] = item}
                            validation={[{name: REQUIRED, error: 'Required'}]}
                            onSubmitEditing={() => this.formInputs[3].focus()}
                            value={issue}
                            onChangeText={item => this.updateForm('issue', item)}>
                            <Label>ISSUE TYPE*</Label>
                        </FormItem>
                        <PickerInput
                            items={countries}
                            valueChangeCallBack={this.changeCountryCallback}
                            defaultItem={{label: 'SALON COUNTRY*', value: ''}}
                            needValidation value={country}
                            ref={item => this.formInputs[9] = item}
                            onSubmitEditing={() => this.formInputs[10].focus()}
                            validation={[{name: REQUIRED, error: 'Required'}]}
                        />
                        <Space height={15}/>
                        <Textarea rowSpan={8} bordered placeholder='MESSAGE*'/>
                        <SubmitButton text='Add Attachments' showLoading={showLoading} onPress={this.register}/>
                        <Space height={15}/>
                        <SubmitButton text='Send Message' showLoading={showLoading} onPress={this.sendMessage}/>
                        <Space height={15}/>
                    </Form>
                </ContentFlex>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: LIGHT_COLOR,
    },
    titleBold: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 22
    },
    inputsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: Platform.OS === 'ios' ? 104 : 96,
        backgroundColor: 'white'
    },
    input: {
        color: 'black',
        fontSize: 15,
        height: '100%'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'

    },
});

ContactView.defaultProps = {};


ContactView.propTypes = {
    registerCallback: PropTypes.func,
    dismissDialogCallback: PropTypes.func,
    showLoading: PropTypes.bool,
    showNetworkError: PropTypes.bool,
    countries: PropTypes.array,
    actionBack: PropTypes.func,
    actionInfo: PropTypes.func
};
