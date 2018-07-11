import moment from "moment";
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {saveRequest} from './profileAction';
import ProfileView  from 'src/screens/profile/profileView';

class ProfileScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.errorMessage) {
            this.showError(nextProps.errorMessage);
        }
    }

    changeUser = (item, value) => {
        let user = this.state.primaryUser;
        user[item] = value;
        this.setState({primaryUser: user});
    };

    updatePrimaryUser = (user) => {
        this.props.save(user);
    };

    dismissDialogCallback = () => {
        this.setState({...this.state, networkError: false});
    };

    showDatePicker = () => {
        this.setState({showDatePicker: true});
    };

    handleDatePicked = (time) => {
        this.changeUser('birthday', moment(time).format('YYYY-MM-DD'));
        this.setState({showDatePicker: false});
    };

    hideDatePicker = () => {
        this.setState({showDatePicker: false});
    };

    render() {
        const {primaryUser, showDatePicker} = this.state;
        const {countries, networkError, showLoading} = this.props;

        return (
            <ProfileView user={primaryUser}
                         updatePrimaryUserCallback={user => this.updatePrimaryUser(user)}
                         countries={countries}
                         showNetworkError={networkError}
                         showLoading={showLoading}
                         title={'Profile'}
                         showDatePicker={showDatePicker}
                         actionHideDateTimePicker={this.hideDatePicker}
                         actionHandleDatePicked={this.handleDatePicked}
                         actionShowDatePicker={this.showDatePicker}
                         dismissDialogCallback={this.dismissDialogCallback}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {

        showLoading: state.profile.showLoading,
        errorMessage: state.profile.errorMessage,
        networkError: state.profile.networkError,

        countries: state.splash.countries,
        primaryUser: state.splash.user,
        isLoggedIn: state.splash.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        save: (user) => {dispatch(saveRequest(user))},
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);