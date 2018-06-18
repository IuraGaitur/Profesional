import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Body, Button, Header, Icon, Left, Right, Text, Title, View} from "native-base";
import {GRAY_COLOR, LIGHT_BACKGROUND_COLOR, LIGHT_COLOR, TEXT_COLOR} from "../../utils/Colors";
import PropTypes from 'prop-types';
import {Actions} from 'react-native-router-flux';

export default class BackMenu extends Component {
    render() {
        return (
            <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                <Button transparent
                        onPress={() => this.props.actionBack != null ? this.props.actionBack() : Actions.pop()}>
                    <Icon name={this.props.closeIcon ? this.props.closeIcon : 'arrow-back'}
                          style={{color: GRAY_COLOR}}/>
                </Button>
                <View style={{width: '55%', alignContent: 'flex-start', justifyContent: 'center'}}>
                    <Title style={styles.title}>{this.props.title}</Title>
                </View>
                <Right>{this.props.actions}</Right>
            </Header>);
    }
}

const styles = StyleSheet.create({
    title: {
        color: TEXT_COLOR,
        textAlign: 'left',
        fontSize: 18
    },
    headerContainer: {
        padding: 0,
        backgroundColor: LIGHT_COLOR
    }
});

BackMenu.propTypes = {
    actionBack: PropTypes.func,
    title: PropTypes.string,
    actions: PropTypes.object,
    closeIcon: PropTypes.string

};