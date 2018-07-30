import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';
import BigSelectableButton from 'src/views/native_elements/bigSelectableButton';
import {PRIMARY_LIGHT, PINK, SECONDARY_COLOR} from 'src/utils/colors';

export default class ChangeTreatmentView extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {actionTreatmentClick} = this.props;

        return (
            <ContainerFlex>
                <BackMenu title={'MODIFY TREATMENT'}/>
                <ContentFlex scrollable padding={16}>
                    <BigSelectableButton text='ENERGY SCALP' color={PRIMARY_LIGHT} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='ENERGY BLOW DRY' color={PRIMARY_LIGHT} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='MOLECULAR HAIR REFILLING' color={PRIMARY_LIGHT} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='ESSENTIAL' color={PINK} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='COLOR LOCK' color={PINK} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='PERM LOCK' color={PINK} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='INTENSE' color={SECONDARY_COLOR} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='REBORN' color={SECONDARY_COLOR} onPress={() => actionTreatmentClick()}/>
                    <BigSelectableButton text='DETOX' color={SECONDARY_COLOR} onPress={() => actionTreatmentClick()}/>
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

ChangeTreatmentView.defaultProps = {};


ChangeTreatmentView.propTypes = {
    actionTreatmentClick: PropTypes.func
};
