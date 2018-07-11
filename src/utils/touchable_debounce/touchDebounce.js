import React, { Component } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import { debounce } from 'src/utils/touchable_debounce/debounce';
import {throttle} from 'src/utils/touchable_debounce/throttle';

class TouchDebounce extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableWithoutFeedback
                style ={this.props.style}
                activeOpacity={this.props.activeOpacity}
                onPress= {
                    throttle(() => {
                        this.props.onPress();
                    }, 1000)
                }
            >
                {this.props.children}
            </TouchableWithoutFeedback>
        );
    }
}

export default TouchDebounce;