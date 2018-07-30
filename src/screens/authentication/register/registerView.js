import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from 'src/views/form/formData';
import CheckboxInput from 'src/views/form/pool/checkGroup/checkboxInput';
import CollectionUtils from 'src/utils/collectionUtils';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {LIGHT_COLOR, PRIMARY} from 'src/utils/colors';
import {View, StyleSheet, Dimensions} from 'react-native';
import TouchOpacityDebounce from 'src/utils/touchable_debounce/touchOpacityDebounce';
import PickerInput from 'src/views/form/pickerInput';
import {Button, Label, CheckBox, Text, Icon, Toast} from 'native-base';
import FormItem from 'src/views/native_elements/formItem';
import Space from 'src/views/native_elements/space';
import SubmitButton from 'src/views/native_elements/submitButton';
import ContentFlex from 'src/views/native_elements/contentFlex';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import BackMenu from 'src/views/menu/backMenu';
import MainStyle from 'src/utils/mainStyle';
const SCREEN_WIDTH = Dimensions.get('window').width;
import {validationRequired, validationEmail, validationEmailConfirm, validationPassConfirm, validationStrongPass} from 'src/utils/validation';

export default class RegisterView extends Component {

    formInputs = [];


    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        if (!CollectionUtils.isNullOrEmpty(nextProps.countries)) {
            this.setState({countries: nextProps.countries})
        }
    }

    register = (user, registerCallback) => {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            registerCallback(user);
        }
    };

    showError = (message) => {
        Toast.show({
            text: message,
            buttonText: 'OK'
        });
    };

    render() {
        const {user, showDatePicker, countries, actionFindAboutCookie,
            actionFindAboutPrivacy, actionShowDatePicker,
            actionHandleDatePicked, actionHideDateTimePicker, actionChangeUser,
            actionRegisterUser, showNetworkError, showLoading, actionInfo
        } = this.props;


        return (
            <ContainerFlex>
                <BackMenu title={'<p><b>TELL US </b>ABOUT YOURSELF</p>'} actions={
                    <Button transparent onPress={() => actionInfo()}>
                        <Icon name='ios-help' style={MainStyle.saveButton}/>
                    </Button>
                }/>
                <ContentFlex scrollable>
                    <View style={styles.inputsContainer}>
                        <Form shouldValidate ref='formData'>
                            <FormItem
                                ref={item => this.formInputs[0] = item}
                                validation={[validationRequired]}
                                value={user.firstName}
                                onSubmitEditing={() => this.formInputs[1].focus()}
                                onChangeText={item => actionChangeUser('firstName', item)}>
                                <Label>FIRST NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[1] = item}
                                validation={[validationRequired]}
                                value={user.lastName}
                                onSubmitEditing={() => this.formInputs[2].focus()}
                                onChangeText={item => actionChangeUser('lastName', item)}>
                                <Label>LAST NAME*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[2] = item}
                                validation={[validationRequired, validationEmail]}
                                value={user.email}
                                onSubmitEditing={() => this.formInputs[3].focus()}
                                onChangeText={item => {actionChangeUser('email', item);}}>
                                <Label>EMAIL ADDRESS*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[3] = item}
                                validation={[validationRequired, validationEmailConfirm]}
                                confirmationValue={user.email}
                                value={user.emailConfirm}
                                onSubmitEditing={() => this.formInputs[4].focus()}
                                onChangeText={item => {actionChangeUser('emailConfirm', item);}}>
                                <Label>EMAIL CONFIRMATION*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[4] = item}
                                validation={[validationRequired]}
                                onFocus={() => actionShowDatePicker()}
                                onSubmitEditing={() => this.formInputs[5].focus()}
                                value={user.birthday}>
                                <Label>DATE OF BIRTH*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[5] = item}
                                validation={[validationRequired, validationStrongPass]}
                                value={user.pass} password
                                onSubmitEditing={() => this.formInputs[6].focus()}
                                onChangeText={item => {actionChangeUser('pass', item);}}>
                                <Label>PASSWORD*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[6] = item}
                                confirmationValue={user.pass}
                                value={user.passConfirm} password
                                onSubmitEditing={() => this.formInputs[7].focus()}
                                validation={[validationRequired, validationStrongPass, validationPassConfirm]}
                                onChangeText={item => actionChangeUser('passConfirm', item)}>
                                <Label>PASSWORD CONFIRMATION*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[7] = item}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[8].focus()}
                                value={user.salonName}
                                onChangeText={item => actionChangeUser('salonName', item)}>
                                <Label>SALON NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[8] = item}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[9].focus()}
                                value={user.phone}
                                onChangeText={item => actionChangeUser('phone', item)}>
                                <Label>PHONE NUMBER*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[9] = item}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[10].focus()}
                                value={user.postalCode}
                                onChangeText={item => actionChangeUser('postalCode', item)}>
                                <Label>POSTAL CODE*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[10] = item}
                                value={user.city}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[11].focus()}
                                onChangeText={item => actionChangeUser('city', item)}>
                                <Label>CITY*</Label>
                            </FormItem>
                            <PickerInput
                                label="COUNTRY*"
                                items={countries}
                                valueChangeCallBack={item => actionChangeUser('country', item)}
                                defaultItem={{label: 'COUNTRY*', value: ''}}
                                needValidation value={user.country}
                                ref={item => this.formInputs[11] = item}
                                onSubmitEditing={() => this.formInputs[12].focus()}
                                validation={[validationRequired]}
                            />
                            <FormItem
                                ref={item => this.formInputs[12] = item}
                                value={user.wellaNumber} isLast
                                validation={[validationRequired]}
                                onChangeText={item => actionChangeUser('wellaNumber', item)}>
                                <Label>WELLA CUSTOMER NUMBER*</Label>
                            </FormItem>
                            <Space height={25}/>
                            <View style={styles.checkboxItem}>
                                <Text style={styles.textValidator}>Accept terms *</Text>
                                <CheckboxInput checkedColor={PRIMARY}
                                               checked={user.acceptTerms} needValidation
                                               ref={item => this.formInputs[13] = item}
                                               validation={[validationRequired]}
                                               onPress={() => actionChangeUser('acceptTerms', !user.acceptTerms)}/>
                            </View>
                            <Space height={16}/>
                            <View style={styles.checkboxItem}>
                                <Text>Sign to newsletter</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={user.newsLetter}
                                    onPress={() => actionChangeUser('newsLetter', !user.newsLetter)}/>
                            </View>
                            <Space height={25}/>

                            <SubmitButton text='SIGN UP' showLoading={showLoading} onPress={() => this.register(user, actionRegisterUser)}/>
                            <Text style={styles.terms}>
                                Please note, we use approved digital cookies, in these terms emails let us know you've
                                received cookies to make sure we're giving you news and information that interests you.
                            </Text>
                            <TouchOpacityDebounce onPress={() => actionFindAboutCookie()}>
                                <Text style={styles.link}>Find out more about cookies.</Text>
                            </TouchOpacityDebounce>
                            <TouchOpacityDebounce onPress={() => actionFindAboutPrivacy()}>
                                <Text style={styles.link}>By clicking above you accept T&C.</Text>
                            </TouchOpacityDebounce>
                        </Form>
                    </View>
                </ContentFlex>
                <DateTimePicker
                    isVisible={showDatePicker}
                    onConfirm={(e) => actionHandleDatePicked(e)}
                    onCancel={(e) => actionHideDateTimePicker(e)}
                />
            </ContainerFlex>
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
    actionChangeUser: PropTypes.func,
    actionInfo: PropTypes.func,
    actionShowDatePicker: PropTypes.func,
    actionFindAboutPrivacy: PropTypes.func,
    actionFindAboutCookie: PropTypes.func,
    showDatePicker: PropTypes.bool,
    actionHandleDatePicked: PropTypes.func,
    actionHideDateTimePicker: PropTypes.func,
    user: PropTypes.object,
    actionRegisterUser: PropTypes.func
};
