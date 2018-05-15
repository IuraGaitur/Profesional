import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
//Later
//import Icon from 'react-native-vector-icons/Ionicons';
import { Ionicons } from '@expo/vector-icons';

class DrawerButton extends Component {

    setNativeProps = (nativeProps) => {
        this._root.setNativeProps(nativeProps);
    }

    render() {
        let that = this;
        return (
            <Ionicons name="ios-menu" size={32} color="white" style={styles.menu}/>
        );
    }
}

const styles = StyleSheet.create({
    menu: {
        marginLeft: 15,

    }
});

export default DrawerButton;
