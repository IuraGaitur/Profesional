import React, {Component} from 'react';
import {Text} from "react-native";
import {Button, Icon, View} from "native-base";
import CheckboxGroup from "../form/pool/checkGroup/CheckboxGroup";
import styles from './pageStyle';
import PropTypes from 'prop-types';
import RadioBoxGroup from "../form/pool/radioGroup/RadioGroup";
import SlideGroup from "../form/pool/slideGroup/SlideGroup";
import ContentFlex from "../native_elements/ContentFlex";
import MainStyle from "../MainStyle";
import CheckCondition from "../../data/models/diagnosis/condition/check/CheckCondition";
import SliderCondition from "../../data/models/diagnosis/condition/slide/SliderCondition";
import SliderStepCondition from "../../data/models/diagnosis/condition/slide/SliderStepCondition";
import SelectCondition from "../../data/models/diagnosis/condition/select/SelectCondition";

export default class PoolPage extends Component {

    getPoolAnswers() {

    }

    onSlideCallback = (state, callback) => {
        callback(state);
    };

    _renderElement(question, slideCallback) {
        if (question instanceof CheckCondition) {
            return this._renderCheckQuestionary(question);
        } else if (question instanceof SliderCondition) {
            return this._renderSliderQuestionary(question, slideCallback);
        } else if (question instanceof SliderStepCondition) {
            return this._renderSliderStepQuestionary(question, slideCallback);
        } else if (question instanceof SelectCondition) {
            return this._renderSelectQuestionary(question);
        } else {
            return null;
        }
    }

    _renderCheckQuestionary(question) {
        return (
            <CheckboxGroup items={question.options} title={question.title} type={question.type}/>
        );
    }

    _renderSelectQuestionary(question) {
        return (
            <RadioBoxGroup key={question.title} items={question.options} title={question.title}/>
        );
    }

    _renderSliderStepQuestionary(question, sliderCallback) {
        return (
            <SlideGroup question={question} style={{flex: 1}}
                        actionInfoCallback={this.props.actionInfoCallback}
                        onSlide={state => this.onSlideCallback(state, sliderCallback)}/>
        );
    }

    _renderSliderQuestionary(question, sliderCallback) {
        return (
            <SlideGroup question={question} style={{flex: 1}}
                        actionInfoCallback={this.props.actionInfoCallback}
                        onSlide={state => this.onSlideCallback(state, sliderCallback)}/>
        );
    }

    render() {
        const {pageInfo, onSlideCallback, actionInfoCallback} = this.props;

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
                    {pageInfo.questions && pageInfo.questions.map(question => {
                        return this._renderElement(question, onSlideCallback);
                    })}
                </ContentFlex>
            </View>);
    }
}


PoolPage.propTypes = {
    pageInfo: PropTypes.object,
    onSlideCallback: PropTypes.func,
    actionInfoCallback: PropTypes.func,
};