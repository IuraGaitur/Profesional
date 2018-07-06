import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CardProduct from 'src/views/native_elements/CardProduct';
import PickerInput from 'src/views/form/PickerInput';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import {Text} from 'native-base';

export default class ProductsPage extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {products, showProductDetails, productsType, selectedProductsType, actionChangeProductsCallback} = this.props;

        return (
            <ContentFlex scrollable={false}>
                <View style={styles.mainContainer}>
                    <View style={{width: '100%', height: 46}}>
                        <PickerInput
                            items={productsType}
                            valueChangeCallBack={(type) => actionChangeProductsCallback(type)}
                            needValidation value={selectedProductsType}
                            mode={'dropdown'}
                        />
                    </View>
                    <ContentFlex scrollable>
                        <View style={styles.container}>
                            {products && products.map(item =>
                                <CardProduct key={item.name}
                                             title={item.name}
                                             picture={item.image}
                                             onPress={showProductDetails}
                                />)}
                        </View>
                    </ContentFlex>
                </View>
            </ContentFlex>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 16
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

ProductsPage.defaultProps = {};


ProductsPage.propTypes = {
    showProductDetails: PropTypes.func,
    actionChangeProductsCallback: PropTypes.func,
    selectedProductsType: PropTypes.string,
    productsType: PropTypes.array,
    products: PropTypes.array
};
