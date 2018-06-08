import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Text, Thumbnail, Title, View} from "native-base";
import {GRAY_COLOR, LIGHT_BACKGROUND_COLOR, TEXT_COLOR} from "../../utils/Colors";
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

export default class BackMenuLogo extends Component {
    render() {
        return (
            <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                <Left style={styles.header}>
                    <Button transparent onPress={() => this.props.actionBack ? this.props.actionBack() : Actions.pop()}>
                        <Icon name='arrow-back' style={{color: GRAY_COLOR, fontSize: 24}}/>
                    </Button>
                </Left>
                <View style={{position: 'absolute', flex:1, justifyContent: 'center', alignItems: 'flex-end', marginTop: 20}}>
                    <Thumbnail square source={require('../../../assets/images/logo.png')}
                               style={{width: 70, height: 40}}/>
                </View>
                <Right></Right>
            </Header>);
    }
}

const styles = StyleSheet.create({
    title: {
        color: TEXT_COLOR,
        textAlign: 'left',
        fontSize: 18
    },
    header: {
        padding: 8
    },
    headerContainer: {
        padding: 0,
        backgroundColor: LIGHT_BACKGROUND_COLOR
    }
});

BackMenuLogo.propTypes = {
    actionBack: PropTypes.func,
};