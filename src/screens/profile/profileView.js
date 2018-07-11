import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Form from 'src/views/form/formData';
import DateTimePicker from 'react-native-modal-datetime-picker';
import {LIGHT_COLOR, PRIMARY, TEXT_COLOR} from 'src/utils/colors';
import {View, StyleSheet, Dimensions} from 'react-native';
import PickerInput from 'src/views/form/pickerInput';
import {Button, Label, CheckBox, Text} from 'native-base';
import FormItem from 'src/views/native_elements/formItem';
import Space from 'src/views/native_elements/space';
import DrawerMenu from 'src/views/menu/drawerMenu';
import ContentFlex from 'src/views/native_elements/contentFlex';
import {validationRequired} from 'src/utils/validation';
const SCREEN_WIDTH = Dimensions.get('window').width;


export default class ProfileView extends Component {

    formInputs = [];

    constructor(props) {
        super(props);
    }

    updateUser = (e) => {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            this.props.updatePrimaryUserCallback(this.user);
        }
    };


    render() {
        const {user, showDatePicker, countries, actionShowDatePicker,
            actionHandleDatePicked, actionHideDateTimePicker, actionChangeUser,
            actionSaveUser, showNetworkError, showLoading, title} = this.props;

        return (
            <DrawerMenu title={title} actions={
                <Button transparent onPress={(user) => this.updateUser(user)}>
                    <Text style={{color: TEXT_COLOR}}>SAVE</Text>
                </Button>}>
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
                                validation={[validationRequired]}
                                onFocus={() => actionShowDatePicker()}
                                onSubmitEditing={() => this.formInputs[3].focus()}
                                value={user.birthday}>
                                <Label>DATE OF BIRTH*</Label>
                            </FormItem>
                            <Space height={15}/>
                            <FormItem
                                ref={item => this.formInputs[3] = item}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[4].focus()}
                                value={user.salonName}
                                onChangeText={item => actionChangeUser('salonName', item)}>
                                <Label>SALON NAME*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[4] = item}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[5].focus()}
                                value={user.phone}
                                onChangeText={item => actionChangeUser('phone', item)}>
                                <Label>PHONE NUMBER*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[5] = item}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[6].focus()}
                                value={user.postalCode}
                                onChangeText={item => actionChangeUser('postalCode', item)}>
                                <Label>POSTAL CODE*</Label>
                            </FormItem>
                            <FormItem
                                ref={item => this.formInputs[6] = item}
                                value={user.city}
                                validation={[validationRequired]}
                                onSubmitEditing={() => this.formInputs[7].focus()}
                                onChangeText={item => actionChangeUser('city', item)}>
                                <Label>CITY*</Label>
                            </FormItem>
                            <PickerInput
                                label="COUNTRY*"
                                items={countries}
                                valueChangeCallBack={item => actionChangeUser('country', item)}
                                defaultItem={{label: 'COUNTRY*', value: ''}}
                                needValidation value={user.country}
                                ref={item => this.formInputs[7] = item}
                                onSubmitEditing={() => this.formInputs[8].focus()}
                                validation={[validationRequired]}
                            />
                            <FormItem
                                ref={item => this.formInputs[8] = item}
                                value={user.wellaNumber} isLast
                                validation={[validationRequired]}
                                onChangeText={item => actionChangeUser('wellaNumber', item)}>
                                <Label>WELLA CUSTOMER NUMBER*</Label>
                            </FormItem>
                            <Space height={16}/>
                            <View style={styles.checkboxItem}>
                                <Text>Sign to newsletter</Text>
                                <CheckBox
                                    color={PRIMARY}
                                    style={{marginRight: 8}}
                                    checked={user.newsLetterCheck}
                                    onPress={item => actionChangeUser('firstName', !user.newsLetterCheck)}/>
                            </View>
                        </Form>
                    </View>
                </ContentFlex>
                <DateTimePicker
                    isVisible={showDatePicker}
                    date={new Date(user.birthday)}
                    onConfirm={(e) => actionHandleDatePicked(e)}
                    onCancel={(e) => actionHideDateTimePicker(e)}
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
    actionShowDatePicker: PropTypes.func,
    showDatePicker: PropTypes.bool,
    actionHandleDatePicked: PropTypes.func,
    actionHideDateTimePicker: PropTypes.func,
    user: PropTypes.object,
    actionSaveUser: PropTypes.func
};
