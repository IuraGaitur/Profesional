import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GRAY_COLOR, LIGHT_COLOR, SELECTED} from 'src/utils/colors';
import {View, StyleSheet, Platform} from 'react-native';
import {Button, Text} from 'native-base';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import BackMenuLogo from 'src/views/menu/backMenuLogo';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import ConfirmationPage from './pages/ConfirmationPage';
import MainStyle from 'src/utils/mainStyle';
import PoolPage from 'src/views/pages/poolPage';

export default class BlowDryDiagnosisView extends Component {

    constructor(props) {
        super(props);
        this.state = {scrollable: true};
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={7} dotStyle={styles.dot}
                                  selectedDotStyle={styles.selectedDot}/>;
    }

    actionChangeSubject = (pos, subject) => {
        let quiz = this.props.diagnosisQuiz;
        quiz.subjects[pos] = subject;
        this.props.actionChangeDiagnosis(quiz);
    };

    setScrollEnabled = (state, page) => {
        console.log(state);
        if (!state) {
            this.refs.pager.setPageWithoutAnimation(page);
        }
        this.setState({scrollable: state});
    };

    showDialogInfo = (info) => {
        this.refs.mainContainer.showInfoDialog(info);
    };

    render() {
        const {scrollable} = this.state;
        const {diagnosisQuiz, actionCreate, actionPageSelectedCallback, showEditAction, actionEdit} = this.props;

        return (
            <ContainerFlex ref='mainContainer'>
                <BackMenuLogo actions={
                    showEditAction && <Button transparent onPress={() => actionEdit()}>
                        <Text style={MainStyle.secondary}>Edit</Text>
                    </Button>}/>
                <ContentFlex>
                    {diagnosisQuiz &&
                    <IndicatorViewPager style={{height: '100%'}}
                                        ref='pager'
                                        onPageSelected={(data) => actionPageSelectedCallback(data.position, 7)}
                                        scrollEnabled={scrollable}
                                        indicator={this._renderDotIndicator()}>

                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[0]}
                                      actionInfoCallback={this.showDialogInfo}
                                      actionChangeSubject={(pageInfo) => this.actionChangeSubject(0, pageInfo)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[1]}
                                      actionInfoCallback={this.showDialogInfo}
                                      actionChangeSubject={(pageInfo) => this.actionChangeSubject(1, pageInfo)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[2]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 2)}
                                      actionChangeSubject={(pageInfo) => this.actionChangeSubject(2, pageInfo)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[3]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 3)}
                                      actionChangeSubject={(pageInfo) => this.actionChangeSubject(3, pageInfo)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[4]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 4)}
                                      actionChangeSubject={(pageInfo) => this.actionChangeSubject(4, pageInfo)}/>
                        </View>
                        <View style={{backgroundColor: LIGHT_COLOR}}>
                            <PoolPage pageInfo={diagnosisQuiz.subjects[5]}
                                      actionInfoCallback={this.showDialogInfo}
                                      onSlideCallback={(state) => this.setScrollEnabled(state, 5)}
                                      actionChangeSubject={(pageInfo) => this.actionChangeSubject(5, pageInfo)}/>
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
    diagnosisQuiz: PropTypes.object,
    diagnosis: PropTypes.object,
    actionChangeDiagnosis: PropTypes.func,
    actionEdit: PropTypes
};
