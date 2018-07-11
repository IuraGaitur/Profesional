import React, {Component} from 'react';
import Drawer from 'react-native-drawer'
import {Header, Input, ListItem} from 'react-native-elements';
import {FlatList, Text, View, StyleSheet, Dimensions, Image, TouchableWithoutFeedback} from 'react-native';
import PropTypes from 'prop-types';
import ScreenUtils from 'src/utils/screenUtils';
import {
    BACKGROUND_GRAY_COLOR,
    GRAY_COLOR,
    PRIMARY,
    TEXT_COLOR,
    TEXT_GRAY_COLOR,
    TRANSPARENT
} from 'src/utils/colors';
import SubmitButton from 'src/views/native_elements/submitButton';
import FormItem from 'src/views/native_elements/formItem';
import {Form, Label, Button, Icon, Thumbnail} from 'native-base';
import ContainerFlex from 'src/views/native_elements/containerFlex';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = ScreenUtils.HEIGHT;
const BG_IMAGE = require('Sytem_Pro/assets/images/img_back_hair_2.jpg');
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class InfoView extends Component {

    constructor(props) {
        super(props);
        this.state = {...props, searchInput: null};
    }

    renderFixedHeader() {
        return <Image source={BG_IMAGE} style={{width: window.width, height: ScreenUtils.HEIGHT / 2.2}}/>
    }

    render() {
        const {searchCallback, showLoading, searchInput, closeCallback, contactCallback, faqCallback} = this.props;

        return (
            <ContainerFlex>
                <ParallaxScrollView
                    renderBackground={() => {
                        return this.renderFixedHeader(closeCallback)
                    }}
                    stickyHeaderHeight={ScreenUtils.HEIGHT / 3.5}
                    fadeOutForeground={false}
                    parallaxHeaderHeight={ ScreenUtils.HEIGHT / 2.2 }>

                    <View style={styles.paralaxContainer}>
                        <View style={{flex:1,  justifyContent: 'center', alignItems: 'center'}}>
                            <Thumbnail square source={require('Sytem_Pro/assets/images/logo.png')}
                                       style={{width: 100, height: 65}}/>
                        </View>
                        <Form style={{width: '100%'}}>
                            <FormItem>
                                <Label>Type keyword to find answer</Label>
                            </FormItem>
                        </Form>
                        <SubmitButton text='SEARCH' showLoading={showLoading} onPress={searchCallback}/>
                        <Button block transparent light onPress={faqCallback}>
                            <Text style={{flex: 1, paddingLeft: 4, fontSize: 19}}>FAQ</Text>
                            <Icon name='ios-arrow-forward' style={{color: GRAY_COLOR}}/>
                        </Button>
                        <Button block transparent light onPress={contactCallback}>
                            <Text style={{flex: 1, paddingLeft: 4, fontSize: 19}}>Contact Us</Text>
                            <Icon name='ios-arrow-forward' style={{color: GRAY_COLOR}}/>
                        </Button>
                    </View>

                </ParallaxScrollView>
                <View style={styles.close}>
                    <Icon name='ios-close' style={{color: 'white', fontSize: 40, backgroundColor: 'transparent'}}
                          underlayColor={TRANSPARENT} onPress={e => closeCallback()}/>
                </View>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    inputsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 70,
        alignItems: 'center'
    },
    input: {
        color: 'black',
        fontSize: 15
    },
    inputContainer: {
        marginTop: 30,
        width: SCREEN_WIDTH - 40
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
        color: 'white',
    },
    close: {
        flex: 1,
        position: 'absolute',
        left: 30,
        top: 30,
    },
    paralaxContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 14
    }
});

InfoView.propTypes = {
    searchCallback: PropTypes.func,
    closeCallback: PropTypes.func,
    showLoading: PropTypes.bool,
};
