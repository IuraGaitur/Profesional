import React, { Component } from "react";
import { TouchableOpacity } from "react-native";
import { debounce } from "./Debounce";
import PropTypes from 'prop-types';

class TouchOpacityDebounce extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity
                style ={this.props.style}
                activeOpacity={this.props.activeOpacity}
                onPress= {
                    debounce(() => {
                        this.props.onPress();
                    }, 300)
                }
            >
                {this.props.children}
            </TouchableOpacity>
        );
    }
}

TouchOpacityDebounce.propTypes = {
    onPress: PropTypes.func
};

export default TouchOpacityDebounce;