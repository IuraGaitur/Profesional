import React, {Component} from 'react';
import {View} from "react-native";
import PropTypes from 'prop-types';
import {Content} from "native-base";
import StatusBarBackground from "../StatusBarBackground";
import NetworkErrorDialog from "../NetworkErrorDialog";
import {LIGHT_COLOR} from "../../utils/Colors";

export default class ContainerFlex extends Component {

    constructor(props) {
        super(props);
        this.state = {showDialog: false};
    }

    showDialog() {
        this.setState({showDialog: true})
    }

    hideDialog() {
        this.setState({showDialog: false})
    }

    render() {
        return (
            <Content bounces={this.props.scrollable ? true : false} contentContainerStyle={{flex: 1}}
                     style={{flex: 1, padding: this.props.padding ? this.props.padding : 0, backgroundColor: LIGHT_COLOR}}>
                <StatusBarBackground/>
                {this.props.children}
                <NetworkErrorDialog
                    dismissCallback={() => this.hideDialog()}
                    showNetworkError={this.state.showDialog}/>
            </Content>);
    };

};

ContainerFlex.propTypes = {
    padding: PropTypes.number,
    scrollable: PropTypes.bool
};