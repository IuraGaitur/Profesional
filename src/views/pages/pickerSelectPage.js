import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Text} from 'native-base';
import styles from 'src/views/pages/pageStyle';
import {ScrollView, StyleSheet} from 'react-native';
import SlideGroup from 'src/views/form/pool/slideGroup/slideGroup';

export default class PickerSelectPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <Text style={styles.titlePicker}>{this.props.data.title}</Text>
                <ScrollView contentContainerStyle={[styles.container]}>
                    <SlideGroup items={this.props.data} style={style.flex}
                                actionInfoCallback={this.props.actionInfoCallback}
                                onSlide={state => this.props.onSlideCallback(state)}/>
                </ScrollView>
            </View>);
    }

}

const style = StyleSheet.create({
    flex: {
        flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 35
    }
});

PickerSelectPage.propTypes = {
    data: PropTypes.object,
    onSlideCallback: PropTypes.func,
    actionInfoCallback: PropTypes.func,
};