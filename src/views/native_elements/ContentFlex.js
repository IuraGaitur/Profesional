import React, {Component} from 'react';
import {View} from "react-native";
import PropTypes from 'prop-types';
import {Content} from "native-base";

export default class ContentFlex extends Component {

    render() {
        if(!this.props.scrollable) {
            return <View style={{flex: 1, padding: this.props.padding ? this.props.padding : 0}}>
                {this.props.children}
            </View>
        } else {
            return <Content style={{flex: 1, padding: this.props.padding ? this.props.padding : 0}}>
                {this.props.children}
            </Content>
        }
    };

};

ContentFlex.propTypes = {
    padding: PropTypes.number,
    scrollable: PropTypes.bool
};