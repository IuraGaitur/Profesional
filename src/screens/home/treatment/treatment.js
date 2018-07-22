import React, {Component} from 'react';
import {connect} from 'react-redux';
import TreatmentView from 'src/screens/home/treatment/treatmentView';
import {init, saveClientTreatment, showInfoScreen, showProductInfo, modifyTreatment, treatmentProducts, selectTreatmentProducts} from 'src/screens/home/treatment/treatmentAction';
import Treatment from 'src/data/models/treatment/treatment';

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
        }
    ];

    constructor(props) {
        super(props);
        this.state = {...props, showMessageDialog: false};
        this.props.init();
    }

    actionInfo = () => {
        this.props.showInfoScreen()
    };

    actionSave = () => {
        let diagnosis = this.state.diagnosis;
        let newClient = this.state.newClient;
        let treatment = new Treatment();
        this.props.saveClientTreatment(newClient, diagnosis, treatment);

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
        this.props.selectTreatmentProducts();
    };
    actionEssentials = () => {

    };
    actionShowProducts = () => {
        this.props.treatmentProducts();
    };
    actionModifyTreatment = () => {
        this.props.modifyTreatment();
    };

    showProductDetails = (id) => {
        this.props.showProductDetails(id);
    };

    showMessageDialog = () => {
        this.setState({showMessageDialog: true});
    };

    actionHideMessageDialog = () => {
        this.setState({showMessageDialog: false});
    };

    actionMessageConfirm = () => {
        this.setState({showMessageDialog: false});
        this.refs.treatmentView.showMessageSendWithSuccess('Message send with success');
    };

    render() {
        const {diagnosis, showMessageDialog} = this.state;
        return (
            <TreatmentView ref='treatmentView'
                           products={this.products}
                           actionInfo={this.actionInfo}
                           actionEdit={this.actionEdit}
                           actionEssentials={this.actionEssentials}
                           actionCareInfo={this.actionCareInfo}
                           actionCodeInfo={this.actionCodeInfo}
                           actionInfoTreatment={this.actionInfoTreatment}
                           actionInfoEmailSend={this.showMessageDialog}
                           actionModifyTreatment={this.actionModifyTreatment}
                           actionSave={this.actionSave}
                           diagnosis={diagnosis}
                           actionShowProducts={this.actionShowProducts}
                           actionProductClick={this.showProductDetails}
                           showMessageDialog={showMessageDialog}
                           actionHideMessageDialog={this.actionHideMessageDialog}
                           actionMessageConfirm={this.actionMessageConfirm}
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
        saveClientTreatment: (client, diagnosis, treatment) => dispatch(saveClientTreatment(client, diagnosis, treatment)),
        showInfoScreen: () => dispatch(showInfoScreen()),
        showProductDetails: (id) => dispatch(showProductInfo(id)),
        modifyTreatment: () => dispatch(modifyTreatment()),
        treatmentProducts: () => dispatch(treatmentProducts()),
        selectTreatmentProducts: () => dispatch(selectTreatmentProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentScreen);