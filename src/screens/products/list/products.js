import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts, getProductsCategories, showDetails} from 'src/screens/products/list/productsAction';
import ProductsView from 'src/screens/products/list/productsView';
import ProductManager from 'src/data/models/product/ProductManager';

class ProductsScreen extends Component {

    static navigationOptions = {header: null};
    productManager = new ProductManager();

    constructor(props) {
        super(props);
        this.state = {
            careProducts: [], stylingProducts: [],
            careCategories: [], stylingCategories: []
        };
    }

    componentWillMount() {
        this.props.getProducts();
        this.props.getProductsCategories();
    }

    showProductDetails = (id) => {
        this.props.showProductDetails(id);
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.categories) {
            this.setState({
                careCategories: nextProps.categories.care,
                stylingCategories: nextProps.categories.styling,
            });
        }
        if (nextProps.categories && nextProps.products) {
            this.productManager.setProducts(nextProps.products);
            let careValue = nextProps.categories.care[0].value;
            let stylingValue = nextProps.categories.styling[0].value;

            this.setState({
                careProducts: this.productManager.getCareProductsOnCategory(careValue),
                stylingProducts: this.productManager.getStylingProductsOnCategory(stylingValue)
            });
        }
    }

    actionChangeCareType = (value) => {
        this.setState({
            careSelectedCategory: value,
            careProducts: this.productManager.getCareProductsOnCategory(value)
        });
    };

    actionChangeStylingType = (value) => {
        this.setState({
            stylingSelectedCategory: value,
            stylingProducts: this.productManager.getStylingProductsOnCategory(value)
        });
    };

    render() {
        const {
            careProducts, stylingProducts,
            careCategories, stylingCategories,
            careSelectedCategory, stylingSelectedCategory
        } = this.state;

        return (
            <ProductsView title={'Products'}
                          careProducts={careProducts}
                          careProductsType={careCategories}
                          careSelectedProductType={careSelectedCategory}
                          careActionChangeProductsCallback={this.actionChangeCareType}
                          stylingProducts={stylingProducts}
                          stylingProductsType={stylingCategories}
                          stylingSelectedProductType={stylingSelectedCategory}
                          stylingActionChangeProductsCallback={this.actionChangeStylingType}
                          showProductDetails={this.showProductDetails}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data,
        categories: state.products.categories,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: () => dispatch(getProducts()),
        getProductsCategories: () => dispatch(getProductsCategories()),
        showProductDetails: (id) => dispatch(showDetails(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsScreen);