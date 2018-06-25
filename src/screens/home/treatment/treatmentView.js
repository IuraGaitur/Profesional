import React, {Component} from 'react';
import MainStyle from './../../../views/MainStyle';
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {
    BACKGROUND_GRAY_COLOR,
    GRAY_COLOR,
    LIGHT_COLOR,
    PRIMARY,
    TEXT_COLOR,
    TEXT_GRAY_COLOR
} from '../../../utils/Colors';
import MenuItem from "../../../views/menu/MenuItem";
import {Body, Button, Icon, Left, Title, Header, Grid, Row, Thumbnail} from "native-base";
import ContainerFlex from "../../../views/native_elements/ContainerFlex";
import BackMenuLogo from "../../../views/menu/BackMenuLogo";
import ContentFlex from "../../../views/native_elements/ContentFlex";
import SubmitButton from "../../../views/native_elements/SubmitButton";
import Divider from "../../../views/Divider";
import BigButton from "../../../views/native_elements/BigButton";
import Formula from "../../../views/Formula";
import Space from "../../../views/native_elements/Space";
import CardProduct from "../../../views/native_elements/CardProduct";

export default class TreatmentView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            products, actionInfo, actionSave, actionInfoEmailSend,
            actionInfoDelete, actionInfoTreatment, actionEdit,
            actionEssentials, actionShowProducts, actionModifyTreatment
        } = this.props;

        return (
            <ContainerFlex>
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
                        <Button transparent onPress={() => actionInfoEmailSend()}>
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
                        <Button transparent onPress={() => actionInfoDelete()}>
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
                            <CardProduct key={item.name} title={item.name} picture={item.image}/>)}
                    </View>

                    <Divider height={1}/>

                    <View style={MainStyle.centerAlign}>
                        <Text style={[MainStyle.h3, {paddingTop: 8}]}>SYSTEM TREATMENT:</Text>
                        <View style={MainStyle.rightPosition}>
                            <Button transparent onPress={() => actionInfoTreatment()}>
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
                                               source={require('./../../../../assets/images/img_hair_type.png')}/>
                                </View>
                            </View>
                            <BigButton text={'ESSENTIALS'} color={'#FAD3C8'} onPress={() => actionEssentials()}/>
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
    actionInfoDelete: PropTypes.func,
    actionInfoTreatment: PropTypes.func,
    actionEdit: PropTypes.func,
    actionEssentials: PropTypes.func,
    actionShowProducts: PropTypes.func,
    actionModifyTreatment: PropTypes.func
};
