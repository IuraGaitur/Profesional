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
        this.props.getMenuItems();
    }

    selectPage = (position) => {

        switch (position) {
            case 0:
            case 1:
                this.setState({selectedPage: MAIN, title: 'Home'});
                break;
            case 2:
                this.setState({selectedPage: PROFILE, title: 'Profile'});
                break;
            case 3:
                this.setState({selectedPage: PRODUCTS, title: 'Products'});
                break;
            case 4:
                this.props.showHelp();
                break;
            case 5:
                this.props.signOut();
                break;
            default:
                break;
        }
    };

    createClient = () => {
        this.props.showCreateClient()
    };

    render() {
        const {menuItems} = this.props;
        const {selectedPage, title} = this.state;
        return (
            <MainView title={title} menuItems={menuItems}
                      selectPageCalback={this.selectPage}
                      selectedPage={selectedPage}
                      createClient={this.createClient}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.main.menuItems,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMenuItems: () => dispatch(getMenuItems()),
        signOut: () => dispatch(signOut()),
        showMyProfile: () => dispatch(showMyProfile()),
        showHelp: () => dispatch(showHelp()),
        showCreateClient: () => dispatch(showCreateClient()),

    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);