import React, {Component} from 'react';
import MainStyle from 'src/utils/mainStyle';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR,} from 'src/utils/colors';
import {Button, Icon, Thumbnail} from 'native-base';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import BackMenuLogo from 'src/views/menu/backMenuLogo';
import ContentFlex from 'src/views/native_elements/contentFlex';
import SubmitButton from 'src/views/native_elements/submitButton';
import Divider from 'src/views/native_elements/divider';
import BigButton from 'src/views/native_elements/bigButton';
import Formula from 'src/views/native_elements/formula';
import Space from 'src/views/native_elements/space';
import CardProduct from 'src/views/native_elements/cardProduct';
import {BLOW_DRY} from 'src/data/models/treatment/treatmentType';
import MessageDialog from 'src/views/dialogs/messageDialog';

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
            actionCodeInfo, actionCareInfo, actionEdit, diagnosis,
            actionEssentials, actionShowProducts, actionModifyTreatment,
            actionProductClick, showMessageDialog, actionHideMessageDialog, actionMessageConfirm
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
                        <SubmitButton text={'SEND BY EMAIL'} onPress={() => actionInfoEmailSend()}/>
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
                        <Text style={[MainStyle.primary, {paddingTop: 12}]}>CARE PRODUCTS</Text>
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
                            <CardProduct key={item.name} title={item.name} picture={item.image} onPress={() => {
                                actionProductClick(item.id)
                            }}/>)}
                    </View>

                    <View style={MainStyle.centerAlign}>
                        <Text style={[MainStyle.primary, {paddingTop: 12}]}>STYLING PRODUCTS</Text>
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
                            <CardProduct key={item.name} title={item.name} picture={item.image} onPress={() => {
                                actionProductClick(item.id)
                            }}/>)}
                    </View>

                    {diagnosis.type == BLOW_DRY &&
                        <View>
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
                                    <BigButton text={'ESSENTIALS'} color={'#FAD3C8'} onPress={() => actionEssentials()}
                                               disabled/>
                                    <BigButton text={'SHOW PRODUCTS'} color={'#E0EDEA'}
                                               onPress={() => actionShowProducts()}/>
                                </View>
                            </View>

                            <SubmitButton text={'MODIFY SYSTEM TREATMENT'} onPress={() => actionModifyTreatment()}/>
                        </View>}

                </ContentFlex>
                <MessageDialog visible={showMessageDialog} dismissCallback={actionHideMessageDialog} actionMessage={actionMessageConfirm}/>
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
    diagnosis: PropTypes.object,
    products: PropTypes.array,
    actionInfo: PropTypes.func,
    actionSave: PropTypes.func,
    actionInfoEmailSend: PropTypes.func,
    actionCodeInfo: PropTypes.func,
    actionCareInfo: PropTypes.func,
    actionEdit: PropTypes.func,
    actionEssentials: PropTypes.func,
    actionShowProducts: PropTypes.func,
    actionModifyTreatment: PropTypes.func,
    actionProductClick: PropTypes.func,

    showMessageDialog: PropTypes.bool,
    actionHideMessageDialog: PropTypes.func,
    actionMessageConfirm: PropTypes.func
};
