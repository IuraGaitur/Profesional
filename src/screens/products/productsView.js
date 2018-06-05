import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import CardProduct from "../../views/native_elements/CardProduct";
import PickerInput from "../../views/form/PickerInput";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ProductsView extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {products} = this.props;

        return (
            <View style={styles.mainContainer}>
                <View style={styles.container}>
                    {products && products.map(item => <CardProduct key={item.name} title={item.name} picture={item.image}/>)}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    }
});

ProductsView.defaultProps = {
    title: 'ProductsView'
};


ProductsView.propTypes = {
    title: PropTypes.string,
    user: PropTypes.object,
    selectPageCalback: PropTypes.func,
    menuItems: PropTypes.array
};
