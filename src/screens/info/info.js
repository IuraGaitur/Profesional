import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfoView  from './infoView';

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
        this.props.navigation.goBack(null);
    };

    search = (keyword) => {
        //Todo search
    };

    render() {
        const {} = this.state;

        return (
            <InfoView closeCallback={this.closeView}
                      showLoading={false}
                      searchCallback={this.search}  />
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