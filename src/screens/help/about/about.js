import React, {Component} from 'react';
import {connect} from 'react-redux';
import AboutView  from 'src/screens/help/about/aboutView';

class AboutScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AboutView url={this.props.url} title={this.props.title}/>
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