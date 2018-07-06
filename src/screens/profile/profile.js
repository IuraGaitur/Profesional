import React, {Component} from 'react';
import {connect} from 'react-redux';
import {init, getPrimaryUser, goBack, saveRequest} from './profileAction';
import ProfileView  from 'src/screens/profile/profileView';

class ProfileScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = this.props;
        this.props.getCountries();
        this.props.getPrimaryUser();
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        if (nextProps.errorMessage) {
            this.showError(nextProps.errorMessage);
        }
    }

    updatePrimaryUser = (user) => {
        this.props.save(user);
    };

    dismissDialogCallback = () => {
        this.setState({...this.state, networkError: false});
    };

    render() {
        const {countries, networkError, showLoading, primaryUser} = this.props;

        return (
            <ProfileView updatePrimaryUserCallback={user => this.updatePrimaryUser(user)}
                         countries={countries}
                         showNetworkError={networkError}
                         showLoading={showLoading}
                         primaryUser={primaryUser}
                         title={'Profile'}
                         dismissDialogCallback={this.dismissDialogCallback}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.profile.countries,
        showLoading: state.profile.showLoading,
        errorMessage: state.profile.errorMessage,
        networkError: state.profile.networkError,
        primaryUser: state.profile.user,
        isLoggedIn: state.profile.isLoggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => {
            dispatch(init())
        },
        save: (user) => {
            dispatch(saveRequest(user))
        },
        goBack: () => {
            dispatch(goBack)
        },
        getPrimaryUser: () => dispatch(getPrimaryUser())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);