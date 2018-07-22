import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCareProducts, showDetails, saveTreatmentProducts} from 'src/screens/products/selectTreatmentProducts/selectTreatmentProductsAction';
import SelectTreatmentProductsView from 'src/screens/products/selectTreatmentProducts/selectTreatmentProductsView';

class SelectTreatmentProductsScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {selectedCareCategory: ''};
    }

    componentWillMount() {
        this.props.getCareProducts();
    }

    showProductDetails = (id) => {
        this.props.showProductDetails(id);
    };

    actionChangeCategory = (categoryID) => {
        this.props.getCareProducts(categoryID);
    };

    saveSelectedTreatment = () => {
        this.props.saveTreatmentProducts();
    };

    render() {
        const {products, categories} = this.props;
        const {selectedCareCategory} = this.state;

        return (
            <SelectTreatmentProductsView title={'Products'}
                          products={products}
                          selectedCategory={selectedCareCategory}
                          categories={[]}
                          actionChangeProductsCallback={this.actionChangeCategory}
                          showProductDetails={this.showProductDetails}
                          actionSave={this.saveSelectedTreatment}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.selectTreatmentProducts.careProducts,
        categories: state.splash.productsCategories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCareProducts: (categoryID) => dispatch(getCareProducts(categoryID)),
        showProductDetails: (id) => dispatch(showDetails(id)),
        saveTreatmentProducts: () => dispatch(saveTreatmentProducts())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectTreatmentProductsScreen);