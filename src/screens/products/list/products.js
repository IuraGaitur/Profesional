import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCareProducts, getStylingProducts, showDetails} from 'src/screens/products/list/productsAction';
import ProductsView from 'src/screens/products/list/productsView';

class ProductsScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {selectedCareCategory: '', selectedStylingCategory: ''};
    }

    componentWillMount() {
        this.props.getCareProducts();
        this.props.getStylingProducts();
    }

    showProductDetails = (id) => {
        this.props.showProductDetails(id);
    };

    actionChangeCareCategory = (categoryID) => {
        this.props.getCareProducts(categoryID);
    };

    actionChangeStylingCategory = (categoryID) => {
        this.props.getStylingProducts(categoryID);
    };

    render() {
        const {careProducts, stylingProducts, categories} = this.props;
        const {selectedCareCategory, selectedStylingCategory} = this.state;

        return (
            <ProductsView title={'Products'}
                          careProducts={careProducts}
                          selectedCareCategory={selectedCareCategory}
                          careCategories={categories.care}
                          careActionChangeProductsCallback={this.actionChangeCareCategory}
                          stylingProducts={stylingProducts}
                          stylingCategories={categories.styling}
                          selectedStylingCategory={selectedStylingCategory}
                          stylingActionChangeProductsCallback={this.actionChangeStylingCategory}
                          showProductDetails={this.showProductDetails}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        careProducts: state.products.careProducts,
        stylingProducts: state.products.stylingProducts,
        categories: state.splash.productsCategories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCareProducts: (categoryID) => dispatch(getCareProducts(categoryID)),
        getStylingProducts: (categoryID) => dispatch(getStylingProducts(categoryID)),
        showProductDetails: (id) => dispatch(showDetails(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);