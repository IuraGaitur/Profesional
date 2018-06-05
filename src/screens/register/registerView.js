import moment from 'moment';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from "../../views/form/FormData";
import User from "../../data/models/User";
import CheckboxInput from "../../views/form/CheckboxInput";
import CollectionUtils from './../../utils/CollectionUtils';
import NetworkErrorDialog from "../../views/NetworkErrorDialog";
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Icon} from "react-native-elements";
import {DARK_OVERLAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY} from '../../utils/Colors';
import TextInput, {CONFIRMATION, EMAIL, REQUIRED} from "../../views/form/TextInput";
import {View, StyleSheet, Dimensions, ScrollView, Platform} from "react-native";
import TouchOpacityDebounce from "../../utils/touchable_debounce/TouchOpacityDebounce";
import PickerInput from "../../views/form/PickerInput";
import {Body, Left, Right, Button, Header, Label, CheckBox, Text, Grid} from "native-base";
import FormItem from './../../views/native_elements/FormItem';
import { Col, Row } from 'react-native-easy-grid';
import Space from "../../views/native_elements/Space";
import SubmitButton from "../../views/native_elements/SubmitButton";
import {STRONG_PASS} from "../../views/native_elements/FormItem";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class RegisterView extends Component {

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

    checkTermsCallback = () => {
        this.user.termsCheck = !this.state.termsCheck;
        this.setState({termsCheck: !this.state.termsCheck})
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
        this.updateForm('birthday', moment(time).format('YYYY-MM-DD'));
        this.setState({showDatePicker: false});
    };

    hideDateTimePicker() {
        this.setState({showDatePicker: false});
    };

    render() {
        const { firstName, lastName, email, emailConfirm,
                birthday, pass, passConfirm, salonName,
                city, country, phone, wellaNumber, postalCode, termsCheck, newsLetterCheck,
                showDatePicker} = this.state;
        const {showLoading, showNetworkError, countries, actionBack, actionInfo, dismissDialogCallback} = this.props;

        return (
            <View>
                <Header style={styles.headerContainer}>
                    <Left>
                        <Button transparent onPress={() => actionBack()}>
                            <Icon name='arrow-back' color={GRAY_COLOR}/>
                        </Button>
                    </Left>
                    <Body>
                        <Grid>
                            <Row>
                                <Text style={styles.titleBold}>TELL US </Text>
                                <Text style={styles.title}>ABOUT</Text>
                            </Row>
                            <Row><Text style={styles.title}>YOURSELF</Text></Row>
                        </Grid>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => actionInfo()}>
                            <Icon name='info' color={GRAY_COLOR}/>
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{backgroundColor: 'white'}}>
                    <View style={styles.inputsContainer}>
                        <Form shouldValidate ref="formData">

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
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[2] = item}
                                validation={[{name: REQUIRED, error: 'Required'},
                                             {name: EMAIL, error: 'Not valid email'}]}
                                value={email}
                                onSubmitEditing={() => this.formInputs[3].focus()}
                                onChangeText={item => {this.updateForm('email', item);}}>
                                <Label>EMAIL ADDRESS*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[3] = item}
                                validation={[{name: REQUIRED, error: 'Required'},
                                    {name: EMAIL, error: 'Not valid email'},
                                    {name: CONFIRMATION, error: 'Emails are not the same'}]}
                                confirmationValue={this.state.email}
                                value={emailConfirm}
                                onSubmitEditing={() => this.formInputs[4].focus()}
                                onChangeText={item => {this.updateForm('emailConfirm', item);}}>
                                <Label>EMAIL CONFIRMATION*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[4] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onFocus={() => {this.showDateTimerPicker()}}
                                onSubmitEditing={() => this.formInputs[5].focus()}
                                value={birthday}>
                                <Label>DATE OF BIRTH*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[5] = item}
                                validation={[{name: REQUIRED, error: 'Required'},
                                             {name: STRONG_PASS, error: 'Not valid password'}]}
                                value={pass} password
                                onSubmitEditing={() => this.formInputs[6].focus()}
                                onChangeText={item => {this.updateForm('pass', item);}}>
                                <Label>PASSWORD*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[6] = item}
                                confirmationValue={this.state.pass}
                                value={passConfirm} password
                                onSubmitEditing={() => this.formInputs[7].focus()}
                                validation={[{name: REQUIRED, error: 'Required'},
                                             {name: STRONG_PASS, error: 'Not valid password'},
                                             {name: CONFIRMATION, error: 'Passwords are not the same'}]}
                                onChangeText={item => this.updateForm('passConfirm', item)}>
                                <Label>PASSWORD CONFIRMATION*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[7] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[8].focus()}
                                value={salonName}
                                onChangeText={item => this.updateForm('salonName', item)}>
                                <Label>SALON NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[8] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[9].focus()}
                                value={phone}
                                onChangeText={item => this.updateForm('phone', item)}>
                                <Label>PHONE NUMBER*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[9] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[10].focus()}
                                value={postalCode}
                                onChangeText={item => this.updateForm('postalCode', item)}>
                                <Label>POSTAL CODE*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[10] = item}
                                value={city}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[11].focus()}
                                onChangeText={item => this.updateForm('city', item)}>
                                <Label>CITY*</Label>
                            </FormItem>
                            <PickerInput
                                items={countries}
                                valueChangeCallBack={this.changeCountryCallback}
                                defaultItem={{label: "COUNTRY*", value: ""}}
                                needValidation value={country}
                                ref={item => this.formInputs[11] = item}
                                onSubmitEditing={() => this.formInputs[12].focus()}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <FormItem
                                ref={item => this.formInputs[12] = item}
                                value={wellaNumber} isLast
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onChangeText={item => this.updateForm('wellaNumber', item)}>
                                <Label>WELLA CUSTOMER NUMBER*</Label>
                            </FormItem>
                            <Space height={25}/>
                            <View style={styles.checkboxItem}>
                                <Text style={styles.textValidator}>Accept terms *</Text>
                                <CheckboxInput checkedColor={PRIMARY}
                                               checked={termsCheck} needValidation
                                               ref={item => this.formInputs[13] = item}
                                               validation={[{name: REQUIRED, error: 'Required'}]}
                                               onPress={() => this.checkTermsCallback()}/>
                            </View>
                            <Space height={16}/>
                            <View style={styles.checkboxItem}>
                                <Text>Sign to newsletter</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={newsLetterCheck}
                                    onPress={() => this.checkNewsLetterCallback()}/>
                            </View>
                            <Space height={25}/>

                            <SubmitButton text='SIGN UP' showLoading={showLoading} onPress={this.register}/>
                            <Text style={styles.terms}>
                                Please note, we use approved digital cookies, in these terms emails let us know you've
                                received cookies to make sure we're giving you news and information that interests you.
                            </Text>
                            <TouchOpacityDebounce>
                                <Text style={styles.link}>Find out more about cookies.</Text>
                            </TouchOpacityDebounce>
                            <TouchOpacityDebounce>
                                <Text style={styles.link}>By clicking above you accept T&C.</Text>
                            </TouchOpacityDebounce>
                        </Form>
                        <Space height={25}/>
                    </View>
                </ScrollView>
                <DateTimePicker
                    isVisible={showDatePicker}
                    onConfirm={(e) => this.handleDatePicked(e)}
                    onCancel={(e) => this.hideDateTimePicker(e)}
                />
                <NetworkErrorDialog
                    dismissCallback={dismissDialogCallback}
                    showNetworkError={showNetworkError}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: LIGHT_COLOR
    },
    headerTitle: {
        flex: 1,
        flexDirection: 'row',
        width: SCREEN_WIDTH - SCREEN_WIDTH * 0.4,
        alignItems: 'center',
        padding: 10
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
        paddingBottom: 70,
        backgroundColor: 'white'
    },
    signButton: {
        backgroundColor: PRIMARY,
        borderWidth: 1,
        borderColor: 'white',
        padding: 4,
        height: 50
    },
    signTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    signContainer: {
        width: 'auto',
        marginTop: 20
    },
    separator: {
        flex: 1,
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
    inputContainer: {
        marginTop: 30,
        width: SCREEN_WIDTH - 40
    },
    input: {
        color: 'black',
        fontSize: 15,
        height: '100%'
    },
    checkValidator: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    textValidator: {
        alignItems: 'flex-start'
    },
    validatorText: {
        color: 'red'
    }
});

RegisterView.defaultProps = {};


RegisterView.propTypes = {
    registerCallback: PropTypes.func,
    dismissDialogCallback: PropTypes.func,
    showLoading: PropTypes.bool,
    showNetworkError: PropTypes.bool,
    countries: PropTypes.array,
    actionBack: PropTypes.func,
    actionInfo: PropTypes.func
};
