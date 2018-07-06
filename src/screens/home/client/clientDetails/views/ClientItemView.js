import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, Icon} from 'native-base';
import {Text, StyleSheet} from 'react-native';
import Formula from 'src/views/Formula';
import MainStyle from 'src/views/MainStyle';
import Divider from 'src/views/Divider';
import Space from 'src/views/native_elements/Space';
import {GRAY_COLOR} from 'src/utils/Colors';

export default class ClientItemView extends Component {

    render() {
        return (
            <View style={[MainStyle.centerColAlign, {alignItems: 'center', marginVertical: 4}]}>
                <Text style={MainStyle.overline}>{this.props.date}</Text>
                <Formula text={this.props.formula}/>
                <View style={styles.actionsContainer}>
                    <Icon name='trash' active={true} style={{color: GRAY_COLOR}}/>
                    <Icon name='mail' active={true} style={{color: GRAY_COLOR}}/>
                    <Icon name='create' active={true} style={{color: GRAY_COLOR}}/>
                </View>
                <Text style={MainStyle.caption}>{this.props.type}</Text>
                <Space height={8} />
                <Divider/>
            </View>);
    }
}

const styles = StyleSheet.create({
    actionsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: 150
    }
});


ClientItemView.propTypes = {
    name: PropTypes.string,
    formula: PropTypes.string,
    type: PropTypes.string
};