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
        this.props.createTreatment(newClient);
    };

    actionPageSelected = (position, totalPages) => {
        let showEditAction = position == totalPages - 1;
        this.setState({showEditAction: showEditAction});
    };

    changeDiagnosisQuestionary = (diagnosis) => {
        this.setState({diagnosis: diagnosis});
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