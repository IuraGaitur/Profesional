import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView  from './mainView';
import {signOut, getMenuItems} from './mainAction';

class MainScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.getMenuItems();
    }

    selectPage = (position) => {
        console.log(position);
        switch (position) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                this.props.signOut(signOut);
                break;
            default:
                break;
        }
    };

    render() {
        const {menuItems} = this.props;
        return (
            <MainView title={'HOME'} menuItems={menuItems} selectPageCalback={this.selectPage.bind(this)}
            />
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
        signOut: () => dispatch(signOut())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);