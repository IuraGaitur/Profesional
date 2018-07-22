import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {GRAY_COLOR, TEXT_COLOR} from 'src/utils/colors';
import {Actions} from 'react-native-router-flux';
import {Button, Header, Icon, Right, Title, View} from 'native-base';

export default class TransparentBackMenu extends Component {
    render() {
        let {isHeaderTransparent, actionBack, closeIcon, title, actions} = this.props;
        return (
            <Header androidStatusBarColor={GRAY_COLOR}
                    style={[styles.headerContainer, {backgroundColor: isHeaderTransparent ? 'transparent': 'white'}]}>
                <Button transparent
                        onPress={() => actionBack != null ? actionBack() : Actions.pop()}>
                    <Icon name={closeIcon ? closeIcon : 'arrow-back'}
                          style={styles.icon}/>
                </Button>
                <View style={styles.titleContainer}>
                    <Title style={styles.title}>{title}</Title>
                </View>
                <Right>{actions}</Right>
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
    }
});

TransparentBackMenu.propTypes = {
    actionBack: PropTypes.func,
    title: PropTypes.string,
    actions: PropTypes.object,
    closeIcon: PropTypes.string,
    isHeaderTransparent: PropTypes.bool
};