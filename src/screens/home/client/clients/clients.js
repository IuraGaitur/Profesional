import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Actions} from 'react-native-router-flux';
import ClientsView from 'src/screens/home/client/clients/clientsView';
import CollectionUtils from 'src/utils/CollectionUtils';
import {showCreationScreen, getClients, getPrimaryUser, showClientDetails, getAllClients} from 'src/screens/home/client/clients/clientsAction';

class ClientsScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.props.getPrimaryUser();
        this.props.getAllClients();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.needRefresh) {
            console.log("Need refresh");
            //this.props.getAllClients();
        }
    }

    createClient = () => {
        this.props.showCreationScreen();
    };

    actionSearch = (text) => {
        this.props.getClients(text);
    };

    actionClientClick = (client) => {
        this.props.showClientDetails(client);
    };

    actionRefreshClients = (text) => {
        this.props.getClients(text);
    };

    // static onEnter() {
    //     console.log("Enter");
    //     Actions.refresh({needRefresh: true})
    // }


    render() {
        const {allClients, userClients, isFetching} = this.props;
        return (
            <ClientsView userClients={userClients}
                         showClientsList={!CollectionUtils.isNullOrEmpty(allClients)}
                         createClient={this.createClient}
                         actionSearchCallback={this.actionSearch}
                         actionClientClick={this.actionClientClick}
                         actionRefreshClients={this.actionRefreshClients}
                         isFetching={isFetching}
                         title={'HOME'}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userClients: state.clients.userClients,
        allClients: state.clients.allClients,
        primaryUser: state.clients.primaryUser,
        isFetching: state.clients.isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPrimaryUser: () => dispatch(getPrimaryUser()),
        getClients: (search) => dispatch(getClients(search)),
        getAllClients: () => dispatch(getAllClients()),
        showCreationScreen: () => dispatch(showCreationScreen()),
        showClientDetails: (client) => dispatch(showClientDetails(client))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ClientsScreen);