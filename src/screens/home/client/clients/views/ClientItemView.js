import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View} from "native-base";
import {Text} from "react-native";
import Formula from "../../../../../views/Formula";
import MainStyle from "../../../../../views/MainStyle";

export default class ClientItemView extends Component {

    render() {
        return (
            <View style={[MainStyle.centerColAlign, {alignItems: 'center', marginVertical: 4}]}>
                <Text style={MainStyle.h3}>{this.props.name}</Text>
                <Formula text={this.props.formula}/>
            </View>);
    }
}


ClientItemView.propTypes = {
    name: PropTypes.string,
    formula: PropTypes.string
};