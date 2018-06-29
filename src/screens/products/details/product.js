import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductView  from './productView';
import {Actions} from 'react-native-router-flux';

class ProductScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    async componentDidMount() {}


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
            <ProductView closeCallback={this.closeView}
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

export default connect(mapStateToProps, mapDispatchToProps) (ProductScreen);