import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../../utils/Colors';
import MenuItem from "../../../views/menu/MenuItem";
import {Body, Button, Icon, Left, Title, Header} from "native-base";

export default class ClientsView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {primaryUser} = this.props;

        return (
            <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                <Text style={{textAlign: 'center'}}>Welcome {primaryUser && primaryUser.email}</Text>
                <Text style={{textAlign: 'center'}}>Please add a new client</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
});

ClientsView.propTypes = {
    title: PropTypes.string,
    primaryUser: PropTypes.object,
};
