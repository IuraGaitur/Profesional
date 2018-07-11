import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClientDetailsView from 'src/screens/home/client/clientDetails/clientDetailsView';
import {
    getClientInfo,
    editClient,
    removeClient,
    showNewDiagnosScreen,
    showEditCodeScreen
} from 'src/screens/home/client/clientDetails/clientDetailsAction';

class ClientDetailsScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {showDeleteDialog: false, showMessageDialog: false};
        this.props.getCurrentClient(props.client._id);
    }

    actionEditClient = (client) => {
        this.props.editClient(client);
    };

    actionDeleteClient = (client) => {
        this.props.removeClient(client);
    };

    actionNewCode = (client) => {
        this.props.showNewDiagnosisScreen(client);
    };

    actionEditCode = (client) => {
        this.props.showEditCodeScreen(client);
    };

    actionDeleteCode = (client) => {
        this.setState({showDeleteDialog: true});
    };

    actionHideDeleteDialog = () => {
        this.setState({showDeleteDialog: false});
    };

    actionDeleteCodeConfirm = () => {
        this.setState({showDeleteDialog: false});
    };

    showNoNetworkError = () => {

    };

    showMessageDialog = () => {
        this.setState({showMessageDialog: true});
    };

    actionHideMessageDialog = () => {
        this.setState({showMessageDialog: false});
    };

    actionMessageConfirm = () => {
        this.setState({showMessageDialog: false});
        this.refs.view.showMessageSendWithSuccess('Message send with success');
    };

    render() {
        const {currentClient} = this.props;
        const {showDeleteDialog, showMessageDialog} = this.state;
        return (
            <ClientDetailsView
                ref="view"
                client={currentClient}
                actionEditClick={this.actionEditClient}
                actionDeleteClick={this.actionDeleteClient}
                actionEditCode={this.actionEditCode}
                actionNewCode={this.actionNewCode}
                actionDeleteCode={this.actionDeleteCode}
                actionMessage={this.showMessageDialog}
                showDeleteDialog={showDeleteDialog}
                showMessageDialog={showMessageDialog}
                actionHideDeleteDialog={this.actionHideDeleteDialog}
                actionDeleteCodeConfirm={this.actionDeleteCodeConfirm}
                actionHideMessageDialog={this.actionHideMessageDialog}
                actionMessageConfirm={this.actionMessageConfirm}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentClient: state.clientDetails.currentClient
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCurrentClient: (id) => dispatch(getClientInfo(id)),
        editClient: (client) => dispatch(editClient(client)),
        removeClient: (client) => dispatch(removeClient(client)),
        showNewDiagnosisScreen: (client) => dispatch(showNewDiagnosScreen(client)),
        showEditCodeScreen: (client) => dispatch(showEditCodeScreen(client))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientDetailsScreen);