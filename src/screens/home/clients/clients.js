import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getPrimaryUser} from './clientsAction';
import ClientsView from "./clientsView";

class ClientsScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.props.getPrimaryUser();
    }

    render() {
        const {primaryUser} = this.props;
        return (
            <ClientsView primaryUser={primaryUser}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        primaryUser: state.clients.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPrimaryUser: () => dispatch(getPrimaryUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ClientsScreen);