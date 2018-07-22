import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import CardSelectableProduct from 'src/views/native_elements/cardSelectableProduct';
import PickerInput from 'src/views/form/pickerInput';
import ContentFlex from 'src/views/native_elements/contentFlex';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import BackMenu from 'src/views/menu/backMenu';
import {Button, Icon} from 'native-base';
import MainStyle from 'src/utils/mainStyle';
import CircleButton from 'src/views/native_elements/circleButton';
import {GRAY_LIGHT, PINK, PRIMARY} from 'src/utils/colors';

export default class SelectTreatmentProductsView extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            showProductDetails, products, categories,
            selectedCategory, actionChangeProductsCallback, actionSave
        } = this.props;

        return (
            <ContainerFlex>
                <BackMenu title='MODIFY CARE SYSTEM' actions={
                    <Button rounded transparent onPress={() => actionSave()}>
                        <Icon name='checkmark' style={MainStyle.saveButton}/>
                    </Button>
                }/>
                <ContentFlex scrollable={false}>
                    <View style={styles.mainContainer}>
                        <View style={{width: '100%', height: 41}}>
                            <PickerInput
                                items={categories}
                                valueChangeCallBack={(type) => actionChangeProductsCallback(type)}
                                needValidation value={selectedCategory}
                                mode={'dropdown'}/>
                        </View>
                        <ContentFlex scrollable>
                            <View style={styles.container}>
                                {products && products.map((item, pos) =>
                                    <CardSelectableProduct key={pos}
                                                 title={item.name}
                                                 picture={item.image}
                                                 onPress={showProductDetails}

                                    />)}
                            </View>
                        </ContentFlex>
                    </View>
                    <View style={styles.footer}>
                        <CircleButton color={PINK} text='A3'/>
                        <CircleButton color={PINK} text='B2'/>
                        <CircleButton color={PRIMARY} text='D12'/>
                    </View>
                </ContentFlex>
            </ContainerFlex>
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
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: GRAY_LIGHT,
        flex: 1,
        position: 'absolute',
        width: '100%',
        bottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        padding: 4
    }
});

SelectTreatmentProductsView.defaultProps = {
    title: 'ProductsView'
};


SelectTreatmentProductsView.propTypes = {
    title: PropTypes.string,
    products: PropTypes.array,
    categories: PropTypes.array,
    selectedCategory: PropTypes.string,
    actionChangeProductsCallback: PropTypes.func,
    actionSave: PropTypes.func,
    showProductDetails: PropTypes.func,
};
