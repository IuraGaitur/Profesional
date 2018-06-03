import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {
    BACKGROUND_GRAY_COLOR,
    DARK_OVERLAY_COLOR,
    GRAY_COLOR,
    PRIMARY,
    TEXT_COLOR,
    TEXT_GRAY_COLOR
} from '../../utils/Colors';
import {
    StyleSheet, Text, View, ImageBackground, Dimensions, Image, TouchableHighlight, TouchableWithoutFeedback,
    TouchableNativeFeedback, TouchableOpacity, ScrollView
} from 'react-native';
import {Icon, Overlay, Card} from 'react-native-elements'
import NetworkErrorDialog from "../../views/NetworkErrorDialog";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ScreenUtils from "../../utils/ScreenUtils";
import {Form, Item, Label, Input, Container, Content, Button} from "native-base";
import FormItem, {EMAIL, REQUIRED, STRONG_PASS} from "../../views/native_elements/FormItem";
import SubmitButton from "../../views/native_elements/SubmitButton";
import FormData from "../../views/form/FormData";

const BG_IMAGE = require('../../../assets/images/bg_image_1.png');
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = ScreenUtils.HEIGHT;

export default class LoginView extends Component {

    user = {};

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    updateForm = (item, value) => {
        this.setState({[item]: value});
        this.user[item] = value;
    };

    componentWillReceiveProps(newProps) {
        this.setState({...this.state, ...newProps});
    }

    login(user, callback) {
        let passValidation = this.refs.formData.validate([this.refs.emailEdit, this.refs.passEdit]);
        if (passValidation) {
           callback(user.email, user.pass);
        } else {
            console.log("Error");
        }
    }

    render() {
        const {
            email, pass, passError, showLoading, loginCallback, registerCallback,
            forgotPassCallback, showNetworkError, dismissCallback, showInfoCallback
        } = this.state;

        return (
            <Container>
                <Content>
                    <ScrollView contentContainerStyle={{flexGrow: 1}}>
                        <View style={{flex: 1, flexDirection: 'column'}}>

                        <View style={styles.headerContainer}>
                            <Image source={BG_IMAGE} style={styles.bgImage}/>
                            <Icon reverse onPress={(e) => showInfoCallback()}
                                  name='ios-help' type='ionicon'
                                  color={PRIMARY} containerStyle={styles.iconHelp}/>
                        </View>
                        <View style={styles.loginForm}>
                            <View style={styles.titleName}>
                                <Text style={styles.boldTitle}>STYLIST</Text>
                                <Text style={styles.title}>LOGIN</Text>
                            </View>

                            <FormData shouldValidate={true} ref="formData">
                                <FormItem
                                    ref="emailEdit"
                                    value={email}
                                    onChangeText={(text) => {this.updateForm('email', text)}}
                                    onSubmitEditing={() => this.refs.passEdit.focus()}
                                    validation={[{name: REQUIRED, error: 'Required'},
                                                 {name: EMAIL, error: 'Not valid email'}]}>
                                    <Label>Username</Label>
                                </FormItem>
                                <FormItem
                                    value={pass}
                                    onChangeText={(text) => {this.updateForm('pass', text)}}
                                    password={true} ref="passEdit"
                                    isLast validation={[{name: REQUIRED, error: 'Required'}]}>
                                    <Label>Password</Label>
                                </FormItem>
                                <SubmitButton text='SIGN IN' showLoading={showLoading} onPress={() => this.login(this.user, loginCallback)}/>
                                <Button block transparent success
                                        onPress={(e) => forgotPassCallback(e)}>
                                    <Text>RESET PASSWORD</Text>
                                </Button>
                                <Button block transparent success
                                        onPress={(e) => registerCallback(e)}>
                                    <Text>CREATE AN ACCOUNT</Text>
                                </Button>
                            </FormData>
                        </View>
                        <NetworkErrorDialog
                            dismissCallback={dismissCallback}
                            showNetworkError={showNetworkError}/>
                    </View>
                </ScrollView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    mainButton: {
        backgroundColor: PRIMARY,
        marginTop: 15
    },
    buttonConfirm: {
        backgroundColor: PRIMARY,
        borderWidth: 1,
        borderColor: 'white',
        padding: 4,
        height: 35
    },
    loginForm: {
        flexGrow: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: ScreenUtils.HEIGHT / 3,
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
        fontFamily: 'WorkSansBold'
    },
    title: {
        fontSize: 28,
        color: TEXT_COLOR,
        fontFamily: 'WorkSansRegular'
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
        fontSize: 15,
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
        fontFamily: 'WorkSansRegular',
        height: '100%'
    },
    containerInput: {
        marginTop: 12
    },
});

LoginView.defaultProps = {};


LoginView.propTypes = {
    passError: PropTypes.string,
    showLoading: PropTypes.bool,
    loginCallback: PropTypes.func,
    forgotPassCallback: PropTypes.func,
    showInfoCallback: PropTypes.func,
    registerCallback: PropTypes.func,
    dismissCallback: PropTypes.func,
    showNetworkError: PropTypes.bool
};