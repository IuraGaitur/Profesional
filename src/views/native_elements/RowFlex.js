import React, {Component} from 'react';
import {View} from "react-native";
import PropTypes from 'prop-types';
import {Content, Row} from "native-base";

export default class RowFlex extends Component {

    render() {
        return <Row size={this.props.size} style={{flex:1, flexGrow: 1, flexDirection: 'column'}}>
            {this.props.children}
        </Row>
    };

};

RowFlex.propTypes = {
    size: PropTypes.number,
};