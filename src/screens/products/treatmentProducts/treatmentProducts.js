import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showDetails} from 'src/screens/products/treatmentProducts/treatmentProductsAction';
import TreatmentProductsView from 'src/screens/products/treatmentProducts/treatmentProductsView';

class TreatmentProductsScreen extends Component {

    static navigationOptions = {header: null};
    products = [{
        "name": "BALANCE SHAMPOO",
        "type": "B1",
        "image": "assets/images/prod_1.png"
        },
        {
            "name": "BALANCE SHAMPOO 2",
            "type": "B2",
            "image": "assets/images/prod_3.png"
        },
        {
            "name": "BALANCE SHAMPOO 3",
            "type": "B2",
            "image": "assets/images/prod_4.png"
        }];

    constructor(props) {
        super(props);
    }

    showProductDetails = (id) => {
        this.props.showProductDetails(id);
    };

    render() {
        return (
            <TreatmentProductsView products={this.products}
                                   actionProductClick={this.showProductDetails}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        showProductDetails: () => dispatch(showDetails())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TreatmentProductsScreen);