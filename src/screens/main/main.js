import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView  from './mainView';
import {signOut, showHelp, showMyProfile, getMenuItems} from './mainAction';
export const MAIN = 'MAIN';
export const PRODUCTS = 'PRODUCTS';
export const PROFILE = 'PROFILE';
export const HELP = 'HELP';

class MainScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {selectedPage: PRODUCTS};
        this.props.getMenuItems();
    }

    selectPage = (position) => {

        switch (position) {
            case 0:
            case 1:
                this.setState({selectedPage: MAIN});
                break;
            case 2:
                this.props.showMyProfile();
                break;
            case 3:
                this.setState({selectedPage: PRODUCTS});
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

    render() {
        const {menuItems} = this.props;
        const {selectedPage} = this.state;
        return (
            <MainView title={'HOME'} menuItems={menuItems}
                      selectPageCalback={this.selectPage}
                      selectedPage={selectedPage}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        menuItems: state.main.menuItems
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getMenuItems: () => dispatch(getMenuItems()),
        signOut: () => dispatch(signOut()),
        showMyProfile: () => dispatch(showMyProfile()),
        showHelp: () => dispatch(showHelp())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);