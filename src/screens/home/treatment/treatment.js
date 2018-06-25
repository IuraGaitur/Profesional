import React, {Component} from 'react';
import {connect} from 'react-redux';
import TreatmentView from "./treatmentView";
import {saveClient} from "./treatmentAction";

class TreatmentScreen extends Component {

    static navigationOptions = {header: null};
    products = [
        {
            "name": "BALANCE SHAMPOO",
            "type": "B1",
            "image": "assets/images/prod_1.png"
        },
        {
            "name": "BALANCE MASK",
            "type": "B1",
            "image": "assets/images/prod_3.png"
        },
        {
            "name": "BALANCE ENERGY SURUM",
            "type": "B1",
            "image": "assets/images/prod_3.png"
        },
        {
            "name": "BALANCE LOTION",
            "type": "B1",
            "image": "assets/images/prod_4.png"
        },
        {
            "name": "BALANCE SHAMPOO",
            "type": "B1",
            "image": "assets/images/prod_5.png"
        }
    ];

    constructor(props) {
        super(props);
    }

    actionInfo = () => {

    };
    actionSave = () => {
        let newClient = this.props.newClient;
        this.props.saveClient(newClient);

    };
    actionInfoEmailSend = () => {

    };
    actionInfoDelete = () => {

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
            <TreatmentView products={this.products}
                           actionInfo={this.actionInfo}
                           actionEdit={this.actionEdit}
                           actionEssentials={this.actionEssentials}
                           actionInfoDelete={this.actionInfoDelete}
                           actionInfoEmailSend={this.actionInfoEmailSend}
                           actionInfoTreatment={this.actionInfoTreatment}
                           actionModifyTreatment={this.actionModifyTreatment}
                           actionSave={this.actionSave}
                           actionShowProducts={this.actionShowProducts}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        saveClient: (client) => dispatch(saveClient(client))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentScreen);