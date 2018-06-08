import React, {Component} from 'react';
import {connect} from 'react-redux';
import {init, createClient, goBack, startDiagnosis} from './createClientAction';
import CreateClientView  from './createClientView';

class CreateClientScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    async componentDidMount() {
        this.getInitData();
    }

    getInitData = () => {
        this.props.getInitData();
    };

    startDiagnosis = () => {
        this.props.startDiagnosis();
    };

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.errorMessage) {
            this.showError(nextProps.errorMessage);
        }
    }

    registerUser = (user) => {
        this.props.register(user);
    };

    goBack = () => {
        this.props.goBack();
    };

    showInfo = () => {
        this.props.showInfo();
    };

    showError = (errorMessage) => {
        this.refs.errorToast.show(errorMessage);
    };

    dismissDialogCallback = () => {
        this.setState({...this.state, networkError: false});
    };

    render() {
        const {countries, languages, networkError, showLoading} = this.props;

        return (
            <CreateClientView registerCallback={user => this.registerUser(user)}
                              countries={countries}
                              languages={languages}
                              actionBack={() => this.goBack()}
                              showNetworkError={networkError}
                              showLoading={showLoading}
                              startDiagnosisCallback={this.startDiagnosis}
                              dismissDialogCallback={this.dismissDialogCallback}/>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.createClient.countries,
        languages: state.createClient.languages,
        showLoading: state.createClient.showLoading,
        errorMessage: state.createClient.errorMessage,
        networkError: state.createClient.networkError,
        user: state.createClient.user,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInitData: () => {
            dispatch(init())
        },
        createClient: (user) => {
            dispatch(createClient(user))
        },
        goBack: () => {
            dispatch(goBack)
        },
        startDiagnosis: () => {
            dispatch(startDiagnosis)
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientScreen);