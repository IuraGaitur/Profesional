import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutView  from './aboutView';

class AboutScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AboutView url={this.props.url}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutScreen);