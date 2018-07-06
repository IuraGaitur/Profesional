import React, {Component} from 'react';
import MainStyle from 'src/views/MainStyle';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR,} from 'src/utils/Colors';
import {Button, Icon, Thumbnail} from 'native-base';
import ContainerFlex from 'src/views/native_elements/ContainerFlex';
import BackMenuLogo from 'src/views/menu/BackMenuLogo';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import SubmitButton from 'src/views/native_elements/SubmitButton';
import Divider from 'src/views/Divider';
import BigButton from 'src/views/native_elements/BigButton';
import Formula from 'src/views/Formula';
import Space from 'src/views/native_elements/Space';
import CardProduct from 'src/views/native_elements/CardProduct';

export default class TreatmentView extends Component {

    constructor(props) {
        super(props);
    }

    showInfoDialog(html) {
        this.refs.mainContainer.showInfoDialog(html);
    }

    render() {
        const {
            products, actionInfo, actionSave, actionInfoEmailSend,
            actionCodeInfo, actionCareInfo, actionEdit,
            actionEssentials, actionShowProducts, actionModifyTreatment
        } = this.props;

        return (
            <ContainerFlex ref='mainContainer'>
                <BackMenuLogo actions={
                    <View style={MainStyle.rightAlign}>
                        <Button transparent onPress={() => actionInfo()}>
                            <Icon name='information-circle' style={{color: GRAY_COLOR}}/>
                        </Button>
                        <Button rounded transparent onPress={() => actionSave()}>
                            <Icon name='checkmark' style={MainStyle.saveButton}/>
                        </Button>
                    </View>
                }/>
                <ContentFlex scrollable margin={16}>
                    <Text style={MainStyle.h3}>YOUR PERSONALIZED</Text>
                    <Text style={MainStyle.h3}>ENERGY CODE</Text>
                    <Formula text={'C1 + L3 + BB61 + DD62'}/>
                    <View style={MainStyle.rightAlign}>
                        <Button transparent onPress={() => actionCodeInfo()}>
                            <Icon name='information-circle' style={MainStyle.infoButton}/>
                        </Button>
                    </View>
                    <View style={MainStyle.defaultHorizontalMargin}>
                        <SubmitButton text={'SEND BY EMAIL'} onPress={() => actionInfoEmailSend}/>
                    </View>

                    <Space height={20}/>


                    <Text style={MainStyle.h3}>CARE SYSTEM</Text>
                    <Text style={styles.infoText}>TAP ON PRODUCTS TO DELETE</Text>
                    <View style={MainStyle.rightPosition}>
                        <Button transparent onPress={() => actionCareInfo()}>
                            <Icon name='information-circle' style={MainStyle.infoButton}/>
                        </Button>
                    </View>

                    <Space height={30}/>

                    <View style={MainStyle.centerAlign}>
                        <Text style={[MainStyle.primary, {paddingTop: 12}]}>BASE PRODUCTS</Text>
                        <View style={MainStyle.rightPosition}>
                            <Button transparent onPress={() => actionEdit()}>
                                <Text style={MainStyle.secondary}>Edit</Text>
                            </Button>
                        </View>
                    </View>
                    <Space height={10}/>
                    <Divider height={1}/>
                    <Space height={10}/>

                    <View style={styles.productsContainer}>
                        {products && products.map(item =>
                            <CardProduct key={item.name} title={item.name} picture={item.image} onPress={() => {}}/>)}
                    </View>

                    <Divider height={1}/>

                    <View style={MainStyle.centerAlign}>
                        <Text style={[MainStyle.h3, {paddingTop: 8}]}>SYSTEM TREATMENT:</Text>
                        <View style={MainStyle.rightPosition}>
                            <Button transparent onPress={() => actionCareInfo()}>
                                <Icon name='information-circle' style={MainStyle.infoButton}/>
                            </Button>
                        </View>
                    </View>

                    <Space height={15}/>
                    <View style={MainStyle.centerAlign}>
                        <View style={styles.imageContainer}>
                            <View style={MainStyle.centerAlign}>
                                <View style={styles.imageBorder}>
                                    <Thumbnail style={styles.image}
                                               source={require('Sytem_Pro/assets/images/img_hair_type.png')}/>
                                </View>
                            </View>
                            <BigButton text={'ESSENTIALS'} color={'#FAD3C8'} onPress={() => actionEssentials()} disabled/>
                            <BigButton text={'SHOW PRODUCTS'} color={'#E0EDEA'} onPress={() => actionShowProducts()}/>
                        </View>
                    </View>

                    <SubmitButton text={'MODIFY SYSTEM TREATMENT'} onPress={() => actionModifyTreatment()}/>


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
    infoText: {
        fontSize: 14,
        textAlign: 'center'
    },
    imageContainer: {
        width: 220,
        height: 'auto'
    },
    imageBorder: {
        width: 156,
        height: 156,
        borderWidth: 3,
        borderColor: '#FAD3C8'
    },
    image: {
        width: 150,
        height: 150
    }
});

TreatmentView.propTypes = {
    products: PropTypes.array,
    actionInfo: PropTypes.func,
    actionSave: PropTypes.func,
    actionInfoEmailSend: PropTypes.func,
    actionCodeInfo: PropTypes.func,
    actionCareInfo: PropTypes.func,
    actionEdit: PropTypes.func,
    actionEssentials: PropTypes.func,
    actionShowProducts: PropTypes.func,
    actionModifyTreatment: PropTypes.func
};
