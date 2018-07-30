import React, {Component} from 'react';
import {connect} from 'react-redux';
import {goBack, init, createTreatment} from 'src/screens/home/blowDryDiagnosis/blowDryDiagnosisAction';
import BlowDryDiagnosisView  from 'src/screens/home/blowDryDiagnosis/blowDryDiagnosisView';
import Diagnosis from 'src/data/models/diagnosis/diagnosis';

class BlowDryDiagnosisScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {showEditAction: false, diagnosis: new Diagnosis()};
    }

    componentDidMount() {
        this.props.getDiagnosisQuiz();
    }

    goBack = () => {
        this.props.goBack();
    };

    createTreatment = () => {
        let newClient = this.props.newClient;
        let diagnosis = this.state;
        this.props.createTreatment(newClient, diagnosis);
    };

    actionPageSelected = (position, totalPages) => {
        //let showEditAction = position == totalPages - 1;
        let showEditAction = false;
        this.setState({showEditAction: showEditAction});
    };

    changeDiagnosisQuestionary = (diagnosis) => {
        this.setState({diagnosis: diagnosis});
    };

    editDiagnosis = () => {
        //Todo edit diagnosis of slider inputs, as a feature is mostly useless
    };

    render() {
        const {diagnosisQuiz} = this.props;
        const {showEditAction, diagnosis} = this.state;

        return <BlowDryDiagnosisView diagnosis={diagnosis}
                                     diagnosisQuiz={diagnosisQuiz}
                                     showEditAction={showEditAction}
                                     actionCreate={this.createTreatment}
                                     actionPageSelectedCallback={this.actionPageSelected}
                                     actionChangeDiagnosis={this.changeDiagnosisQuestionary}
                                     actionEdit={this.editDiagnosis}
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
        createTreatment: (newClient, diagnosis) => {dispatch(createTreatment(newClient, diagnosis));}
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlowDryDiagnosisScreen);