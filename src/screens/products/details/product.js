import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoView  from './infoView';
import {Actions} from 'react-native-router-flux';

class InfoScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {}

    componentWillReceiveProps(nextProps) {
    }

    closeView = () => {
        Actions.pop();
    };

    search = (keyword) => {
        //Todo search
    };

    showFaqScreen = () => {
        Actions.faq();
    };

    showContactScreen = () => {
       Actions.contact();
    };

    render() {
        return (
            <InfoView closeCallback={this.closeView}
                      showLoading={false}
                      searchCallback={this.search}
                      contactCallback={this.showContactScreen}
                      faqCallback={this.showFaqScreen}  />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps) (InfoScreen);