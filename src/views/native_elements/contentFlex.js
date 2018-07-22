import React, {Component} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import {Content} from 'native-base';

export default class ContentFlex extends Component {

    render() {

        const {margin, padding, scrollable, bouncing} = this.props;

        if (!scrollable) {
            return (
                <View style={{flex: 1, padding: padding ? padding : 0, margin: margin ? margin : 0}}>
                    {this.props.children}
                </View>);
        } else {
            return (
                <Content style={{flex: 1, padding: padding ? padding : 0, margin: margin ? margin : 0}} bounces={bouncing}>
                    {this.props.children}
                </Content>);
        }
    };

};

ContentFlex.defaultProps = {
    bouncing: true
};

ContentFlex.propTypes = {
    margin: PropTypes.number,
    padding: PropTypes.number,
    scrollable: PropTypes.bool,
    bouncing: PropTypes.bool
};