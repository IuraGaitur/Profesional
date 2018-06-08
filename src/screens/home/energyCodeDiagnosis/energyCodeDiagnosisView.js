import PropTypes from 'prop-types';
import React, {Component} from 'react';
import NetworkErrorDialog from "../../../views/NetworkErrorDialog";
import {Icon} from "react-native-elements";
import {GRAY_COLOR, LIGHT_COLOR, SELECTED,} from '../../../utils/Colors';
import {View, StyleSheet, Dimensions, ScrollView, Platform} from "react-native";
import {Body, Left, Button, Header, Label, Text, Title, Right, Thumbnail} from "native-base";
import Message from "../../../data/models/Message";
import {IndicatorViewPager, PagerDotIndicator} from "rn-viewpager";
import SelectPage from "../../../views/pages/selectPage";
import PickerSelectPage from "../../../views/pages/pickerSelectPage";
import BackMenuLogo from "../../../views/menu/BackMenuLogo";
import ContainerFlex from "../../../views/native_elements/ContainerFlex";
import ChoosePage from "../../../views/pages/choosePage";

export default class EnergyCodeDiagnosisView extends Component {

    formInputs = [];
    message = new Message();

    constructor(props) {
        super(props);
        this.state = {fullName: '', email: '', subject: '', salonName: '', city: '', message: ''}
    }

    sendMessage = (e) => {
        let areFieldsValid = this.refs.formData.validate(this.formInputs);
        if (areFieldsValid) {
            this.props.registerCallback(this.user);
        }
    };

    updateForm = (item, value) => {
        this.setState({[item]: value});
        this.user[item] = value;
    };

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} dotStyle={styles.dot}
                                    selectedDotStyle={styles.selectedDot}/>;
    }

    render() {
        const { fullName, email, subject, issue, country, message} = this.state;
        const {showLoading, showNetworkError, actionBack, actionInfo, dismissDialogCallback, countries, pagesData} = this.props;

        return (
            <ContainerFlex>
                <BackMenuLogo />
                <View style={{flexGrow:1}}>
                    {pagesData && pagesData.length > 0 &&
                        <IndicatorViewPager style={{height: '94%'}}
                                            indicator={this._renderDotIndicator()}>
                            <View style={{backgroundColor: LIGHT_COLOR}}>
                                <ChoosePage data={pagesData[0].form}/>
                            </View>
                            <View style={{backgroundColor: LIGHT_COLOR}}>
                                <SelectPage data={pagesData[1].form}/>
                            </View>
                            <View style={{backgroundColor: LIGHT_COLOR}}>
                                <SelectPage data={pagesData[2].form}/>
                            </View>
                        </IndicatorViewPager>}
                </View>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: LIGHT_COLOR,
    },
    titleBold: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 22
    },
    inputsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: Platform.OS === "ios" ? 104 : 96,
        backgroundColor: 'white'
    },
    input: {
        color: 'black',
        fontSize: 15,
        height: '100%'
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'

    },
    dot: {
        width: 16,
        height:16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: LIGHT_COLOR,
        borderColor: GRAY_COLOR
    },
    selectedDot: {
        width: 16,
        height:16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: SELECTED,
        borderColor: GRAY_COLOR
    },
});

EnergyCodeDiagnosisView.defaultProps = {};


EnergyCodeDiagnosisView.propTypes = {
    registerCallback: PropTypes.func,
    dismissDialogCallback: PropTypes.func,
    showLoading: PropTypes.bool,
    showNetworkError: PropTypes.bool,
    countries: PropTypes.array,
    actionBack: PropTypes.func,
    actionInfo: PropTypes.func,
    pagesData: PropTypes.array
};