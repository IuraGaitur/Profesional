import {GRAY_LIGHT} from "../utils/Colors";
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View} from "native-base";

export default class Divider extends Component{

    render() {
        return (<View style={{backgroundColor: this.props.color, width: '100%', height: this.props.height}} />);
    }
}

Divider.defaultProps = {
    color: GRAY_LIGHT,
    height: 1
};

Divider.propTypes = {
    color: PropTypes.string,
    height: PropTypes.number
};