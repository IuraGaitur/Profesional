import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text} from 'react-native';
import {View} from 'native-base';
import styles from 'src/views/pages/pageStyle';
import CheckboxGroup from 'src/views/form/pool/checkGroup/checkboxGroup';

export default class SelectPage extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.data.title}</Text>
                <CheckboxGroup items={this.props.data.answers}/>
            </View>);
    }
}

SelectPage.propTypes = {
    data: PropTypes.object
};