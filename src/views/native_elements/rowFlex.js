import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet} from 'react-native';
import {Content, Row} from 'native-base';

export default class RowFlex extends Component {

    render() {
        return <Row size={this.props.size} style={styles.row}>
            {this.props.children}
        </Row>
    };

};

const styles = StyleSheet.create({
    row: {
        flex:1,
        flexGrow: 1,
        flexDirection: 'column'
    }
})

RowFlex.propTypes = {
    size: PropTypes.number,
};