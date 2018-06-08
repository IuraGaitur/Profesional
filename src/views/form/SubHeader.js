import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from "react-native";

export default class SubHeader extends Component {

    render() {
        return <View style={{flex: 1, backgroundColor: this.props.color, paddingHorizontal: 8, paddingVertical: 16, alignItems: 'flex-start' }}>
            <Text style={{fontWeight: 'bold', fontSize: 14}}>{this.props.title}</Text>
        </View>
    }

}

SubHeader.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string
};