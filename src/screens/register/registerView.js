import moment from 'moment';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from "../../views/form/Form";
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
import {Body, Left, Right, Title, Button, Header, Label, CheckBox, Text, Container, Grid, Content} from "native-base";
import FormItem from './../../views/native_elements/FormItem';
import { Col, Row } from 'react-native-easy-grid';
import Space from "../../views/native_elements/Space";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class RegisterView extends Component {

    inputs = [];

    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            emailConfirm: '',
            password: '',
            passwordCheck: '',
            isSecure: true,
            language: null,
            showLoading: false,
            checked: true,
            showDatePicker: false,
            dateOfBirth: '',
            salonName: '',
            city: '',
            phone: '',
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
            password, passwordCheck, language,
            showDatePicker, dateOfBirth, salonName, city,
            phone, termsCheck, newsLetterCheck, country,
            showPass, showConfirmPass, dismissDialogCallback
        } = this.state;
        const {showLoading, showNetworkError} = this.props;
        const {countries, actionBack, actionInfo} = this.state;

        return (
            <Container>
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
                <Content>
                <ScrollView style={{backgroundColor: 'white'}}>
                    <View style={styles.inputsContainer}>
                        <Form
                            shouldValidate={true}
                            ref={item => this.form = item}>

                            <FormItem>
                                <Label>FIRST NAME*</Label>
                            </FormItem>
                            <FormItem>
                                <Label>LAST NAME*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem>
                                <Label>EMAIL ADDRESS*</Label>
                            </FormItem>
                            <FormItem>
                                <Label>EMAIL CONFIRMATION*</Label>
                            </FormItem>
                            <FormItem>
                                <Label>DATE OF BIRTH*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem password={true}>
                                <Label>PASSWORD*</Label>
                            </FormItem>
                            <FormItem password={true}>
                                <Label>PASSWORD CONFIRMATION*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem>
                                <Label>SALON NAME*</Label>
                            </FormItem>
                            <FormItem>
                                <Label>CITY*</Label>
                            </FormItem>
                            <FormItem>
                                <Label>COUNTRY*</Label>
                            </FormItem>
                            <FormItem>
                                <Label>WELLA CUSTOMER NUMBER*</Label>
                            </FormItem>
                            <Space height={25}/>

                            {/*<TextInput*/}
                                {/*onChangeText={firstName => this.setState({...this.state, firstName: firstName})}*/}
                                {/*value={firstName}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="FIRST NAME*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={true}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*ref={item => this.inputs[0] = item}*/}
                                {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                            {/*/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={lastName => this.setState({...this.state, lastName: lastName})}*/}
                                {/*value={lastName}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="LAST NAME*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={true}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*ref={item => this.inputs[1] = item}*/}
                                {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                            {/*/>*/}
                            {/*<View style={{height: 20}}/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={email => this.setState({...this.state, email: email})}*/}
                                {/*value={email}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="EMAIL ADDRESS*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="email-address"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={false}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*ref={item => this.inputs[2] = item}*/}
                                {/*validation={[*/}
                                    {/*{name: EMAIL, error: 'It is not a valid email'},*/}
                                    {/*{name: REQUIRED, error: 'Required'}*/}
                                {/*]}*/}
                            {/*/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={emailConfirm => this.setState({*/}
                                    {/*...this.state,*/}
                                    {/*emailConfirm: emailConfirm*/}
                                {/*})}*/}
                                {/*value={emailConfirm}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="EMAIL CONFIRMATION*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="email-address"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={false}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*confirmationValue={email}*/}
                                {/*ref={item => this.inputs[3] = item}*/}
                                {/*validation={[*/}
                                    {/*{name: CONFIRMATION, error: 'Emails are not same'},*/}
                                    {/*{name: REQUIRED, error: 'Required'},*/}
                                {/*]}*/}
                            {/*/>*/}
                            {/*<TouchOpacityDebounce onPress={() => {*/}
                                {/*this.showDateTimerPicker()*/}
                            {/*}}>*/}
                                {/*<TextInput*/}
                                    {/*editable={false}*/}
                                    {/*value={dateOfBirth}*/}
                                    {/*pointerEvents="none"*/}
                                    {/*inputStyle={styles.input}*/}
                                    {/*keyboardAppearance="light"*/}
                                    {/*placeholder="DATE OF BIRTH*"*/}
                                    {/*autoFocus={false}*/}
                                    {/*autoCapitalize="none"*/}
                                    {/*autoCorrect={false}*/}
                                    {/*keyboardType="email-address"*/}
                                    {/*returnKeyType="next"*/}
                                    {/*disabled={true}*/}
                                    {/*blurOnSubmit={false}*/}
                                    {/*placeholderTextColor={GRAY_COLOR}*/}
                                    {/*containerStyle={styles.inputContainer}*/}
                                    {/*ref={item => this.inputs[4] = item}*/}
                                    {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                                {/*/>*/}
                            {/*</TouchOpacityDebounce>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={password => this.setState({...this.state, password: password})}*/}
                                {/*value={password}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*secureTextEntry={!showPass}*/}
                                {/*rightIcon={ <Icon name={!showPass ? 'ios-eye-off': 'ios-eye'} type='ionicon'*/}
                                                  {/*color={GRAY_COLOR}*/}
                                                  {/*onPress={e => this.showPass(showPass)}/>}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="PASSWORD*"*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="default"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={true}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*errorStyle={{color: 'red'}}*/}
                                {/*ref={item => this.inputs[5] = item}*/}
                                {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                            {/*/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={passwordCheck => this.setState({*/}
                                    {/*...this.state,*/}
                                    {/*passwordCheck: passwordCheck*/}
                                {/*})}*/}
                                {/*value={passwordCheck}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*secureTextEntry={!showConfirmPass}*/}
                                {/*rightIcon={ <Icon name={!showConfirmPass ? 'ios-eye-off' : 'ios-eye'} type='ionicon'*/}
                                                  {/*color={GRAY_COLOR}*/}
                                                  {/*onPress={e => this.showConfirmPass(showConfirmPass)}/>}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="PASSWORD CONFIRMATION*"*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="default"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={true}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*errorStyle={{color: 'red'}}*/}
                                {/*ref={item => this.inputs[6] = item}*/}
                                {/*confirmationValue={password}*/}
                                {/*validation={[*/}
                                    {/*{name: CONFIRMATION, error: 'Passwords are not same'},*/}
                                    {/*{name: REQUIRED, error: 'Required'}*/}
                                {/*]}*/}
                            {/*/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={salonName => this.setState({...this.state, salonName: salonName})}*/}
                                {/*value={salonName}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="SALON NAME*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="email-address"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={false}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*ref={item => this.inputs[7] = item}*/}
                                {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                            {/*/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={city => this.setState({...this.state, city: city})}*/}
                                {/*value={city}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="CITY*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="email-address"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={false}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*ref={item => this.inputs[8] = item}*/}
                                {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                            {/*/>*/}
                            {/*<PickerInput*/}
                                {/*items={countries}*/}
                                {/*valueChangeCallBack={this.changeCountryCallback}*/}
                                {/*defaultItem={{label: "COUNTRY*", value: ""}}*/}
                                {/*needValidation={true}*/}
                                {/*ref={item => this.inputs[9] = item}*/}
                            {/*/>*/}
                            {/*<TextInput*/}
                                {/*onChangeText={phone => this.setState({...this.state, phone: phone})}*/}
                                {/*value={phone}*/}
                                {/*inputStyle={styles.input}*/}
                                {/*keyboardAppearance="light"*/}
                                {/*placeholder="WELLA CUSTOMER NUMBER*"*/}
                                {/*autoFocus={false}*/}
                                {/*autoCapitalize="none"*/}
                                {/*autoCorrect={false}*/}
                                {/*keyboardType="email-address"*/}
                                {/*returnKeyType="next"*/}
                                {/*blurOnSubmit={true}*/}
                                {/*placeholderTextColor={GRAY_COLOR}*/}
                                {/*containerStyle={styles.inputContainer}*/}
                                {/*ref={item => this.inputs[10] = item}*/}
                                {/*validation={[{name: REQUIRED, error: 'Required'}]}*/}
                            {/*/>*/}
                            <View style={styles.checkboxItem}>
                                <Text style={styles.textValidator}>Accept terms *</Text>
                                <CheckboxInput checkedColor={PRIMARY}
                                               checked={termsCheck}
                                               needValidation={true}
                                               ref={item => this.inputs[11] = item}
                                               onPress={() => this.checkTermsCallback()}/>
                            </View>
                            <Space height={16}/>
                            <View style={styles.checkboxItem}>
                                <Text>Sign to newsletter</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    checked={newsLetterCheck}
                                    onPress={() => this.checkNewsLetterCallback()}/>
                            </View>
                            <Space height={25}/>
                            <Button block style={styles.mainButton}
                                    onPress={(e) => this.register(e)}>
                                <Text style={{color: 'white'}}>SIGN UP</Text>
                            </Button>
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
                </Content>
            </Container>
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
    },
    mainButton: {
        backgroundColor: PRIMARY,
        marginTop: 15
    },
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
