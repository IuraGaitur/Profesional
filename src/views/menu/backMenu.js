import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import HtmlText from 'src/views/native_elements/htmlText';
import {Button, Header, Icon, Right, View} from 'native-base';
import {GRAY_COLOR, LIGHT_COLOR, TEXT_COLOR} from 'src/utils/colors';

export default class BackMenu extends Component {
    render() {
        return (
            <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                <Button transparent
                        onPress={() => this.props.actionBack ? this.props.actionBack() : Actions.pop()}>
                    <Icon name={this.props.closeIcon ? this.props.closeIcon : 'arrow-back'}
                          style={{color: GRAY_COLOR}}/>
                </Button>
                <View style={styles.centerItem}>
                    <HtmlText html={this.props.title}/>
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
        paddingTop: 8,
        paddingLeft: 0,
        marginTop: 0,
        backgroundColor: LIGHT_COLOR,
        height: 'auto'
    },
    centerItem: {
        width: '65%',
        alignContent: 'flex-start',
        justifyContent: 'center',
        height: 'auto',
        paddingLeft: 8,
    }
});

BackMenu.propTypes = {
    actionBack: PropTypes.func,
    title: PropTypes.string,
    actions: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool]),
    closeIcon: PropTypes.string

};