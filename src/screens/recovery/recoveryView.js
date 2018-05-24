import React, {Component} from 'react';
import {Button, Header, Icon} from "react-native-elements";
import {FlatList, Text, View, StyleSheet, Dimensions, Platform} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import TextInput, {EMAIL, REQUIRED, STRONG_PASS} from "../../views/form/TextInput";
import Form from "../../views/form/Form";
import Toast from "react-native-easy-toast";

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class RecoveryView extends Component {

    inputs = [];

    constructor(props) {
        super(props);
        this.state = {
            showPass:false,
            email: '',
            password: '',
            ...props
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    reset = (email, password, form, inputs, resetCallback) => {
      let passValidation = form.validate(inputs);
      if (passValidation) {
          resetCallback(email, password);
      }
    };

    showPass(showPass) {
        this.setState({...this.state, showPass: !showPass});
    };

    showToast(message) {
        this.refs.errorToast.show(message);
    }

    render() {
        const {email, password, actionResetCallback, actionInfoCallback,
               actionBackCallback, showLoading, showPass} = this.state;
        return (
            <View style={{flex:1, backgroundColor: 'white'}}>
                <Header
                    outerContainerStyles={styles.headerContainer}
                    backgroundColor='white'
                    placement="left"
                    leftComponent={{icon: 'arrow-back', color: GRAY_COLOR, onPress: () => actionBackCallback()}}
                    centerComponent={
                        <View style={styles.headerTitle}>
                            <Text style={styles.titleBold}>RECOVERY </Text><Text style={styles.title}>
                            PASS</Text>
                        </View>
                    }
                    rightComponent={{icon: 'info', color: GRAY_COLOR, onPress: () => actionInfoCallback()}}/>
                <View style={styles.inputsContainer}>
                    <Form shouldValidate={true}
                          ref={item => this.form = item}>
                        <Text style={{paddingTop: 20}}>Enter your email and choose a new password.</Text>
                        <Text style={{paddingBottom: 20}}>You will receive a PIN via email. Enter the pin to reset the password.</Text>
                        <TextInput
                            onChangeText={email => this.setState({...this.state, email: email})}
                            value={email}
                            inputStyle={styles.input}
                            keyboardAppearance="light"
                            placeholder="Email"
                            autoFocus={false}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            blurOnSubmit={true}
                            placeholderTextColor={GRAY_COLOR}
                            containerStyle={styles.inputContainer}
                            ref={item => this.inputs[0] = item}
                            validation={[{name: EMAIL, error: 'It is not a valid email'},
                                        {name: REQUIRED, error: 'Required'}]}
                        />

                        <TextInput
                            onChangeText={password => this.setState({...this.state, password: password})}
                            value={password}
                            secureTextEntry={!showPass}
                            rightIcon={ <Icon name={!showPass ? 'ios-eye-off' : 'ios-eye'} type='ionicon'
                                              color={GRAY_COLOR}
                                              onPress={e => this.showPass(showPass)}/>}
                            inputStyle={styles.input}
                            keyboardAppearance="light"
                            placeholder="New Password"
                            autoFocus={false}
                            autoCapitalize="none"
                            autoCorrect={false}
                            returnKeyType="next"
                            blurOnSubmit={true}
                            placeholderTextColor={GRAY_COLOR}
                            containerStyle={styles.inputContainer}
                            ref={item => this.inputs[1] = item}
                            validation={[{name: STRONG_PASS, error: 'Password must contain at least one upper, one lower and a number'},
                                         {name: REQUIRED, error: 'Required'}]}
                        />

                        <Button
                            large
                            title='RESET PASSWORD'
                            activeOpacity={1}
                            underlayColor="transparent"
                            onPress={(e) => this.reset(email, password, this.form, this.inputs, actionResetCallback)}
                            loading={showLoading}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={styles.buttonTitleStyle}
                            containerStyle={styles.buttonContainer}
                        />
                    </Form>
                </View>
                <Toast ref="errorToast"/>
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
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    input: {
        color: 'black',
        fontSize: 18
    },
    inputContainer: {
        marginTop: 30,
        width: 'auto'
    },
    buttonStyle: {
        backgroundColor: PRIMARY,
        borderWidth: 2,
        borderColor: 'white',
        padding: 4,
        height: 50
    },
    buttonContainer: {
        width: 'auto',
        marginTop: 20
    },
    buttonTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});


RecoveryView.propTypes = {
    actionResetCallback: PropTypes.func,
    actionInfoCallback: PropTypes.func,
    actionBackCallback: PropTypes.func,
    showLoading: PropTypes.bool
};
