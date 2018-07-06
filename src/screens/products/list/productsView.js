import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import DrawerMenu from 'src/views/menu/DrawerMenu';
import {IndicatorViewPager, PagerTitleIndicator} from 'rn-viewpager';
import {LIGHT_COLOR, PRIMARY, TEXT_COLOR} from 'src/utils/Colors';
import ProductsPage from './pages/ProductsPage';
const HALF_SCREEN_WIDTH = Dimensions.get('window').width / 2;

export default class ProductsView extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    _renderTabIndicator() {
        return <PagerTitleIndicator style={styles.indicatorContainer}
                                    titles={['CARE PRODUCTS', 'STYLING PRODUCTS']}
                                    itemStyle={{width: HALF_SCREEN_WIDTH}}
                                    itemTextStyle={{width: HALF_SCREEN_WIDTH, textAlign: 'center'}}
                                    selectedBorderStyle={{width: HALF_SCREEN_WIDTH, backgroundColor: PRIMARY}}
                                    selectedItemTextStyle={{width: HALF_SCREEN_WIDTH,fontWeight: 'bold', textAlign: 'center', color: TEXT_COLOR}}/>;
    }

    render() {
        const {
            title, showProductDetails,
            careProducts, careProductsType, careSelectedProductType, careActionChangeProductsCallback,
            stylingProducts, stylingProductsType, stylingSelectedProductType, stylingActionChangeProductsCallback,
        } = this.props;

        return (
            <DrawerMenu title={title}>
                <IndicatorViewPager style={{flex: 1, paddingTop: 50}}
                                    indicator={this._renderTabIndicator()}>
                    <View style={{backgroundColor: LIGHT_COLOR}}>
                        <ProductsPage products={careProducts}
                                      productsType={careProductsType}
                                      showProductDetails={showProductDetails}
                                      selectedProductsType={careSelectedProductType}
                                      actionChangeProductsCallback={careActionChangeProductsCallback}/>
                    </View>
                    <View style={{backgroundColor: LIGHT_COLOR}}>
                        <ProductsPage products={stylingProducts}
                                      productsType={stylingProductsType}
                                      showProductDetails={showProductDetails}
                                      selectedProductsType={stylingSelectedProductType}
                                      actionChangeProductsCallback={stylingActionChangeProductsCallback}/>
                    </View>
                </IndicatorViewPager>

            </DrawerMenu>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        padding: 8
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    indicatorContainer: {
        height: 50,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: LIGHT_COLOR
    },
});

ProductsView.defaultProps = {
    title: 'ProductsView'
};


ProductsView.propTypes = {
    title: PropTypes.string,
    careProducts: PropTypes.array,
    careProductsType: PropTypes.array,
    careSelectedProductType: PropTypes.string,
    careActionChangeProductsCallback: PropTypes.func,
    stylingProducts: PropTypes.array,
    stylingProductsType: PropTypes.array,
    stylingSelectedProductType: PropTypes.string,
    stylingActionChangeProductsCallback: PropTypes.func,
    showProductDetails: PropTypes.func,
};
