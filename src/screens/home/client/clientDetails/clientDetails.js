import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientDetailsView from 'src/screens/home/client/clientDetails/clientDetailsView';
import {editClient, removeClient} from 'src/screens/home/client/clientDetails/clientDetailsAction';

class ClientDetailsScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    actionEditClient = (client) => {
        this.props.editClient(client);
    };

    actionDeleteClient = (client) => {
        this.props.removeClient(client);
    };

    render() {
        const {client} = this.props;
        return (
            <ClientDetailsView
                client={client}
                actionEditClick={this.actionEditClient}
                actionDeleteClick={this.actionDeleteClient}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        editClient: (client) => dispatch(editClient(client)),
        removeClient: (client) => dispatch(removeClient(client))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsScreen);