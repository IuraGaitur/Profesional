import React, { Component } from 'react';
import { connect } from 'react-redux';
import {showCreationScreen, getClients, getPrimaryUser} from './clientDetailsAction';
import ClientDetailsView from "./clientDetailsView";
import CollectionUtils from "../../../../utils/CollectionUtils";

class ClientDetailsScreen extends Component {

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
        const {client} = this.props;
        return (
            <ClientDetailsView client={client}/>
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

export default connect(mapStateToProps, mapDispatchToProps) (ClientDetailsScreen);