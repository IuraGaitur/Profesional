import React, {Component} from 'react';
import {Text, StyleSheet, Dimensions, Image, PanResponder, TouchableWithoutFeedback} from "react-native";
import {View, Button} from "native-base";
import {GRAY_COLOR, GRAY_LIGHT, LIGHT_COLOR, PRIMARY, SELECTED, TEXT_COLOR} from "../../../utils/Colors";
import SnapSlider from './SnapSliderElement';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class SlideGroup extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setState({items: this.items});
    }

    render() {
        return <View style={styles.container} >
                    {this.props.items && this.props.items.map(item =>
                        <View style={styles.itemContainer} key={item.title}>
                            <Text style={styles.title}> {item.title}</Text>
                            <View>
                            {item.background &&
                                <Image style={styles.background} borderRadius={15} source={require('../../../../assets/images/pick_back_1.png')}/>}
                                <SnapSlider background={item.background}
                                            items={item.options}
                                            onSlide={this.props.onSlide}
                                            step={item.options.length > 2 ? (100 / item.options.length) : 1 }/>
                            </View>
                        </View>
                    )}
                </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        width: SCREEN_WIDTH - SCREEN_WIDTH / 15
    },
    itemContainer: {
        flex:1,
        width: 'auto',
        flexDirection: 'column',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 30,
        marginVertical: 20,
        textAlign: 'left',
        color: TEXT_COLOR
    },
    snapsliderContainer: {
        width: 'auto',
        height: 70

    },
    background: {
        width: '95%',
        height:25,
        margin: 10,
        position: 'absolute'
    },
    snapsliderItemWrapper: {
        marginHorizontal: 14
    }
});