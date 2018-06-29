import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showCreationScreen, getClients, getPrimaryUser} from './clientsAction';
import ClientsView from "./clientsView";
import CollectionUtils from "../../../../utils/CollectionUtils";

class ClientsScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.props.getPrimaryUser();
        this.props.getClients();
    }

    createClient = () => {
        this.props.showCreationScreen();
    };

    actionSearch = (text) => {
        this.props.getClients(text);
    };

    render() {
        const {userClients} = this.props;
        return (
            <ClientsView userClients={userClients}
                         showClientsList={!CollectionUtils.isNullOrEmpty(userClients)}
                         createClient={this.createClient}
                         actionSearchCallback={this.actionSearch}
                         title={'HOME'}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userClients: state.clients.userClients,
        primaryUser: state.clients.primaryUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        showCreationScreen: () => dispatch(showCreationScreen()),
        getClients: (search) => dispatch(getClients(search)),
        getPrimaryUser: () => dispatch(getPrimaryUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ClientsScreen);