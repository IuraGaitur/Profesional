import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GRAY_LIGHT, PRIMARY, PRIMARY_ACCENT} from 'src/utils/colors';
import {Image, StyleSheet} from 'react-native';
import {Body, Card, CardItem, CheckBox, Text, View} from 'native-base';

export default class CardSelectableProduct extends Component {

    render() {
        return (
            <View style={styles.mainContainer}>
                <Card style={{borderColor: GRAY_LIGHT}}>
                    <CardItem button onPress={() => this.props.onPress({id: 1})}>
                        <Body style={styles.picContent}>
                        <Image source={require('Sytem_Pro/assets/images/prod_1.png')}
                               style={styles.picture}/>
                        </Body>
                    </CardItem>
                    <CardItem footer>
                        <Text style={styles.title}>{this.props.title}</Text>
                    </CardItem>
                </Card>

                <View style={{marginTop: 8}}>
                    <CheckBox
                        color={PRIMARY_ACCENT}
                        style={{marginRight: 8, alignSelf: 'center'}}
                        size={60}
                        checked={this.props.selected}
                        onPress={() => {
                        }}/>
                </View>
            </View>);
    };
};

const styles = StyleSheet.create({
    mainContainer: {
        width: '30%',
        height: 190,
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

CardSelectableProduct.propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    onPress: PropTypes.func,
    selected: PropTypes.bool
};