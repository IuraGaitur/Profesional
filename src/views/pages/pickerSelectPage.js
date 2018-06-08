import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from "native-base";
import SlideGroup from "../form/slideGroup/SlideGroup";
import styles from './pageStyle';

export default class PickerSelectPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', marginBottom: 35}}>
                <Text style={styles.titlePicker}>{this.props.data.title}</Text>
                <ScrollView contentContainerStyle={[styles.container]}>
                    <SlideGroup items={this.props.data.answers} style={{flex: 1}}
                                onSlide={state => this.props.onSlideCallback(state)}/>
                </ScrollView>
            </View>);
    }

}