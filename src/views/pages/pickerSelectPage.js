import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {View, Text} from "native-base";
import SlideGroup from "../form/pool/slideGroup/SlideGroup";
import styles from './pageStyle';
import PropTypes from 'prop-types';

export default class PickerSelectPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column', marginBottom: 35}}>
                <Text style={styles.titlePicker}>{this.props.data.title}</Text>
                <ScrollView contentContainerStyle={[styles.container]}>
                    <SlideGroup items={this.props.data} style={{flex: 1}}
                                actionInfoCallback={this.props.actionInfoCallback}
                                onSlide={state => this.props.onSlideCallback(state)}/>
                </ScrollView>
            </View>);
    }

}

PickerSelectPage.propTypes = {
    data: PropTypes.object,
    onSlideCallback: PropTypes.func,
    actionInfoCallback: PropTypes.func,
};