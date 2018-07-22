import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Button, Icon} from 'native-base';
import {IndicatorViewPager, PagerDotIndicator} from 'rn-viewpager';
import BackMenuLogo from 'src/views/menu/backMenuLogo';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import MainStyle from 'src/utils/mainStyle';
import PoolPage from 'src/views/pages/poolPage';
import {GRAY_COLOR, LIGHT_COLOR, SELECTED,} from 'src/utils/colors';

export default class EnergyCodeDiagnosisView extends Component {

    constructor(props) {
        super(props);
    }

    _renderDotIndicator() {
        return <PagerDotIndicator pageCount={3} dotStyle={styles.dot}
                                  selectedDotStyle={styles.selectedDot}/>;
    }

    actionChangeSubject = (pos, subject) => {
        let quiz = this.props.quiz;
        quiz.subjects[pos] = subject;
        this.props.actionChangeDiagnosis(quiz);
    };

    render() {
        const {actionSave, showSaveAction, actionPageSelectedCallback, quiz} = this.props;

        return (
            <ContainerFlex>
                <BackMenuLogo actions={
                    showSaveAction && <Button transparent onPress={() => actionSave()}>
                        <Icon name='checkmark' style={MainStyle.saveButton}/>
                    </Button>}/>

                <View style={{flexGrow: 1}}>
                    {quiz &&
                    <IndicatorViewPager style={{height: '94%'}}
                                        onPageSelected={(data) => actionPageSelectedCallback(data.position, 3)}
                                        indicator={this._renderDotIndicator()}>
                        {quiz.subjects.map((item, pos) => (
                            <View style={{backgroundColor: LIGHT_COLOR}} key={pos}>
                                <PoolPage pageInfo={quiz.subjects[pos]}
                                          actionChangeSubject={(pageInfo) => this.actionChangeSubject(pos, pageInfo)}/>
                            </View>
                        ))}
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

EnergyCodeDiagnosisView.defaultProps = {};


EnergyCodeDiagnosisView.propTypes = {
    registerCallback: PropTypes.func,
    dismissDialogCallback: PropTypes.func,
    showLoading: PropTypes.bool,
    showNetworkError: PropTypes.bool,
    countries: PropTypes.array,
    actionBack: PropTypes.func,
    actionPageSelectedCallback: PropTypes.func,
    actionSave: PropTypes.func,
    showSaveAction: PropTypes.bool,
    quiz: PropTypes.object,
    diagnosis: PropTypes.object,
    actionChangeDiagnosis: PropTypes.func
};
