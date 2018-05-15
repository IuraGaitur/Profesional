import React, {Component} from 'react';
import {Button, Header, Icon, Input, CheckBox} from "react-native-elements";
import {FlatList, Text, View, StyleSheet, Dimensions, ScrollView, Platform} from "react-native";
import PropTypes from 'prop-types';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import TouchOpacityDebounce from "../../utils/touchable_debounce/TouchOpacityDebounce";
import CollectionUtils from './../../utils/CollectionUtils';
import ValidationUtil from "../../utils/ValidationUtil";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

const FIRST_NAME = 'first_name';
const LAST_NAME = 'last_name';
const EMAIL = 'email';
const EMAIL_CONFIRM = 'email_confirm';
const DATE = 'date';
const PASS = 'pass';
const PASS_CONFIRM = 'pass_confirm';
const SALON = 'salon';
const CITY = 'city';
const COUNTRY = 'country';
const PHONE = 'phone';
const TERMS = 'terms';

export default class RegisterView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: null,
            lastName: null,
            email: null,
            emailConfirm: null,
            password: null,
            passwordCheck: null,
            emailError: null,
            passError: null,
            isSecure: true,
            language: 'Java',
            showLoading: false,
            checked: true,
            showDatePicker: false,
            dateOfBirth: null,
            salonName: null,
            city: null,
            phone: null,
            termsCheck: false,
            newsLetterCheck: false,
            countries: this.props.countries,
            inputs: [],
            errors: []

        };
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
        this.setState({...this.state, showDatePicker: false, email: time});
    };

    hideDateTimePicker() {
        this.setState({...this.state, showDatePicker: false});
    };

    register = (e, callback) => {
        let validators = [this.validateFirstName, this.validateLastName,
                          this.validateDateBirth,
                          this.validateEmail, this.validateEmailConfirm,
                          this.validatePass, this.validatePassConfirm,
                          this.validateSalonName, this.validateCity,
                          this.validateCountry, this.validatePhone, this.validateTerms];
        let validResults = [];
        for (let item in validators) {
            let inputValidator = validators[item](this.state);
            validResults.push(inputValidator);
        }

        if(validResults.indexOf(true) < 0) {
            callback(e);
        }
    };

    validateFirstName = (state) => {
        return this.requireValidation(state.firstName, FIRST_NAME);
    };

    validateLastName = (state) => {
        return this.requireValidation(state.lastName, LAST_NAME);
    };

    validateEmail = (state) => {
        let requireValidation = this.requireValidation(state.email, EMAIL);
        if (!requireValidation) return requireValidation;
        let emailValidation = ValidationUtil.validateEmail(state.email);
        return emailValidation && requireValidation;

    };

    validateEmailConfirm = (state) => {
        let confirmValidation = this.confirmValidation(state.email, state.emailConfirm, EMAIL_CONFIRM, "Emails");
        let requireValidation = this.requireValidation(state.emailConfirm, EMAIL_CONFIRM);
        return requireValidation && confirmValidation;
    };

    validateDateBirth = (state) => {
        return this.requireValidation(state.birthday, DATE);
    };

    validatePass = (state) => {
        let requireValidation = this.requireValidation(state.password, PASS);
        if (!requireValidation) return requireValidation;
        let passValidation = ValidationUtil.validateStrongPassword(state.password);
        return passValidation && requireValidation;
    };

    validatePassConfirm = (state) => {
        let confirmValidation = this.confirmValidation(state.password, state.passwordCheck, PASS_CONFIRM, "Passwords");
        let requireValidation =  this.requireValidation(state.passwordCheck, PASS_CONFIRM);
        return requireValidation && confirmValidation;
    };

    validateSalonName = (state) => {
        return this.requireValidation(state.salonName, SALON);
    };

    validateCity = (state) => {
        return this.requireValidation(state.city, CITY);
    };

    validateCountry = (state) => {
        return this.requireValidation(state.country, COUNTRY);
    };

    validatePhone = (state) => {
        return this.requireValidation(state.phone, PHONE);
    };

    validateTerms = () => {
        let errors = this.state.errors;
        let isValid = false;
        if (this.state.termsCheck) {
            isValid = true;
        }

        errors[TERMS] = isValid;
        this.setState({...this.state, errors: errors});
        return isValid;
    };

    requireValidation = (field, fieldName) => {
        let errors = this.state.errors;
        let isValid = false;
        if (field) {
            isValid = true;
        }

        errors[fieldName] = isValid ? null : 'Required';
        this.setState({...this.state, errors: errors});
        return isValid;
    };

    confirmValidation = (field1, field2, fieldName, title) => {
        let errors = this.state.errors;
        let isValid = false;
        if (field1 == field2) {
            isValid = true;
        }

        errors[fieldName] = isValid ? null : title + 'doesn\'t match';
        this.setState({...this.state, errors: errors});
        return isValid;
    }

    getPicker(countries) {
        if (!CollectionUtils.isNullOrEmpty(countries)) {
            return <RNPickerSelect
                hideIcon={true}
                placeholder={{label: 'COUNTRY*', value: ""}}
                items={countries}
                style={{inputIOS: styles.inputIOS, placeholderColor: GRAY_COLOR}}
                onValueChange={e => {
                }}/>
        }
        return <View />
    }

    render() {
        const {
            firstName, lastName, email, emailConfirm,
            password, passwordCheck, emailError,
            passError, isSecure, language, showLoading,
            showDatePicker, dateOfBirth, salonName, city,
            phone, termsCheck, newsLetterCheck, inputs, errors
        } = this.state;
        const {countries, actionBack, actionInfo} = this.state;
        const {registerCallback} = this.props;
        let selectPicker = this.getPicker(countries);

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

                <ScrollView >
                    <View style={styles.inputsContainer}>
                        <Input
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
                            ref={item => inputs[FIRST_NAME] = item}
                            errorMessage={errors[FIRST_NAME]}
                        />

                        <Input
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
                            ref={item => inputs[LAST_NAME] = item}
                            errorMessage={errors[LAST_NAME]}
                        />

                        <View style={{height: 20}}/>

                        <Input
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
                            ref={item => inputs[EMAIL] = item}
                            errorMessage={errors[EMAIL]}
                        />

                        <Input
                            onChangeText={emailConfirm => this.setState({...this.state, emailConfirm: emailConfirm})}
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
                            ref={item => inputs[EMAIL_CONFIRM] = item}
                            errorMessage={errors[EMAIL_CONFIRM]}
                        />
                        <TouchOpacityDebounce onPress={() => {
                            this.showDateTimerPicker()
                        }}>
                            <Input
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
                                ref={item => inputs[DATE] = item}
                                errorMessage={errors[DATE]}
                            />
                        </TouchOpacityDebounce>

                        <Input
                            onChangeText={password => this.setState({...this.state, password: password})}
                            value={password}
                            inputStyle={styles.input}
                            secureTextEntry={isSecure}
                            rightIcon={ <Icon name={isSecure ? 'ios-eye' : 'ios-eye-off'} type='ionicon'
                                              color={GRAY_COLOR}
                                              onPress={e => showPassCallback(isSecure)}/>}
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
                            ref={item => inputs[PASS] = item}
                            errorMessage={errors[PASS]}
                        />
                        <Input
                            onChangeText={passwordCheck => this.setState({...this.state, passwordCheck: passwordCheck})}
                            value={passwordCheck}
                            inputStyle={styles.input}
                            secureTextEntry={isSecure}
                            rightIcon={ <Icon name={isSecure ? 'ios-eye' : 'ios-eye-off'} type='ionicon'
                                              color={GRAY_COLOR}
                                              onPress={e => showPassCallback(isSecure)}/>}
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
                            ref={item => inputs[PASS_CONFIRM] = item}
                            errorMessage={errors[PASS_CONFIRM]}
                        />


                        <Input
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
                            ref={item => inputs[SALON] = item}
                            errorMessage={errors[SALON]}
                        />
                        <Input
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
                            ref={item => inputs[CITY] = item}
                            errorMessage={errors[CITY]}
                        />
                        <View style={styles.selectElement}>
                            {selectPicker}
                            <View style={styles.line}/>
                        </View>
                        <Input
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
                            ref={item => inputs[PHONE] = item}
                            errorMessage={errors[PHONE]}
                        />
                        <View style={styles.checkboxItem}>
                            <Text>Accept terms *</Text>
                            <CheckBox
                                checkedColor={PRIMARY}
                                checked={termsCheck}
                                onPress={() => this.setState({...this.state, termsCheck: !this.state.termsCheck})}/>
                        </View>
                        <View style={styles.checkboxItem}>
                            <Text>Sign to newsletter</Text>
                            <CheckBox
                                checkedColor={PRIMARY}
                                checked={newsLetterCheck}
                                onPress={() => this.setState({
                                    ...this.state,
                                    newsLetterCheck: !this.state.newsLetterCheck
                                })}/>
                        </View>
                        <Button
                            large
                            title='SIGN UP'
                            activeOpacity={1}
                            underlayColor="transparent"
                            onPress={(e) => this.register(e, registerCallback)}
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

                    </View>
                </ScrollView>
                <DateTimePicker
                    isVisible={showDatePicker}
                    onConfirm={(e) => this.handleDatePicked(e)}
                    onCancel={(e) => this.hideDateTimePicker(e)}
                />
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
        paddingBottom: 70
    },
    signButton: {
        backgroundColor: PRIMARY,
        borderWidth: 2,
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
        width: SCREEN_WIDTH - 60,
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
    selectElement: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        width: SCREEN_WIDTH - 40
    },
    inputIOS: {
        fontSize: 16,
        paddingHorizontal: 8
    },
    link: {
        flex: 1,
        textAlign: 'center',
        color: PRIMARY,
        textDecorationLine: 'underline',
        marginTop: 12,
        borderBottomColor: PRIMARY
    },
    line: {
        flex: 1,
        height: 1,
        marginTop: 8,
        backgroundColor: GRAY_COLOR,
    },
    inputContainer: {
        marginTop: 30,
        width: SCREEN_WIDTH - 40
    },
    input: {
        color: 'black',
        fontSize: 15
    },
});

RegisterView.defaultProps = {};


RegisterView.propTypes = {
    registerCallback: PropTypes.func,
    countries: PropTypes.array,
    actionBack: PropTypes.func,
    actionInfo: PropTypes.func
};
