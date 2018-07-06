import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    init,
    startDiagnosis,
    showCookieInfo,
    showPrivacyInfo
} from 'src/screens/home/client/editClient/editClientAction';
import EditClientView  from 'src/screens/home/client/editClient/editClientView';
import moment from "moment";

class EditClientScreen extends Component {

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

    changeClient = (item, value) => {
        let client = this.state.currentClient;
        client[item] = value;
        this.setState({currentClient: client});
    };

    showDatePicker = () => {
        this.setState({showDatePicker: true});
    };

    handleDatePicked = (time) => {
        this.changeClient('birthDate', moment(time).format('YYYY-MM-DD'));
        this.setState({showDatePicker: false});
    };

    hideDatePicker = () => {
        this.setState({showDatePicker: false});
    };

    saveChanges = () => {

    };

    render() {
        const {countries, languages, currentClient, showDatePicker} = this.state;

        return (
            <EditClientView client={currentClient}
                            actionChangeClientCallback={this.changeClient}
                            countries={countries}
                            languages={languages}
                            startDiagnosisCallback={this.startDiagnosis}
                            actionFindAboutCookieCallback={this.actionFindAboutCookie}
                            actionFindAboutPrivacyCallback={this.actionFindAboutPrivacy}
                            actionHandleDatePicked={this.handleDatePicked}
                            actionHideDateTimePicker={this.hideDatePicker}
                            showDatePicker={showDatePicker}
                            actionShowDatePicker={this.showDatePicker}
                            actionSaveChanges={this.saveChanges}
            />

        );
    }
}

const mapStateToProps = (state) => {
    return {

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

export default connect(mapStateToProps, mapDispatchToProps)(EditClientScreen);