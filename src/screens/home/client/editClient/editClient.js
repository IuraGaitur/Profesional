import React, {Component} from 'react';
import {connect} from 'react-redux';
import {init, updateClient} from 'src/screens/home/client/editClient/editClientAction';
import EditClientView  from 'src/screens/home/client/editClient/editClientView';
import moment from "moment";

class EditClientScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = props;
    }

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
        this.changeClient('birthday', moment(time).format('YYYY-MM-DD'));
        this.setState({showDatePicker: false});
    };

    hideDatePicker = () => {
        this.setState({showDatePicker: false});
    };

    saveChanges = () => {
        let client = this.state.currentClient;
        this.props.updateClient(client);
    };

    render() {
        const {countries, languages, genders} = this.props;
        const {currentClient, showDatePicker} = this.state;

        return (
            <EditClientView client={currentClient}
                            actionChangeClientCallback={this.changeClient}
                            countries={countries}
                            languages={languages}
                            genders={genders}
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
        countries: state.splash.countries,
        languages: state.splash.languages,
        genders: state.splash.genders
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateClient: (client) => {dispatch(updateClient(client))}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditClientScreen);