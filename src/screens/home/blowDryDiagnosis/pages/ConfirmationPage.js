import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Grid, Row, View, Text} from "native-base";
import MainStyle from "../../../../views/MainStyle";
import {BACKGROUND_GRAY_COLOR, GRAY_LIGHT, LIGHT_BACKGROUND_COLOR} from "../../../../utils/Colors";
import SubmitButton from "../../../../views/native_elements/SubmitButton";

export default class ConfirmationPage extends Component {

    render() {
        return (
            <View style={{margin: 16, flex: 1, flexDirection: 'column'}}>
                <View><Text style={MainStyle.h3}>SUMMARY</Text></View>
                <View style={styles.sectionContainer}>
                    <Text style={MainStyle.h4}>PROPRIETIES</Text>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>% OF LIGHT HAIR</Text>
                    <Text style={[MainStyle.rightPosition, styles.itemText]}>1</Text>
                </View>
                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>FRIZZ</Text>
                    <Text style={[MainStyle.rightPosition, styles.itemText]}>2</Text>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>LENGTH</Text>
                    <Text style={[MainStyle.rightPosition, styles.itemText]}>3</Text>
                </View>
                <View style={styles.sectionContainer}>
                    <Text style={MainStyle.h4}>ADDITIONAL NEEDS</Text>
                </View>

                <View style={styles.itemContainer}>
                    <Text style={styles.itemText}>HAIRLOSS</Text>
                </View>

                <View style={{position: 'absolute', bottom: 60, flex: 1, flexDirection: 'row', alignContent: 'center'}}>
                    <SubmitButton text={'CREATE ENERGY CODE'} onPress={() => this.props.actionCreateCallback()}/>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    sectionContainer: {
        padding: 8,
        marginVertical: 8,
        backgroundColor: LIGHT_BACKGROUND_COLOR
    },
    itemContainer: {
        marginVertical: 8,
        marginLeft: 16,
        marginRight: 8
    },
    itemText: {
        textAlign: 'left',
        fontSize: 20
    }
});

ConfirmationPage.defaultProps = {
    data: []
};

ConfirmationPage.propTypes = {
    data: PropTypes.array,
    actionCreateCallback: PropTypes.func
};