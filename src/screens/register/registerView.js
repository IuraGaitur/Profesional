import moment from 'moment';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from "../../views/form/Form";
import User from "../../data/models/User";
import CheckboxInput from "../../views/form/CheckboxInput";
import CollectionUtils from './../../utils/CollectionUtils';
import NetworkErrorDialog from "../../views/NetworkErrorDialog";
import DateTimePicker from 'react-native-modal-datetime-picker';
import {Button, Header, Icon, CheckBox} from "react-native-elements";
import {DARK_OVERLAY_COLOR, GRAY_COLOR, PRIMARY} from '../../utils/Colors';
import TextInput, {CONFIRMATION, EMAIL, REQUIRED} from "../../views/form/TextInput";
import {Text, View, StyleSheet, Dimensions, ScrollView, Platform} from "react-native";
import TouchOpacityDebounce from "../../utils/touchable_debounce/TouchOpacityDebounce";
import PickerInput from "../../views/form/PickerInput";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class RegisterView extends Component {

    inputs = [];

    constructor(props) {
        super(props);
        this.state = {
            firstName: 'Iura',
            lastName: 'Gaitur',
            email: 'Iura.gaitur@gmail.com',
            emailConfirm: 'Iura.gaitur@gmail.com',
            password: '123Abda',
            passwordCheck: '123Abda',
            isSecure: true,
            language: null,
            showLoading: false,
            checked: true,
            showDatePicker: false,
            dateOfBirth: '2018-05-05',
            salonName: 'Beauty',
            city: 'Ungheni',
            phone: '+37378047860',
            termsCheck: true,
            newsLetterCheck: false,
            country: null,
            countries: this.props.countries,
            showPass: false,
            showConfirmPass: false
        };
        this.state = {...this.state, ...props};
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (!CollectionUtils.isNullOrEmpty(nextProps.countries)) {
            this.setState({...this.state, countries: nextProps.countries})
        }
    }

    showDateTimerPicker() {
        this.setState({...this.state, showDatePicker: true});
    }

    handleDatePicked(time) {
        this.setState({...this.state, showDatePicker: false, dateOfBirth: moment(time).format('YYYY-MM-DD')});
    };

    hideDateTimePicker() {
        this.setState({...this.state, showDatePicker: false});
    };

    register = (e) => {
        let areFieldsValid = this.form.validate(this.inputs);
        if (areFieldsValid) {
            let user = new User(this.state.firstName, this.state.lastName, this.state.email,
                this.state.password, this.state.dateOfBirth, this.state.salonName,
                this.state.city, this.state.country, this.state.phone,
                this.state.termsCheck, this.state.newsLetterCheck);
            this.props.registerCallback(user);
        }
    };

    changeCountryCallback = (selectedCountry) => {
        this.setState({...this.state, country: selectedCountry});
    };

    checkTermsCallback = () => {
        this.setState({...this.state, termsCheck: !this.state.termsCheck})
    };

    checkNewsLetterCallback = () => {
        this.setState({...this.state, newsLetterCheck: !this.state.newsLetterCheck})
    };

    showPass(showPass) {
        this.setState({...this.state, showPass: !showPass});
    };

    showConfirmPass(showConfirmPass) {
        this.setState({...this.state, showConfirmPass: !showConfirmPass});
    };

    render() {
        const {
            firstName, lastName, email, emailConfirm,
            password, passwordCheck, language, showLoading,
            showDatePicker, dateOfBirth, salonName, city,
            phone, termsCheck, newsLetterCheck, country,
            showPass, showConfirmPass, showNetworkError,
            dismissDialogCallback
        } = this.state;
        const {countries, actionBack, actionInfo} = this.state;

        return (
            <View>
                <Header
                    outerContainerStyles={styles.headerContainer}
                    backgroundColor='white'
                    placement="left"
                    leftComponent={{icon: 'arrow-back', color: GRAY_COLOR, onPress: () => actionBack()}}
                    centerComponent={
                        <View style={styles.headerTitle}>
                            <Text style={styles.titleBold}>TELL US </Text><Text style={styles.title}>
                            ABOUT YOU</Text>
                        </View>
                    }
                    rightComponent={{icon: 'info', color: GRAY_COLOR, onPress: () => actionInfo()}}/>
                <ScrollView style={{backgroundColor: 'white'}}>
                    <View style={styles.inputsContainer}>
                        <Form
                            shouldValidate={true}
                            ref={item => this.form = item}>
                            <TextInput
                                onChangeText={firstName => this.setState({...this.state, firstName: firstName})}
                                value={firstName}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="FIRST NAME*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                blurOnSubmit={true}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                ref={item => this.inputs[0] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <TextInput
                                onChangeText={lastName => this.setState({...this.state, lastName: lastName})}
                                value={lastName}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="LAST NAME*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                blurOnSubmit={true}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                ref={item => this.inputs[1] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <View style={{height: 20}}/>
                            <TextInput
                                onChangeText={email => this.setState({...this.state, email: email})}
                                value={email}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="EMAIL ADDRESS*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                ref={item => this.inputs[2] = item}
                                validation={[
                                    {name: EMAIL, error: 'It is not a valid email'},
                                    {name: REQUIRED, error: 'Required'}
                                ]}
                            />
                            <TextInput
                                onChangeText={emailConfirm => this.setState({
                                    ...this.state,
                                    emailConfirm: emailConfirm
                                })}
                                value={emailConfirm}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="EMAIL CONFIRMATION*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                confirmationValue={email}
                                ref={item => this.inputs[3] = item}
                                validation={[
                                    {name: CONFIRMATION, error: 'Emails are not same'},
                                    {name: REQUIRED, error: 'Required'},
                                ]}
                            />
                            <TouchOpacityDebounce onPress={() => {
                                this.showDateTimerPicker()
                            }}>
                                <TextInput
                                    editable={false}
                                    value={dateOfBirth}
                                    pointerEvents="none"
                                    inputStyle={styles.input}
                                    keyboardAppearance="light"
                                    placeholder="DATE OF BIRTH*"
                                    autoFocus={false}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    disabled={true}
                                    blurOnSubmit={false}
                                    placeholderTextColor={GRAY_COLOR}
                                    containerStyle={styles.inputContainer}
                                    ref={item => this.inputs[4] = item}
                                    validation={[{name: REQUIRED, error: 'Required'}]}
                                />
                            </TouchOpacityDebounce>
                            <TextInput
                                onChangeText={password => this.setState({...this.state, password: password})}
                                value={password}
                                inputStyle={styles.input}
                                secureTextEntry={!showPass}
                                rightIcon={ <Icon name={!showPass ? 'ios-eye-off': 'ios-eye'} type='ionicon'
                                                  color={GRAY_COLOR}
                                                  onPress={e => this.showPass(showPass)}/>}
                                keyboardAppearance="light"
                                placeholder="PASSWORD*"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="default"
                                returnKeyType="next"
                                blurOnSubmit={true}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                errorStyle={{color: 'red'}}
                                ref={item => this.inputs[5] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <TextInput
                                onChangeText={passwordCheck => this.setState({
                                    ...this.state,
                                    passwordCheck: passwordCheck
                                })}
                                value={passwordCheck}
                                inputStyle={styles.input}
                                secureTextEntry={!showConfirmPass}
                                rightIcon={ <Icon name={!showConfirmPass ? 'ios-eye-off' : 'ios-eye'} type='ionicon'
                                                  color={GRAY_COLOR}
                                                  onPress={e => this.showConfirmPass(showConfirmPass)}/>}
                                keyboardAppearance="light"
                                placeholder="PASSWORD CONFIRMATION*"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="default"
                                returnKeyType="next"
                                blurOnSubmit={true}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                errorStyle={{color: 'red'}}
                                ref={item => this.inputs[6] = item}
                                confirmationValue={password}
                                validation={[
                                    {name: CONFIRMATION, error: 'Passwords are not same'},
                                    {name: REQUIRED, error: 'Required'}
                                ]}
                            />
                            <TextInput
                                onChangeText={salonName => this.setState({...this.state, salonName: salonName})}
                                value={salonName}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="SALON NAME*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                ref={item => this.inputs[7] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <TextInput
                                onChangeText={city => this.setState({...this.state, city: city})}
                                value={city}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="CITY*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={false}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                ref={item => this.inputs[8] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <PickerInput
                                items={countries}
                                valueChangeCallBack={this.changeCountryCallback}
                                defaultItem={{label: "COUNTRY*", value: ""}}
                                needValidation={true}
                                ref={item => this.inputs[9] = item}
                            />
                            <TextInput
                                onChangeText={phone => this.setState({...this.state, phone: phone})}
                                value={phone}
                                inputStyle={styles.input}
                                keyboardAppearance="light"
                                placeholder="WELLA CUSTOMER NUMBER*"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                blurOnSubmit={true}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.inputContainer}
                                ref={item => this.inputs[10] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <View style={styles.checkboxItem}>
                                <Text style={styles.textValidator}>Accept terms *</Text>
                                <CheckboxInput checkedColor={PRIMARY}
                                               checked={termsCheck}
                                               needValidation={true}
                                               ref={item => this.inputs[11] = item}
                                               onPress={() => this.checkTermsCallback()}/>
                            </View>
                            <View style={styles.checkboxItem}>
                                <Text>Sign to newsletter</Text>
                                <CheckBox
                                    checkedColor={PRIMARY}
                                    checked={newsLetterCheck}
                                    onPress={() => this.checkNewsLetterCallback()}/>
                            </View>
                            <Button
                                large
                                title='SIGN UP'
                                activeOpacity={1}
                                underlayColor="transparent"
                                onPress={(e) => this.register(e)}
                                loading={showLoading}
                                loadingProps={{size: 'small', color: 'white'}}
                                buttonStyle={styles.signButton}
                                titleStyle={styles.signTitle}
                                containerStyle={styles.signContainer}
                            />
                            <Text style={styles.terms}>
                                Please note, we use approved digital cookies, in these terms emais let us know you've
                                received cookies to make sure we're giving you news and information that interests you.
                            </Text>
                            <TouchOpacityDebounce>
                                <Text style={styles.link}>Find out more about cookies.</Text>
                            </TouchOpacityDebounce>
                            <TouchOpacityDebounce>
                                <Text style={styles.link}>By clicking above you accept T&C.</Text>
                            </TouchOpacityDebounce>
                        </Form>
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
        alignItems: 'center'
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
        fontSize: 15
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
