import React, {Component} from 'react';
import {Text, StyleSheet, Dimensions, Image} from "react-native";
import {View, Button} from "native-base";
import {GRAY_COLOR, GRAY_LIGHT, LIGHT_COLOR, PRIMARY, SELECTED, TEXT_COLOR} from "../../../utils/Colors";
import SnapSlider from './SnapSliderElement';
const SCREEN_WIDTH = Dimensions.get('window').width;

export default class SlideGroup extends Component {

    sliderOptions= [
        {"value": 0, label: "No"},
        {"value": 1, label: "Daily"},
        {"value": 2, label: "Every day"},
        {"value": 3, label: "2x times"},
        {"value": 3, label: "More than twice"}
        ];

    getInitialState() {
        return {
            defaultItem: 2,
        };
    };

    slidingComplete(itemSelected) {
        console.log("value " + this.sliderOptions[this.refs.slider.state.item].value);
    }


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({items: this.items});
    }

    slidingComplete(e) {
        console.log(e);
    }

    render() {
        return <View style={styles.container}>
                    {this.props.items && this.props.items.map(item =>
                        <View style={styles.itemContainer} key={item.title}>
                            <Text style={styles.title}> {item.title}</Text>
                            <View>
                            {item.background &&
                                <Image style={{width: '95%', height:28, margin: 10, position: 'absolute'}} borderRadius={15} source={require('../../../../assets/images/pick_back_1.png')}/>}
                                <SnapSlider ref="slider" containerStyle={styles.snapsliderContainer}
                                        style={{ flex: 1, alignSelf: 'stretch', margin: 10, alignItems: 'baseline', height: 50 }}
                                        minimumValue={0} maximumValue={100}
                                        trackStyle={{
                                            width: '95%',
                                            height: 28,
                                            borderRadius: 6,
                                            borderWidth: item.background ? 0 : 4 ,
                                            borderColor: LIGHT_COLOR,
                                            backgroundColor: item.background ? 'transparent': PRIMARY
                                        }}
                                        thumbStyle={{
                                            width: 34,
                                            height: 34,
                                            backgroundColor: LIGHT_COLOR,
                                            borderColor: GRAY_LIGHT,
                                            borderWidth: 2,
                                            borderRadius: 19,
                                        }}
                                        thumbTouchSize={{
                                            width: 50, height: 50
                                        }}
                                        minimumTrackTintColor='red'
                                        thumbTintColor={'black'}
                                        maximumTrackTintColor={PRIMARY}
                                        itemWrapperStyle={styles.snapsliderItemWrapper}
                                        itemStyle={styles.snapsliderItem}
                                        items={item.options.map(item => {return {"value": item.progress, "label": item.title}})}
                                        labelPosition="bottom"
                                        defaultItem={this.state.defaultItem}
                                onSlidingComplete={this.slidingComplete} />
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
    snapslider: {

    },
    snapsliderItemWrapper: {
        marginHorizontal: 14
    },
    snapsliderItem: {

    }
})