import React, { Component } from 'react';
import { connect } from 'react-redux';
import FaqView  from 'src/screens/help/faq/list/faqView';
import {getQuestions, goContacts, goBack} from 'src/screens/help/faq/list/faqAction';

class FaqScreen extends Component {

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
        const {questions} = this.props;
        return (
            <FaqView searchCallback={this.searchCallback} backCallback={this.backCallback}
                     contactCallback={this.contactCallback}
                     questions={questions}/>
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

export default connect(mapStateToProps, mapDispatchToProps) (FaqScreen);