import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import CardProduct from 'src/views/native_elements/cardProduct';
import PickerInput from 'src/views/form/pickerInput';
import ContentFlex from 'src/views/native_elements/contentFlex';

export default class ProductsPage extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {products, showProductDetails, categories, selectedCategory, actionChangeProductsCallback} = this.props;

        return (
            <ContentFlex scrollable={false}>
                <View style={styles.mainContainer}>
                    <View style={{width: '100%', height: 41}}>
                        <PickerInput
                            items={categories}
                            valueChangeCallBack={(type) => actionChangeProductsCallback(type)}
                            needValidation value={selectedCategory}
                            mode={'dropdown'}
                        />
                    </View>
                    <ContentFlex scrollable>
                        <View style={styles.container}>
                            {products && products.map((item, index) =>
                                <CardProduct key={item.name + '_' + index}
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
    selectedCategory: PropTypes.string,
    categories: PropTypes.array,
    products: PropTypes.array
};
