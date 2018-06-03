import React, { Component } from 'react';
import {Text} from "react-native";
import {View} from "native-base";
import CheckboxGroup from "../../../views/form/checkGroup/CheckboxGroup";
import styles from './pageStyle';

export default class SelectPage extends Component {

    render() {
        return(<View style={styles.container}>
                    <Text style={styles.title}>{this.props.data.title}</Text>
                    <CheckboxGroup items={this.props.data.answers}/>
               </View>);
    }

}