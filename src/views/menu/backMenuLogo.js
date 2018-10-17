import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {GRAY_COLOR, LIGHT_COLOR, TEXT_COLOR} from 'src/utils/colors';
import {Button, Header, Icon, Left, Right, Thumbnail, View} from 'native-base';

export default class BackMenuLogo extends Component {
    render() {
        return (
            <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                <Left style={styles.header}>
                    <Button transparent onPress={() => this.props.actionBack ? this.props.actionBack() : Actions.pop()}>
                        <Icon name='arrow-back' style={styles.icon}/>
                    </Button>
                </Left>
                <View style={styles.logo}>
                    {/*<Thumbnail square style={styles.thumb}*/}
                               {/*source={require('Sytem_Pro/assets/images/logo.png')}/>*/}
                </View>
                <Right>{this.props.actions}</Right>
            </Header>);
    }
}

const styles = StyleSheet.create({
    icon: {
        color: GRAY_COLOR, fontSize: 24
    },
    logo: {
        position: 'absolute',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 20
    },
    thumb: {
        width: 70,
        height: 40
    },
    title: {
        color: TEXT_COLOR,
        textAlign: 'left',
        fontSize: 18
    },
    header: {
        padding: 8
    },
    headerContainer: {
        paddingTop: 8,
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor: LIGHT_COLOR,

        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 4

    }
});

BackMenuLogo.propTypes = {
    actionBack: PropTypes.func,
    actions: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.bool])
};