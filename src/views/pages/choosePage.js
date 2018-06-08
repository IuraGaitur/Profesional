import React, {Component} from 'react';
import {ScrollView, Text} from "react-native";
import {View} from "native-base";
import RadioBoxGroup from "../form/radioGroup/RadioGroup";
import styles from './pageStyle';

export default class ChoosePage extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.data.title}</Text>
                <View>
                {this.props.data.answers && this.props.data.answers.map(item =>
                     <RadioBoxGroup key={item.title} items={item.options} title={item.title}/>)
                }
                </View>
            </View>);
    }

}