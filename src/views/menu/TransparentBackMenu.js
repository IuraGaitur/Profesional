import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {GRAY_COLOR, TEXT_COLOR} from 'src/utils/Colors';
import {Actions} from 'react-native-router-flux';
import {Button, Header, Icon, Right, Title, View} from 'native-base';

export default class BackMenu extends Component {
    render() {
        return (
            <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                <Button transparent
                        onPress={() => this.props.actionBack != null ? this.props.actionBack() : Actions.pop()}>
                    <Icon name={this.props.closeIcon ? this.props.closeIcon : 'arrow-back'}
                          style={styles.icon}/>
                </Button>
                <View style={styles.titleContainer}>
                    <Title style={styles.title}>{this.props.title}</Title>
                </View>
                <Right>{this.props.actions}</Right>
            </Header>);
    }
}

const styles = StyleSheet.create({
    icon: {
        color: GRAY_COLOR,
        fontSize: 34
    },
    titleContainer: {
        width: '55%',
        alignContent: 'flex-start',
        justifyContent: 'center'
    },
    title: {
        color: TEXT_COLOR,
        textAlign: 'left',
        fontSize: 18
    },
    headerContainer: {
        padding: 0,
        backgroundColor: 'transparent'
    }
});

BackMenu.propTypes = {
    actionBack: PropTypes.func,
    title: PropTypes.string,
    actions: PropTypes.object,
    closeIcon: PropTypes.string

};