import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';
import Formula from 'src/views/native_elements/formula';
import CardProduct from 'src/views/native_elements/cardProduct';
import MainStyle from 'src/utils/mainStyle';

export default class TreatmentProductsView extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {products, actionProductClick} = this.props;

        return (
            <ContainerFlex>
                <BackMenu title={'SYSTEM TREATMENT'}/>
                <ContentFlex>
                    <View style={styles.formulaContainer}>
                        <Formula text={'C1 + L3 + BB61 + DD62'}/>
                    </View>
                    <View style={styles.productsContainer}>
                        {products && products.map(item =>
                            <CardProduct key={item.name} title={item.name} picture={item.image} onPress={() => {
                                actionProductClick(item.id)
                            }}/>)}
                    </View>
                </ContentFlex>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    productsContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    formulaContainer: {
        padding: 16
    }
});

TreatmentProductsView.defaultProps = {};


TreatmentProductsView.propTypes = {
    products: PropTypes.array,
    actionProductClick: PropTypes.func
};
