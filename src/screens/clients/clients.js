import React, { Component } from 'react';
import { connect } from 'react-redux';
import {signOut, getMenuItems} from './clientsAction';
import ClientsView from "./clientsView";

class ClientsScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <ClientsView />
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ClientsScreen);