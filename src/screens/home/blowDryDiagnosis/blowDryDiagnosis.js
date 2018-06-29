import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack, init, createTreatment} from './blowDryDiagnosisAction';
import BlowDryDiagnosisView  from './blowDryDiagnosisView';

class BlowDryDiagnosisScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {showEditAction: false};
    }

    componentDidMount() {
        this.props.getDiagnosisQuiz();
    }

    goBack = () => {
        this.props.goBack();
    };

    createTreatment = () => {
        let newClient = this.props.newClient;
        this.props.createTreatment(newClient);
    };

    actionPageSelected = (position, totalPages) => {
        let showEditAction = position == totalPages - 1;
        this.setState({showEditAction: showEditAction});
    };

    render() {
        const {diagnosisQuiz} = this.props;
        const {showEditAction} = this.state;

        return <BlowDryDiagnosisView diagnosisQuiz={diagnosisQuiz}
                                     showEditAction={showEditAction}
                                     actionCreate={this.createTreatment}
                                     actionPageSelectedCallback={this.actionPageSelected}
                                     dismissDialogCallback={this.dismissDialogCallback}/>
    }
}

const mapStateToProps = (state) => {
    return {
        diagnosisQuiz: state.blowDry.diagnosisQuiz
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getDiagnosisQuiz: () => {dispatch(init())},
        createTreatment: (newClient) => {dispatch(createTreatment(newClient));}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlowDryDiagnosisScreen);