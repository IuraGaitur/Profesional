import React, {Component} from 'react';
import {connect} from 'react-redux';
import ProductView  from 'src/screens/products/details/productView';
import {Actions} from 'react-native-router-flux';
import {addProduct, removeProduct} from 'src/screens/products/details/productAction';

class ProductScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = {};
    }

    closeView = () => {
        Actions.pop();
    };

    showFaqScreen = () => {
        Actions.faq();
    };

    showContactScreen = () => {
        Actions.contact();
    };

    addProduct = (id) => {
        this.props.addProduct(id);
    };

    removeProduct = (id) => {
        this.props.removeProduct(id);
    };

    render() {
        let {canAddProduct, canRemoveProduct} = this.props;
        return (
            <ProductView closeCallback={this.closeView}
                         showLoading={false}
                         searchCallback={this.search}
                         contactCallback={this.showContactScreen}
                         faqCallback={this.showFaqScreen}
                         canAddProduct={canAddProduct}
                         canRemoveProduct={canRemoveProduct}
                         actionAddProduct={this.addProduct}
                         actionRemoveProduct={this.removeProduct}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        addProduct: (id) => dispatch(addProduct(id)),
        removeProduct: (id) => dispatch(removeProduct(id)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductScreen);