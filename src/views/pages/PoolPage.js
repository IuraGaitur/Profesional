import React, {Component} from 'react';
import {Text} from "react-native";
import {View} from "native-base";
import CheckboxGroup from "../form/pool/checkGroup/CheckboxGroup";
import styles from './pageStyle';
import PropTypes from 'prop-types';
import CheckQuestion from "../../data/models/page/question/CheckQuestion";
import SliderQuestion from "../../data/models/page/question/SliderQuestion";
import SliderStepQuestion from "../../data/models/page/question/SliderStepQuestion";
import SelectQuestion from "../../data/models/page/question/SelectQuestion";
import RadioBoxGroup from "../form/pool/radioGroup/RadioGroup";
import SlideGroup from "../form/pool/slideGroup/SlideGroup";
import ContentFlex from "../native_elements/ContentFlex";

export default class PoolPage extends Component {

    getPoolAnswers() {

    }

    onSlideCallback = (state, callback) => {
        console.log(state);
        callback(state);
    };

    _renderElement(question, slideCallback) {
        if (question instanceof CheckQuestion) {
            return this._renderCheckQuestionary(question);
        } else if (question instanceof SliderQuestion) {
            return this._renderSliderQuestionary(question, slideCallback);
        } else if (question instanceof SliderStepQuestion) {
            return this._renderSliderStepQuestionary(question, slideCallback);
        } else if (question instanceof SelectQuestion) {
            return this._renderSelectQuestionary(question);
        } else {
            return null;
        }
    }

    _renderCheckQuestionary(question) {
        return (
            <CheckboxGroup items={question.options}/>
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
        const {pageInfo, onSlideCallback} = this.props;

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.pageInfo.title}</Text>
                <ContentFlex scrollable={pageInfo.questions && pageInfo.questions.length > 3}>
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