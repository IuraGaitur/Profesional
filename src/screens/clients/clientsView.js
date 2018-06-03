import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import MenuItem from "../../views/MenuItem";
import HeaderItem from "../../views/HeaderItem";
import {Body, Button, Icon, Left, Title, Header} from "native-base";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ClientsView extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }



    render() {
        const {title, user, menuItems, selectPageCalback} = this.props;
        const drawerStyles = { drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3}, main: {paddingLeft: 3} };

        return (
            <View>
                <Text>Clients</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        flexDirection: 'column'
    },
    separator: {
        flex: 1,
    },
    headerOuter: {
        backgroundColor: 'white'
    },
    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: LIGHT_COLOR,
    }
});

ClientsView.defaultProps = {
    title: 'ClientsView'
};


ClientsView.propTypes = {
    title: PropTypes.string,
    user: PropTypes.object,
    selectPageCalback: PropTypes.func,
    menuItems: PropTypes.array
};
