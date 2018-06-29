import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";
import {GRAY_COLOR, GRAY_LIGHT, SELECTED} from "../../../../utils/Colors";

export default class CheckboxItem extends Component {

    render() {
        return  <View style={{marginVertical: 10, marginRight: 10}}>
                    <Button key={this.props.title} rounded light titleStyle={{padding: 10}}
                            style={{backgroundColor: this.props.isSelected ? SELECTED : GRAY_LIGHT}}
                            onPress={this.props.onSelect}>
                        <Text style={{fontSize: 16, marginHorizontal: 10}}>{this.props.title}</Text>
                    </Button>
                </View>
    }
}