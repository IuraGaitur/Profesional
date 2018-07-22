import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from 'src/views/form/formData';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {GRAY_COLOR, PRIMARY, TEXT_COLOR, UN_SELECTED} from 'src/utils/colors';
import TextInput, {REQUIRED} from 'src/views/form/textInput';
import {View, StyleSheet} from 'react-native';
import TouchOpacityDebounce from 'src/utils/touchable_debounce/touchOpacityDebounce';
import PickerInput from 'src/views/form/pickerInput';
import {Button, Icon, Label, CheckBox, Text} from 'native-base';
import FormItem from 'src/views/native_elements/formItem';
import Space from 'src/views/native_elements/space';
import SubHeader from 'src/views/form/subHeader';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';
import MainStyle from 'src/utils/mainStyle';

export default class EditClientView extends Component {

    formInputs = [];

    startDiagnosis(startDiagnosisCallback) {
        let areFieldsValid = this.refs.formData.validate([this.formInputs[0], this.formInputs[1]]);
        if (areFieldsValid) {
            startDiagnosisCallback(this.client);
        }
    }

    render() {
        const {
            client, showDatePicker, countries, languages, genders,
            actionFindAboutCookieCallback, actionFindAboutPrivacyCallback, actionShowDatePicker,
            actionHandleDatePicked, actionHideDateTimePicker, actionChangeClientCallback,
            actionSaveChanges
        } = this.props;

        return (
            <ContainerFlex>
                <BackMenu title={'<p>EDIT <b>CLIENT</b></p>'} actions={
                    <Button transparent onPress={() => actionSaveChanges()}>
                        <Icon name='checkmark' style={MainStyle.saveButton}/>
                    </Button>}

                />
                <ContentFlex scrollable>
                    <Form shouldValidate ref='formData'>
                        <SubHeader title='Basic' color={UN_SELECTED}/>
                        <View style={{padding: 8}}>
                            <FormItem
                                ref={item => this.formInputs[0] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                value={client.firstName}
                                onSubmitEditing={() => this.formInputs[1].focus()}
                                onChangeText={item => actionChangeClientCallback('firstName', item)}>
                                <Label>FIRST NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[1] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                value={client.lastName}
                                onSubmitEditing={() => this.formInputs[2].focus()}
                                onChangeText={item => actionChangeClientCallback('lastName', item)}>
                                <Label>LAST NAME*</Label>
                            </FormItem>
                            <PickerInput
                                label="GENDER"
                                items={genders}
                                valueChangeCallBack={item => actionChangeClientCallback('gender', item)}
                                needValidation value={client.gender}
                                mode={'dropdown'}
                                ref={item => this.formInputs[2] = item}
                                onSubmitEditing={() => this.formInputs[3].focus()}
                            />
                            <FormItem
                                ref={item => this.formInputs[3] = item}
                                value={client.email}
                                onSubmitEditing={() => this.formInputs[4].focus()}
                                onChangeText={item => actionChangeClientCallback('email', item)}>
                                <Label>EMAIL ADDRESS</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[4] = item}
                                onFocus={() => {
                                    actionShowDatePicker()
                                }}
                                onSubmitEditing={() => this.formInputs[5].focus()}
                                value={client.birthday}>
                                <Label>DATE OF BIRTH</Label>
                            </FormItem>
                        </View>
                        <SubHeader title='Contact Details' color={UN_SELECTED}/>
                        <View style={{padding: 8}}>
                            <PickerInput
                                label="LANGUAGE"
                                items={languages}
                                valueChangeCallBack={item => actionChangeClientCallback('language', item)}
                                defaultItem={{label: 'LANGUAGE', value: ''}}
                                needValidation value={client.language}
                                ref={item => this.formInputs[5] = item}
                                onSubmitEditing={() => this.formInputs[6].focus()}
                            />
                            <FormItem
                                ref={item => this.formInputs[6] = item}
                                value={client.city}
                                onSubmitEditing={() => this.formInputs[7].focus()}
                                onChangeText={item => actionChangeClientCallback('city', item)}>
                                <Label>CITY</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[7] = item}
                                value={client.postalCode}
                                onSubmitEditing={() => this.formInputs[8].focus()}
                                onChangeText={item => actionChangeClientCallback('postalCode', item)}>
                                <Label>POSTAL CODE</Label>
                            </FormItem>
                            <PickerInput
                                label="COUNTRY"
                                items={countries}
                                valueChangeCallBack={item => actionChangeClientCallback('country', item)}
                                needValidation value={client.country}
                                ref={item => this.formInputs[8] = item}
                                isLast
                                onSubmitEditing={() => this.formInputs[9].focus()}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                        </View>
                        <SubHeader title='Privacy' color={UN_SELECTED}/>
                        <View style={{padding: 16}}>
                            <View style={styles.checkboxItem}>
                                <Text style={styles.textValidator}>Save my EnergyCode in this device *</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={client.saveEnergyCode}
                                    onPress={() => actionChangeClientCallback('saveEnergyCode', !client.energySave)}/>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.checkboxItem}>
                                <Text style={{marginRight: 20}}>Receive System Professional emails</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={client.receiveEmails}
                                    onPress={() => actionChangeClientCallback('receiveEmails', !client.receiveEmails)}/>
                            </View>
                            <Space height={25}/>

                            <Text style={styles.terms}>
                                Please note, we use approved digital cookies, in these terms emails let us know
                                you've
                                received cookies to make sure we're giving you news and information that
                                interests you.
                            </Text>
                            <TouchOpacityDebounce onPress={actionFindAboutCookieCallback}>
                                <Text style={styles.link}>Find out more about cookies.</Text>
                            </TouchOpacityDebounce>
                            <TouchOpacityDebounce onPress={actionFindAboutPrivacyCallback}>
                                <Text style={styles.link}>By clicking above you accept T&C.</Text>
                            </TouchOpacityDebounce>
                        </View>
                    </Form>
                </ContentFlex>
                <DateTimePicker
                    date={new Date(client.birthday)}
                    isVisible={showDatePicker}
                    onConfirm={(e) => actionHandleDatePicked(e)}
                    onCancel={(e) => actionHideDateTimePicker(e)}
                />
            </ContainerFlex>);
    }
}

const styles = StyleSheet.create({
    rightAction: {
        color: TEXT_COLOR,
        fontSize: 14,
        paddingLeft: 0
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: GRAY_COLOR,
        marginVertical: 16
    },
    terms: {
        textAlign: 'center',
        marginTop: 12
    },
    checkboxItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 8
    },
    link: {
        flex: 1,
        textAlign: 'center',
        color: PRIMARY,
        textDecorationLine: 'underline',
        marginTop: 12,
        borderBottomColor: PRIMARY
    },
    textValidator: {
        alignItems: 'flex-start'
    },
    validatorText: {
        color: 'red'
    }
});

EditClientView.defaultProps = {};


EditClientView.propTypes = {
    client: PropTypes.object,
    countries: PropTypes.array,
    languages: PropTypes.array,
    genders: PropTypes.array,
    startDiagnosisCallback: PropTypes.func,
    actionFindAboutCookieCallback: PropTypes.func,
    actionFindAboutPrivacyCallback: PropTypes.func,
    actionChangeClientCallback: PropTypes.func,
    actionHandleDatePicked: PropTypes.func,
    actionHideDateTimePicker: PropTypes.func,
    showDatePicker: PropTypes.bool,
    actionShowDatePicker: PropTypes.func,
    actionSaveChanges: PropTypes.func
};
