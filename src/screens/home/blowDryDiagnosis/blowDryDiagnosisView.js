import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GRAY_COLOR, LIGHT_COLOR, SELECTED,} from 'src/utils/Colors';
import {View, StyleSheet, Dimensions, ScrollView, Platform, WebView} from 'react-native';
import {Body, Left, Button, Header, Label, Text, Title, Right, Thumbnail} from 'native-base';
import Message from 'src/data/models/Message';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import BackMenuLogo from 'src/views/menu/BackMenuLogo';
import ContainerFlex from 'src/views/native_elements/ContainerFlex';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import ConfirmationPage from './pages/ConfirmationPage';
import MainStyle from 'src/views/MainStyle';
import PoolPage from 'src/views/pages/PoolPage';

export default class BlowDryDiagnosisView extends Component {

    formInputs = [];
    message = new Message();

    constructor(props) {
        super(props);
        this.state = {fullName: '', email: '', subject: '', salonName: '', city: '', message: '', scrollable: true}
    }

    componentWillReceiveProps(newProps) {
        console.log(newProps);
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
        return <PagerDotIndicator pageCount={7} dotStyle={styles.dot}
                                  selectedDotStyle={styles.selectedDot}/>;
    }

    setScrollEnabled = (state, page) => {
        if(!state) {
            this.refs.pager.setPageWithoutAnimation(page);
        }
        this.setState({scrollable: state})
    };

    showDialogInfo = (info) => {
        this.refs.mainContainer.showInfoDialog(info);
    };

    render() {
        const { scrollable } = this.state;
        const {diagnosisQuiz, actionCreate, actionPageSelectedCallback, showEditAction, actionEdit} = this.props;

        return (
            <ContainerFlex ref='mainContainer'>
                <BackMenuLogo actions={
                    showEditAction && <Button transparent onPress={() => actionEdit()}>
                        <Text style={MainStyle.secondary}>Edit</Text>
                    </Button>}/>
                <ContentFlex>
                    {diagnosisQuiz.subjects && diagnosisQuiz.subjects.length > 0 &&
                    <IndicatorViewPager style={{height: '100%'}}
                                        ref='pager'
                                        onPageSelected={(data) => actionPageSelectedCallback(data.position, 7)}
                                        scrollEnabled={scrollable}
                                        indicator={this._renderDotIndicator()}>

                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[0]} actionInfoCallback={this.showDialogInfo}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[1]} actionInfoCallback={this.showDialogInfo}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[2]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 2)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[3]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 3)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[4]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 4)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[5]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 5)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <ConfirmationPage actionCreateCallback={actionCreate}/>
                        </View>
                    </IndicatorViewPager>}
                </ContentFlex>
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
        paddingBottom: Platform.OS === 'ios' ? 104 : 96,
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
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: LIGHT_COLOR,
        borderColor: GRAY_COLOR
    },
    selectedDot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        borderWidth: 1,
        backgroundColor: SELECTED,
        borderColor: GRAY_COLOR
    },
});

BlowDryDiagnosisView.defaultProps = {};


BlowDryDiagnosisView.propTypes = {
    dismissDialogCallback: PropTypes.func,
    showEditAction: PropTypes.bool,
    actionBack: PropTypes.func,
    actionInfo: PropTypes.func,
    actionCreate: PropTypes.func,
    actionPageSelectedCallback: PropTypes.func,
    diagnosisQuiz: PropTypes.object
};
