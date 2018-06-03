import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from "native-base";
import SlideGroup from "../../../views/form/slideGroup/SlideGroup";
import styles from './pageStyle';

export default class PickerSelectPage extends Component {

    render() {
        return(<ScrollView contentContainerStyle={[styles.container, {paddingBottom: 30}]}>
                    <Text style={styles.titlePicker}>{this.props.data.title}</Text>
                    <SlideGroup items={this.props.data.answers} style={{flex: 1}}/>
                </ScrollView>);
    }

}