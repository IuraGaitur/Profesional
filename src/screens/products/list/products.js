import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getProducts} from './productsAction';
import ProductsView from "./productsView";

class ProductsScreen extends Component {

    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {};
        this.props.getProducts();
    }


    render() {
        return (
            <ProductsView products={this.props.products} title={'Products'}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (type) => dispatch(getProducts(type))
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (ProductsScreen);