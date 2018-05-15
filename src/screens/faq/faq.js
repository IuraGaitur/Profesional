import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainView  from './faqView';

class MainScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static start(navigation) {
        navigation.navigate('Main');
    }

    async componentDidMount() {}

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoggedIn) {
            this.loginSuccess();
        } else {
            this.showError(nextProps.errorMessage);
        }
    }

    selectPage = (position) => {

    };

    render() {
        const {} = this.state;

        return (
            <MainView title={'HOME'} user={{email:"iura.gaitur@gmail.com"}}
                      selectPageCalback={this.selectPage.bind(this)}
                      menuItems={[{id:0, title: 'Data'}]}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps) (MainScreen);