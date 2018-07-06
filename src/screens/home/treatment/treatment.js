import React, {Component} from 'react';
import {connect} from 'react-redux';
import TreatmentView from 'src/screens/home/treatment/treatmentView';
import {init, saveClient, showInfoScreen} from 'src/screens/home/treatment/treatmentAction';

class TreatmentScreen extends Component {

    static navigationOptions = {header: null};
    products = [
        {
            'name': 'BALANCE SHAMPOO',
            'type': 'B1',
            'image': 'assets/images/prod_1.png'
        },
        {
            'name': 'BALANCE MASK',
            'type': 'B1',
            'image': 'assets/images/prod_3.png'
        },
        {
            'name': 'BALANCE ENERGY SURUM',
            'type': 'B1',
            'image': 'assets/images/prod_3.png'
        },
        {
            'name': 'BALANCE LOTION',
            'type': 'B1',
            'image': 'assets/images/prod_4.png'
        },
        {
            'name': 'BALANCE SHAMPOO',
            'type': 'B1',
            'image': 'assets/images/prod_5.png'
        }
    ];

    constructor(props) {
        super(props);
        this.props.init();
    }

    actionInfo = () => {
        this.props.showInfoScreen()
    };

    actionSave = () => {
        let newClient = this.props.newClient;
        this.props.saveClient(newClient);

    };
    actionCodeInfo = () => {
        this.refs.treatmentView.showInfoDialog(this.props.codeInfo);
    };
    actionCareInfo = () => {
        this.refs.treatmentView.showInfoDialog(this.props.careInfo);
    };
    actionInfoTreatment = () => {

    };
    actionEdit = () => {

    };
    actionEssentials = () => {

    };
    actionShowProducts = () => {

    };
    actionModifyTreatment = () => {

    };

    render() {
        return (
            <TreatmentView ref='treatmentView'
                           products={this.products}
                           actionInfo={this.actionInfo}
                           actionEdit={this.actionEdit}
                           actionEssentials={this.actionEssentials}
                           actionCareInfo={this.actionCareInfo}
                           actionCodeInfo={this.actionCodeInfo}
                           actionInfoTreatment={this.actionInfoTreatment}
                           actionModifyTreatment={this.actionModifyTreatment}
                           actionSave={this.actionSave}
                           actionShowProducts={this.actionShowProducts}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        codeInfo: state.treatment.codeInfo,
        careInfo: state.treatment.careInfo,

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: () => dispatch(init()),
        saveClient: (client) => dispatch(saveClient(client)),
        showInfoScreen: () => dispatch(showInfoScreen())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentScreen);