import React, {Component} from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text} from "native-base";
import {GRAY_COLOR, GRAY_LIGHT, SELECTED} from "../../../../utils/Colors";

export default class CheckboxItem extends Component {

    render() {
        let style = this.props.style != null ? this.props.style : {};
        return (
            <View style={[style, {marginVertical: 10, marginRight: 10}]}>
                <Button key={this.props.title} rounded light titleStyle={{padding: 20}}
                        style={{width: '100%', height: 60, backgroundColor: this.props.isSelected ? SELECTED : GRAY_LIGHT, justifyContent: 'center'}}
                        onPress={this.props.onSelect}>
                    <Text style={{fontSize: 22, marginHorizontal: 18, textAlign: 'center', marginVertical: 14}}>{this.props.title}</Text>
                </Button>
            </View>);
    }
}