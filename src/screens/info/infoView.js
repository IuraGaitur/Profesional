import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {Button, Header, Icon, Input, ListItem} from "react-native-elements";
import {FlatList, Text, View, StyleSheet, Dimensions, Image, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import ScreenUtils from './../../utils/ScreenUtils';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR, TRANSPARENT} from '../../utils/Colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = ScreenUtils.HEIGHT;
const BG_IMAGE = require('../../../assets/images/img_back_hair_2.jpg');
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class InfoView extends Component {

    constructor(props) {
        super(props);
        this.state = { ...props, searchInput: null};
    }

    renderFixedHeader() {
        return <Image source={BG_IMAGE} style={{width: window.width, height: ScreenUtils.HEIGHT / 2.2}}/>
    }

    render() {
        const {searchCallback, showLoading, searchInput, closeCallback} = this.props;

        return (
            <View style={{ flex: 1, backgroundColor:'white' }}>
                <ParallaxScrollView
                    renderBackground={() => {return this.renderFixedHeader(closeCallback)}}
                    stickyHeaderHeight={ScreenUtils.HEIGHT / 3.5}
                    fadeOutForeground={false}
                    parallaxHeaderHeight={ ScreenUtils.HEIGHT / 2.2 }>

                    <View style={styles.paralaxContainer}>
                        <Icon color="black" name="search" size={62} />
                        <Input
                            onChangeText={(value) => this.setState({...this.state, searchInput: value})}
                            value={searchInput}
                            inputStyle={{color: 'black', fontSize: 16}}
                            keyboardAppearance="light"
                            placeholder="Type keyword to find answer"
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType="default"
                            returnKeyType="done"
                            ref={ input => this.searchInput = input}
                            blurOnSubmit={true}
                            placeholderTextColor={GRAY_COLOR}
                            containerStyle={{marginTop: 30, width: 'auto'}}
                            errorStyle={{color: 'red'}}
                        />
                        <Button
                            large
                            title='SEARCH'
                            activeOpacity={1}
                            underlayColor="transparent"
                            onPress={(e) => searchCallback(e)}
                            loading={showLoading}
                            loadingProps={{size: 'small', color: 'white'}}
                            buttonStyle={styles.buttonStyle}
                            titleStyle={styles.buttonTitleStyle}
                            containerStyle={styles.buttonContainer}
                        />
                        <ListItem title="FAQ" chevronColor="#bdc6cf" chevron={true}/>
                        <ListItem title="Contact Us" chevronColor="#bdc6cf" chevron={true}/>

                    </View>

                </ParallaxScrollView>
                <View style={styles.close}>
                    <Icon name='ios-close' type='ionicon' color='white' size={40}
                          underlayColor={TRANSPARENT} onPress={e => closeCallback()} TouchableComponent={TouchableWithoutFeedback} />
                </View>
            </View>
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
        flex: 1,
        flexDirection:'column',
        padding: 14
    }
});

InfoView.propTypes = {
    searchCallback: PropTypes.func,
    closeCallback: PropTypes.func,
    showLoading: PropTypes.bool,
};
