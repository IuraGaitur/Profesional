import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectTreatment} from 'src/screens/home/changeTreatment/changeTreatmentAction';
import ChangeTreatmentsView from 'src/screens/home/changeTreatment/changeTreatmentView';

class ChangeTreatmentsScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
    }

    selectTreatment = (id) => {
        this.props.selectTreatment(id);
    };

    render() {
        return (
            <ChangeTreatmentsView actionTreatmentClick={() => this.selectTreatment()}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectTreatment: (id) => (dispatch(selectTreatment(id)))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeTreatmentsScreen);