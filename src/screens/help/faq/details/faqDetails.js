import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaqDetailsView  from 'src/screens/help/faq/details/faqDetailsView';
import {getQuestions, goContacts, goBack} from 'src/screens/help/faq/details/faqDetailsAction';

class FaqDetailsScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getQuestions();
    }

    searchCallback = (string) => {
        this.props.getQuestions(string);
    };

    backCallback = () => {
        this.props.goBack();
    };

    contactCallback = () => {
        this.props.goContacts();
    };

    render() {
        const {question} = this.props;
        return (
            <FaqDetailsView searchCallback={this.searchCallback} backCallback={this.backCallback}
                     contactCallback={this.contactCallback}
                     question={question}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        questions: state.faq.questions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getQuestions: (string) => dispatch(getQuestions(string)),
        goContacts: () => dispatch(goContacts()),
        goBack: () => dispatch(goBack())
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (FaqDetailsScreen);