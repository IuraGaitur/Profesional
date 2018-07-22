import PropTypes from 'prop-types';
import {Text} from 'react-native';
import React, {Component} from 'react';
import {Button, Icon, View} from 'native-base';
import MainStyle from 'src/utils/mainStyle';
import styles from 'src/views/pages/pageStyle';
import ContentFlex from 'src/views/native_elements/contentFlex';
import SlideGroup from 'src/views/form/pool/slideGroup/slideGroup';
import RadioBoxGroup from 'src/views/form/pool/radioGroup/radioGroup';
import CheckboxGroup from 'src/views/form/pool/checkGroup/checkboxGroup';
import CheckCondition from 'src/data/models/diagnosis/condition/check/checkCondition';
import SliderCondition from 'src/data/models/diagnosis/condition/slide/sliderCondition';
import SelectCondition from 'src/data/models/diagnosis/condition/select/selectCondition';
import SliderStepCondition from 'src/data/models/diagnosis/condition/slide/sliderStepCondition';

export default class PoolPage extends Component {

    onSlideCallback = (state, callback) => {
        callback(state);
    };

    _renderElement = (pos, question, slideCallback, actionChangeCallback) => {
        if (question instanceof CheckCondition) {
            return this._renderCheckQuestionary(pos, question, actionChangeCallback);
        } else if (question instanceof SliderCondition) {
            return this._renderSliderQuestionary(pos, question, slideCallback, actionChangeCallback);
        } else if (question instanceof SliderStepCondition) {
            return this._renderSliderStepQuestionary(pos, question, slideCallback, actionChangeCallback);
        } else if (question instanceof SelectCondition) {
            return this._renderSelectQuestionary(pos, question, actionChangeCallback);
        } else {
            return null;
        }
    };

    _renderCheckQuestionary = (pos, question, changeCallback) => {
        return (
            <CheckboxGroup key={pos}
                           items={question.options}
                           title={question.title}
                           type={question.type}
                           actionChange={options => {
                               question.options = options;
                               changeCallback(pos, question);
                           }}/>
        );
    };

    _renderSelectQuestionary = (pos, question, changeCallback) => {
        return (
            <RadioBoxGroup
                key={pos}
                items={question.options}
                title={question.title}
                actionChange={options => {
                    question.options = options;
                    changeCallback(pos, question);
                }}/>
        );
    };

    _renderSliderStepQuestionary = (pos, question, sliderCallback, changeCallback) => {
        return (
            <SlideGroup key={pos}
                        question={question} style={{flex: 1}}
                        actionInfoCallback={this.props.actionInfoCallback}
                        onSlide={state => this.onSlideCallback(state, sliderCallback)}
                        actionChange={value => {
                            question.value = value;
                            changeCallback(pos, question);
                        }}/>
        );
    };

    _renderSliderQuestionary = (pos, question, sliderCallback, changeCallback) => {
        return (
            <SlideGroup key={pos}
                        question={question} style={{flex: 1}}
                        actionInfoCallback={this.props.actionInfoCallback}
                        onSlide={state => this.onSlideCallback(state, sliderCallback)}
                        actionChange={value => {
                            question.value = value;
                            changeCallback(pos, question);
                        }}/>
        );
    };

    actionChangeQuestion = (pos, question) => {
        let pageInfo = this.props.pageInfo;
        pageInfo.questions[pos] = question;
        this.props.actionChangeSubject(pageInfo);

    };

    render() {
        const {pageInfo, onSlideCallback, actionInfoCallback, actionChangeSubject} = this.props;

        return (
            <View style={styles.container}>
                <View style={{width: '100%'}}>
                    <Text style={styles.title}>{this.props.pageInfo.title}</Text>
                    {this.props.pageInfo.info && <View style={[MainStyle.rightCenterPosition]}>
                        <Button transparent onPress={() => actionInfoCallback(this.props.pageInfo.info)} style={{alignSelf: 'center'}}>
                            <Icon name='information-circle' style={[MainStyle.infoButton]}/>
                        </Button>
                    </View>}
                </View>
                <ContentFlex scrollable={pageInfo.questions && pageInfo.questions.length > 3} padding={8}>
                    {pageInfo.questions && pageInfo.questions.map((question, pos)=> {
                        return this._renderElement(pos, question, onSlideCallback, this.actionChangeQuestion);
                    })}
                </ContentFlex>
            </View>);
    }
}


PoolPage.propTypes = {
    pageInfo: PropTypes.object,
    onSlideCallback: PropTypes.func,
    actionInfoCallback: PropTypes.func,
    actionChangeSubject: PropTypes.func,
};