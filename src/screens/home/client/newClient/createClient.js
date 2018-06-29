import React, {Component} from 'react';
import {connect} from 'react-redux';
import {init, startDiagnosis, showCookieInfo, showPrivacyInfo} from './createClientAction';
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

    startDiagnosis = (newClient) => {
        this.props.startDiagnosis(newClient);
    };

    actionFindAboutCookie = () => {
        this.props.showCookieInfo();
    };

    actionFindAboutPrivacy = () => {
        this.props.showPrivacyInfo();
    };

    render() {
        const {countries, languages} = this.props;

        return (
            <CreateClientView countries={countries}
                              languages={languages}
                              startDiagnosisCallback={this.startDiagnosis}
                              actionFindAboutCookieCallback={this.actionFindAboutCookie}
                              actionFindAboutPrivacyCallback={this.actionFindAboutPrivacy}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.createClient.countries,
        languages: state.createClient.languages,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getInitData: () => {
            dispatch(init())
        },
        startDiagnosis: (newClient) => {
            dispatch(startDiagnosis(newClient))
        },
        showCookieInfo: () => {
            dispatch(showCookieInfo())
        },
        showPrivacyInfo: () => {
            dispatch(showPrivacyInfo())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientScreen);