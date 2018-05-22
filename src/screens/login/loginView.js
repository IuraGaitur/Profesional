import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {BACKGROUND_GRAY_COLOR, DARK_OVERLAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import { StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableHighlight, TouchableWithoutFeedback,
    TouchableNativeFeedback, TouchableOpacity, ScrollView
} from 'react-native';
import {Input, Button, Icon, Overlay, Card} from 'react-native-elements'
import NetworkErrorDialog from "../../views/NetworkErrorDialog";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ScreenUtils from "../../utils/ScreenUtils";

const BG_IMAGE = require('../../../assets/images/bg_image_1.png');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = ScreenUtils.HEIGHT;

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
            emailChangeCallback, passChangeCallback, showNetworkError, dismissCallback,
            showInfoCallback
        } = this.state;

        return (


                <ScrollView contentContainerStyle={{flexGrow:1}}>
                    <View style={{flex:1, flexDirection:'column'}}>

                        <View style={styles.headerContainer}>
                            <Image source={BG_IMAGE} style={styles.bgImage}/>
                            <Icon reverse
                                  onPress={(e) => showInfoCallback()}
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
                                inputStyle={styles.inputLogin}
                                keyboardAppearance="light"
                                placeholder="Email ADDRESS"
                                autoFocus={false}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() => {
                                    this.setState({emailError: this.validateEmail(email)});
                                    this.passwordInput.focus();
                                }}
                                blurOnSubmit={false}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.containerInput}
                                errorMessage={emailError}
                            />
                            <Input
                                onChangeText={(password) => passChangeCallback(password)}
                                value={password}
                                inputStyle={styles.inputLogin}
                                secureTextEntry={isSecure}
                                rightIcon={ <Icon name={isSecure ? 'ios-eye-off' : 'ios-eye'} type='ionicon' color={GRAY_COLOR}
                                                  onPress={e => showPassCallback(isSecure)} TouchableComponent={TouchableWithoutFeedback}/>}
                                keyboardAppearance="light"
                                placeholder="Password"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="default"
                                returnKeyType="done"
                                ref={ input => this.passwordInput = input}
                                blurOnSubmit={true}
                                placeholderTextColor={GRAY_COLOR}
                                containerStyle={styles.containerInput}
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
                                buttonStyle={{backgroundColor: PRIMARY, borderWidth: 1, borderColor: 'white', padding: 4, height: 40}}
                                titleStyle={{fontSize: 16, color: 'white'}}
                                containerStyle={{width: SCREEN_WIDTH - 60, marginTop: 15}}
                            />

                            <Button
                                title="RESET PASSWORD"
                                clear
                                activeOpacity={1}
                                titleStyle={styles.buttonFont}
                                containerStyle={{marginTop: 15}}
                                onPress={(e) => forgotPassCallback(e)}
                                TouchableComponent={TouchableWithoutFeedback}
                            />
                            <Button
                                title="CREATE AN ACCOUNT"
                                clear
                                activeOpacity={0.5}
                                titleStyle={styles.buttonFont}
                                containerStyle={{marginTop: 15}}
                                onPress={(e) => registerCallback(e)}
                                TouchableComponent={TouchableWithoutFeedback}
                            />
                        </View>
                        <NetworkErrorDialog
                            dismissCallback={dismissCallback}
                            showNetworkError={showNetworkError}/>
                    </View>
                </ScrollView>




        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    loginForm: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: ScreenUtils.HEIGHT/ 3,
        width: SCREEN_WIDTH,
        backgroundColor: BACKGROUND_GRAY_COLOR,
        paddingTop: 80,
        paddingHorizontal: 20,
        paddingBottom: 20
    },
    titleName: {
        width: SCREEN_WIDTH,
        paddingHorizontal: 40,
        flexDirection: 'row'
    },
    boldTitle: {
        fontSize: 24,
        color: TEXT_COLOR,
        fontWeight: 'bold',
        marginRight: 10,
        fontFamily:'WorkSansBold'
    },
    title: {
        fontSize: 28,
        color: TEXT_COLOR,
        fontFamily:'WorkSansRegular'
    },
    bgImage: {
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT / 1.7
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
    buttonFont: {
        fontSize: 16,
        color: GRAY_COLOR,
        fontFamily: 'WorkSansRegular'
    },
    plusText: {
        color: 'white',
        fontSize: 30,
        fontFamily: 'WorkSansRegular'
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
        top: 10,
        right: 10
    },
    headerContainer: {
        flex: 1,
        width: SCREEN_WIDTH,
        position: 'absolute',
        zIndex: -1,
        height: ScreenUtils.HEIGHT / 1.7
    },

    inputLogin: {
        color: 'black',
        fontSize: 18,
        fontFamily:'WorkSansRegular'
    },
    containerInput: {
        marginTop: 15
    },
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
    showInfoCallback: PropTypes.func,
    registerCallback: PropTypes.func,
    showPassCallback: PropTypes.func,
    emailChangeCallback: PropTypes.func,
    passChangeCallback: PropTypes.func,
    dismissCallback: PropTypes.func,
    showNetworkError: PropTypes.bool
};