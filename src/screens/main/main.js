import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView  from './mainView';
import {signOut, showHelp, showMyProfile, getMenuItems, showCreateClient} from './mainAction';
export const MAIN = 'MAIN';
export const PRODUCTS = 'PRODUCTS';
export const PROFILE = 'PROFILE';
export const HELP = 'HELP';

class MainScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {selectedPage: MAIN, title: 'Home'};
    }

    createClient = () => {
        this.props.showCreateClient()
    };

    render() {
        const {menuItems} = this.props;
        const {title} = this.state;
        return (
            <MainView title={title} menuItems={menuItems}
                      createClient={this.createClient}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut()),
        showMyProfile: () => dispatch(showMyProfile()),
        showHelp: () => dispatch(showHelp()),
        showCreateClient: () => dispatch(showCreateClient()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);