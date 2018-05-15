import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {BACKGROUND_GRAY_COLOR, DARK_OVERLAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import {StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableHighlight, TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import {Input, Button, Icon, Overlay, Card} from 'react-native-elements'
const BG_IMAGE = require('../../../assets/images/img_back_hair.jpg');

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentWillReceiveProps(newProps) {
        this.setState({...this.state, ...newProps});
    }

    render() {
        const {
            email, password, emailError, passError, showLoading, isSecure,
            loginCallback, registerCallback, forgotPassCallback, showPassCallback,
            emailChangeCallback, passChangeCallback, showNetworkError, dismissCallback
        } = this.state;

        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image source={BG_IMAGE} style={styles.bgImage}/>
                    <Icon reverse
                          name='ios-help' type='ionicon'
                          color={PRIMARY} containerStyle={styles.iconHelp}/>
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.titleName}>
                        <Text style={styles.boldTitle}>STYLIST</Text>
                        <Text style={styles.title}>LOGIN</Text>
                    </View>

                    <Input
                        onChangeText={email => emailChangeCallback(email)}
                        value={email}
                        inputStyle={{color: 'black', fontSize: 24}}
                        keyboardAppearance="light"
                        placeholder="Email"
                        autoFocus={false}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        returnKeyType="next"
                        ref={ input => this.emailInput = input }
                        onSubmitEditing={() => {
                            this.setState({emailError: this.validateEmail(email)});
                            this.passwordInput.focus();
                        }}
                        blurOnSubmit={false}
                        placeholderTextColor={GRAY_COLOR}
                        containerStyle={{marginTop: 40}}
                        errorMessage={emailError}
                    />
                    <Input
                        onChangeText={(password) => passChangeCallback(password)}
                        value={password}
                        inputStyle={{color: 'black', fontSize: 24}}
                        secureTextEntry={isSecure}
                        rightIcon={ <Icon name={isSecure ? 'ios-eye' : 'ios-eye-off'} type='ionicon' color={GRAY_COLOR}
                                          onPress={e => showPassCallback(isSecure)}/>}
                        keyboardAppearance="light"
                        placeholder="Password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="default"
                        returnKeyType="done"
                        ref={ input => this.passwordInput = input}
                        blurOnSubmit={true}
                        placeholderTextColor={GRAY_COLOR}
                        containerStyle={{marginTop: 30}}
                        errorStyle={{color: 'red'}}
                        errorMessage={passError}
                    />

                    <Button
                        large
                        title='SIGN IN'
                        activeOpacity={1}
                        underlayColor="transparent"
                        onPress={(e) => loginCallback(e)}
                        loading={showLoading}
                        loadingProps={{size: 'small', color: 'white'}}
                        //disabled={ !emailError && password.length < 3}
                        buttonStyle={{backgroundColor: PRIMARY, borderWidth: 2, borderColor: 'white', padding: 4, height: 50}}
                        titleStyle={{fontSize: 18, fontWeight: 'bold', color: 'white'}}
                        containerStyle={{width: SCREEN_WIDTH - 60, marginTop: 20}}
                    />

                    <Button
                        title="RESET PASSWORD"
                        clear
                        activeOpacity={1}
                        titleStyle={{fontSize: 18, color: GRAY_COLOR}}
                        containerStyle={{marginTop: 20}}
                        onPress={(e) => forgotPassCallback(e)}
                        TouchableComponent={TouchableWithoutFeedback}
                    />
                    <Button
                        title="CREATE AN ACCOUNT"
                        clear
                        activeOpacity={0.5}
                        titleStyle={{fontSize: 18, color: GRAY_COLOR}}
                        containerStyle={{marginTop: 20}}
                        onPress={(e) => registerCallback(e)}
                        TouchableComponent={TouchableWithoutFeedback}
                    />

                </View>

                <Overlay
                    isVisible={showNetworkError}
                    windowBackgroundColor={DARK_OVERLAY_COLOR}
                    overlayBackgroundColor="white"
                    width={320}
                    height={160}>
                    <View style={styles.overlayContainer}>
                        <Text style={styles.titleDialog}>No internet connection</Text>
                        <Text style={styles.messageDialog}>You need internet connection in order to use the app!</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Button clear title="OK" TouchableComponent={TouchableWithoutFeedback} onPress={(e) => dismissCallback(e)} titleStyle={{fontSize: 18, color: GRAY_COLOR}}/>
                        </View>
                    </View>
                </Overlay>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    titleDialog: {
        fontSize: 22,
        marginBottom: 20

    },
    messageDialog: {
        fontSize: 18,
        marginBottom: 20
    },
    overlayContainer: {
        flex: 1,
        flexDirection: 'column',
        width: 300,
        height: 150,
        padding: 16
    },
    loginForm: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        position: 'absolute',
        marginTop: SCREEN_HEIGHT / 3,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 3 * 2,
        backgroundColor: BACKGROUND_GRAY_COLOR,
        paddingTop: 80,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    titleName: {
        width: SCREEN_WIDTH - 70,
        flexDirection: 'row'
    },
    boldTitle: {
        fontSize: 24,
        color: TEXT_COLOR,
        fontWeight: 'bold',
        marginRight: 10
    },
    title: {
        fontSize: 24,
        color: TEXT_COLOR,
    },
    bgImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2
    },
    loginView: {
        marginTop: 150,
        backgroundColor: 'transparent',
        width: 250,
        height: 400,
    },
    loginTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    travelText: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold'
    },
    plusText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'regular'
    },
    loginInput: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerView: {
        marginTop: 20,
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconHelp: {
        position: 'absolute',
        top: 40,
        right: 20
    },
    headerContainer: {
        flex: 1,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 2
    }
});

LoginView.defaultProps = {};


LoginView.propTypes = {
    email: PropTypes.string,
    password: PropTypes.string,
    emailError: PropTypes.string,
    passError: PropTypes.string,
    showLoading: PropTypes.bool,
    isSecure: PropTypes.bool,
    loginCallback: PropTypes.func,
    forgotPassCallback: PropTypes.func,
    registerCallback: PropTypes.func,
    showPassCallback: PropTypes.func,
    emailChangeCallback: PropTypes.func,
    passChangeCallback: PropTypes.func,
    dismissCallback: PropTypes.func,
    showNetworkError: PropTypes.bool
};