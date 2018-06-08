import moment from 'moment';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from "../../views/form/FormData";
import User from "../../data/models/User";
import CollectionUtils from './../../utils/CollectionUtils';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {DARK_OVERLAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR} from '../../utils/Colors';
import TextInput, {CONFIRMATION, EMAIL, REQUIRED} from "../../views/form/TextInput";
import {View, StyleSheet, Dimensions, ScrollView, Platform} from "react-native";
import PickerInput from "../../views/form/PickerInput";
import {Body, Left, Right, Button, Header, Label, CheckBox, Text, Grid} from "native-base";
import FormItem from './../../views/native_elements/FormItem';
import Space from "../../views/native_elements/Space";
import DrawerMenu from "../../views/menu/DrawerMenu";
import ContentFlex from "../../views/native_elements/ContentFlex";
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class ProfileView extends Component {

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
        if (nextProps.primaryUser != null) {
            this.setState({
                firstName: nextProps.primaryUser.firstName,
                lastName: nextProps.primaryUser.lastName,
                birthday: nextProps.primaryUser.birthday,
                salonName: nextProps.primaryUser.salonName,
                city: nextProps.primaryUser.city,
                country: nextProps.primaryUser.country,
                phone: nextProps.primaryUser.phone,
                wellaNumber: nextProps.primaryUser.wellaNumber,
                postalCode: nextProps.primaryUser.postalCode,
                newsLetterCheck: nextProps.primaryUser.newsLetterCheck,

            })
        }
    }

    updateUser = (e) => {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            this.props.updatePrimaryUserCallback(this.user);
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
        const {
            firstName, lastName, birthday, salonName,
            city, country, phone, postalCode, wellaNumber, newsLetterCheck, showDatePicker
        } = this.state;
        const {showLoading, countries, title} = this.props;

        return (
            <DrawerMenu title={title} actions={
                <Button transparent onPress={(user) => this.updateUser(user)}>
                    <Text style={{color: TEXT_COLOR}}>SAVE</Text>
                </Button>}>
                <ContentFlex scrollable>
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
                            <FormItem
                                ref={item => this.formInputs[2] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onFocus={() => {
                                    this.showDateTimerPicker()
                                }}
                                onSubmitEditing={() => this.formInputs[3].focus()}
                                value={birthday}>
                                <Label>DATE OF BIRTH*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[3] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[4].focus()}
                                value={salonName}
                                onChangeText={item => this.updateForm('salonName', item)}>
                                <Label>SALON NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[4] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[5].focus()}
                                value={phone}
                                onChangeText={item => this.updateForm('phone', item)}>
                                <Label>PHONE NUMBER*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[5] = item}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[6].focus()}
                                value={postalCode}
                                onChangeText={item => this.updateForm('postalCode', item)}>
                                <Label>POSTAL CODE*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[6] = item}
                                value={city}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onSubmitEditing={() => this.formInputs[7].focus()}
                                onChangeText={item => this.updateForm('city', item)}>
                                <Label>CITY*</Label>
                            </FormItem>
                            <PickerInput
                                items={countries}
                                valueChangeCallBack={this.changeCountryCallback}
                                defaultItem={{label: "COUNTRY*", value: ""}}
                                needValidation value={country}
                                ref={item => this.formInputs[7] = item}
                                onSubmitEditing={() => this.formInputs[8].focus()}
                                validation={[{name: REQUIRED, error: 'Required'}]}
                            />
                            <FormItem
                                ref={item => this.formInputs[8] = item}
                                value={wellaNumber} isLast
                                validation={[{name: REQUIRED, error: 'Required'}]}
                                onChangeText={item => this.updateForm('wellaNumber', item)}>
                                <Label>WELLA CUSTOMER NUMBER*</Label>
                            </FormItem>
                            <Space height={16}/>
                            <View style={styles.checkboxItem}>
                                <Text>Sign to newsletter</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={newsLetterCheck}
                                    onPress={() => this.checkNewsLetterCallback()}/>
                            </View>
                        </Form>
                    </View>
                </ContentFlex>
                <DateTimePicker
                    isVisible={showDatePicker}
                    onConfirm={(e) => this.handleDatePicked(e)}
                    onCancel={(e) => this.hideDateTimePicker(e)}
                />
            </DrawerMenu>
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

ProfileView.defaultProps = {};


ProfileView.propTypes = {
    title: PropTypes.string,
    updatePrimaryUserCallback: PropTypes.func,
    dismissDialogCallback: PropTypes.func,
    showLoading: PropTypes.bool,
    showNetworkError: PropTypes.bool,
    countries: PropTypes.array,
};
