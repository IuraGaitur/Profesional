import moment from 'moment';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from "../../../views/form/FormData";
import User from "../../../data/models/User";
import CollectionUtils from '../../../utils/CollectionUtils';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {DARK_OVERLAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR, UN_SELECTED} from '../../../utils/Colors';
import TextInput, {CONFIRMATION, EMAIL, REQUIRED} from "../../../views/form/TextInput";
import {View, StyleSheet, Dimensions, ScrollView, Platform} from "react-native";
import TouchOpacityDebounce from "../../../utils/touchable_debounce/TouchOpacityDebounce";
import PickerInput from "../../../views/form/PickerInput";
import {Body, Left, Right, Button, Header, Label, CheckBox, Text, Grid} from "native-base";
import FormItem from '../../../views/native_elements/FormItem';
import Space from "../../../views/native_elements/Space";
import SubHeader from "../../../views/form/SubHeader";
import ContainerFlex from "../../../views/native_elements/ContainerFlex";
import ContentFlex from "../../../views/native_elements/ContentFlex";
import BackMenu from "../../../views/menu/BackMenu";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class CreateClientView extends Component {

    formInputs = [];
    user = new User();

    constructor(props) {
        super(props);
        this.state = {...this.state, ...props};
    }

    componentWillReceiveProps(nextProps) {
        if (!CollectionUtils.isNullOrEmpty(nextProps.countries)) {
            this.setState({countries: nextProps.countries})
        }
    }

    register = (e) => {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            this.props.registerCallback(this.user);
        }
    };

    changeCountryCallback = (selectedCountry) => {
        this.setState({country: selectedCountry});
    };

    changeLanguageCallback = (selectedLanguage) => {
        this.setState({language: selectedLanguage});
    };

    checkEnergyCallback = () => {
        this.user.energySave = !this.state.energySave;
        this.setState({energySave: !this.state.energySave})
    };

    checkNewsLetterCallback = () => {
        this.user.newsLetterCheck = !this.state.newsLetterCheck;
        this.setState({newsLetterCheck: !this.state.newsLetterCheck})
    };

    updateForm = (item, value) => {
        this.setState({[item]: value});
        this.user[item] = value;
    };

    showDateTimerPicker() {
        this.setState({showDatePicker: true});
    }

    handleDatePicked(time) {
        this.updateForm('birthDate', moment(time).format('YYYY-MM-DD'));
        this.setState({showDatePicker: false});
    };

    hideDateTimePicker() {
        this.setState({showDatePicker: false});
    };

    startDiagnosis(startDiagnosisCallback) {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            startDiagnosisCallback(this.user);
        }
    }

    render() {
        const {
            firstName, lastName, email, birthDate, city, country, phone,
            energySave, newsLetterCheck, showDatePicker, language} = this.state;
        const {countries, languages, startDiagnosisCallback} = this.props;

        return (
            <ContainerFlex>
                <BackMenu title={'NEW CLIENT'} closeIcon={'close'} actions={
                    <Button transparent onPress={() => this.startDiagnosis(startDiagnosisCallback)}>
                        <Text style={{color: TEXT_COLOR, fontSize: 14}}>START</Text>
                    </Button>}

                />
                <ContentFlex scrollable>
                    <Form shouldValidate ref="formData">
                        <SubHeader title='Basic' color={UN_SELECTED}/>
                        <View style={{padding: 8}}>
                            <FormItem
                                ref={item => this.formInputs[0] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                value={firstName}
                                onSubmitEditing={() => this.formInputs[1].focus()}
                                onChangeText={item => this.updateForm('firstName', item)}>
                                <Label>FIRST NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[1] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                value={lastName}
                                onSubmitEditing={() => this.formInputs[2].focus()}
                                onChangeText={item => this.updateForm('lastName', item)}>
                                <Label>LAST NAME*</Label>
                            </FormItem>
                            <PickerInput
                                items={[{label: 'Female', value: '2'}, {label: 'Other', value: '3'}]}
                                valueChangeCallBack={this.changeCountryCallback}
                                defaultItem={{label: 'Male', value: 'M'}}
                                needValidation value={country}
                                mode={'dropdown'}
                                ref={item => this.formInputs[2] = item}
                                onSubmitEditing={() => this.formInputs[3].focus()}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <FormItem
                                ref={item => this.formInputs[3] = item}
                                validation={[{name: REQUIRED, error: 'Required'},
                                    {name: EMAIL, error: 'Not valid email'}]}
                                value={email}
                                onSubmitEditing={() => this.formInputs[4].focus()}
                                onChangeText={item => {
                                    this.updateForm('email', item);
                                }}>
                                <Label>EMAIL ADDRESS*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[4] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onFocus={() => {
                                    this.showDateTimerPicker()
                                }}
                                onSubmitEditing={() => this.formInputs[5].focus()}
                                value={birthDate}>
                                <Label>DATE OF BIRTH*</Label>
                            </FormItem>
                        </View>
                        <SubHeader title='Contact Details' color={UN_SELECTED}/>
                        <View style={{padding: 8}}>
                            <PickerInput
                                items={languages}
                                valueChangeCallBack={this.changeLanguageCallback}
                                defaultItem={{label: "Language*", value: ""}}
                                needValidation value={language}
                                ref={item => this.formInputs[5] = item}
                                onSubmitEditing={() => this.formInputs[6].focus()}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <FormItem
                                ref={item => this.formInputs[6] = item}
                                value={city}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[7].focus()}
                                onChangeText={item => this.updateForm('city', item)}>
                                <Label>CITY*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[7] = item}
                                value={phone} isLast
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[8].focus()}
                                onChangeText={item => this.updateForm('phone', item)}>
                                <Label>POSTAL CODE*</Label>
                            </FormItem>
                            <PickerInput
                                items={countries}
                                valueChangeCallBack={this.changeCountryCallback}
                                defaultItem={{label: "COUNTRY*", value: ""}}
                                needValidation value={country}
                                ref={item => this.formInputs[8] = item}
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
                                    checked={energySave}
                                    onPress={() => this.checkEnergyCallback()}/>
                            </View>
                            <View style={styles.divider}/>
                            <View style={styles.checkboxItem}>
                                <Text style={{marginRight: 20}}>Receive System Professional emails</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={newsLetterCheck}
                                    onPress={() => this.checkNewsLetterCallback()}/>
                            </View>
                            <Space height={25}/>

                            <Text style={styles.terms}>
                                Please note, we use approved digital cookies, in these terms emails let us know
                                you've
                                received cookies to make sure we're giving you news and information that
                                interests you.
                            </Text>
                            <TouchOpacityDebounce>
                                <Text style={styles.link}>Find out more about cookies.</Text>
                            </TouchOpacityDebounce>
                            <TouchOpacityDebounce>
                                <Text style={styles.link}>By clicking above you accept T&C.</Text>
                            </TouchOpacityDebounce>
                        </View>
                    </Form>
                </ContentFlex>
                <DateTimePicker
                    isVisible={showDatePicker}
                    onConfirm={(e) => this.handleDatePicked(e)}
                    onCancel={(e) => this.hideDateTimePicker(e)}
                />
            </ContainerFlex>);
    }
}

const styles = StyleSheet.create({
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

CreateClientView.defaultProps = {};


CreateClientView.propTypes = {
    registerCallback: PropTypes.func,
    dismissDialogCallback: PropTypes.func,
    showLoading: PropTypes.bool,
    showNetworkError: PropTypes.bool,
    countries: PropTypes.array,
    languages: PropTypes.array,
    actionBack: PropTypes.func,
    startDiagnosisCallback: PropTypes.func
};