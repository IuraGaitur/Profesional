import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Content} from 'native-base';
import {LIGHT_COLOR} from 'src/utils/Colors';
import InfoDialog from 'src/views/InfoDialog';
import NetworkErrorDialog from 'src/views/NetworkErrorDialog';
import StatusBarBackground from 'src/views/StatusBarBackground';

export default class ContainerFlex extends Component {

    constructor(props) {
        super(props);
        this.state = {showDialog: false};
    }

    showDialog() {
        this.setState({showDialog: true})
    }

    hideAllDialogs() {
        this.setState({showDialog: false, showInfoDialog: false})
    }

    showInfoDialog(html) {
        this.setState({showInfoDialog: true, html: html})
    }

    render() {
        return (
            <Content bounces={this.props.scrollable ? true : false} contentContainerStyle={{flex: 1}}
                     style={{
                         flex: 1,
                         padding: this.props.padding ? this.props.padding : 0,
                         backgroundColor: LIGHT_COLOR
                     }}>
                <StatusBarBackground/>
                {this.props.children}
                <NetworkErrorDialog
                    dismissCallback={() => this.hideAllDialogs()}
                    showNetworkError={this.state.showDialog}/>
                <InfoDialog
                    dismissCallback={() => this.hideAllDialogs()}
                    html={this.state.html}
                    showInfo={this.state.showInfoDialog}/>

            </Content>);
    };

};

ContainerFlex.propTypes = {
    padding: PropTypes.number,
    scrollable: PropTypes.bool
};