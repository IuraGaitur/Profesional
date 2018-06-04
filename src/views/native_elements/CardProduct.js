import React, {Component} from 'react';
import {Body, Card, CardItem, Text, View} from "native-base";
import {GRAY_LIGHT} from "../../utils/Colors";
import {Image, StyleSheet} from "react-native";
import PropTypes from 'prop-types';

export default class CardProduct extends Component {

    render() {
        return <View style={styles.mainContainer}>
            <Card style={{borderColor: GRAY_LIGHT}}>
                <CardItem>
                    <Body style={styles.picContent}>
                        <Image source={require('../../../assets/images/prod_1.png')}
                               style={styles.picture}/>
                    </Body>
                </CardItem>
                <CardItem footer>
                    <Text style={styles.title}>{this.props.title}</Text>
                </CardItem>
            </Card>
        </View>
    };

};

const styles = StyleSheet.create({
    mainContainer: {
        width: '30%',
        height: 160,
        margin: 4
    },
    title: {
        fontSize: 12,

    },
    picture: {
        width: 55,
        height: 65
    },
    picContent: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

CardProduct.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string
};