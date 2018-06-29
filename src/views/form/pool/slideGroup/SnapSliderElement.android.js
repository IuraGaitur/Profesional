'use strict';

var React = require('react');
var ReactNative = require('react-native');
var ReactNativeElements = require('react-native-elements');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');
import Slider from "react-native-slider";
import {GRAY_LIGHT, LIGHT_COLOR, PRIMARY} from "../../../../utils/Colors";

var {
    StyleSheet,
    Text,
    View,
    ViewPropTypes
} = ReactNative;

var SnapSlider = createReactClass({
    propTypes: {
        onSlidingComplete: PropTypes.func,
        style: ViewPropTypes.style,
        containerStyle: ViewPropTypes.style,
        itemWrapperStyle: ViewPropTypes.style,
        itemStyle: Text.propTypes.style,
        steps: PropTypes.array.isRequired,
        defaultItem: PropTypes.number,
        labelPosition: PropTypes.string,
        onSlide: PropTypes.func,
        background: PropTypes.string

    },
    getInitialState() {
        if(!this.props.steps) return 1;
        var sliderRatio = this.props.maximumValue / (this.props.steps.length - 2);
        var value = sliderRatio * this.props.defaultItem || 0;
        var item = this.props.defaultItem;
        return {
            sliderRatio: sliderRatio,
            value: value,
            item: item,
            adjustSign: 1,
            itemWidth: [],
            sliderWidth: 0,
            sliderLeft: 0,
        };
    },
    getDefaultProps() {
        return {
            minimumValue: 0,
            maximumValue: 1,
        };
    },
    _sliderStyle() {
        return [defaultStyles.slider, {width: this.state.sliderWidth, left: this.state.sliderLeft}, this.props.style];
    },
    _onSlidingCompleteCallback: function (v, callback) {
        //pad the value to the snap position
        var halfRatio = this.state.sliderRatio / 2;
        var i = 0;
        for (;;) {
            if ((v < this.state.sliderRatio) || (v <= 0)) {
                if (v >= halfRatio) {
                    i++;
                }
                break;
            }
            v = v - this.state.sliderRatio;
            i++;
        }
        var value = this.state.sliderRatio * i;

        //Move the slider
        value = value + (this.state.adjustSign * 0.000001);//enforce UI update
        if (this.state.adjustSign > 0) {
            this.setState({adjustSign: -1});
        } else {
            this.setState({adjustSign: 1});
        }

        if(value) {
            this.setState({value: value, item: i});
        }
        callback(true);

    },
    /*
     componentWillUpdate() {
     //get the width for all items
     var iw = [];
     for (var i = 0; i < this.props.steps.length; i++) {
     var node = eval('this.refs.t' + i);
     node.measure(function (ox, oy, width, height, px, py) {
     iw.push(width);
     });
     }
     },
     */
    _getItemWidth: function (x) {
        var width = x.nativeEvent.layout.width;
        var itemWidth = this.state.itemWidth;
        itemWidth.push(width);
        this.setState({itemWidth: itemWidth});
        //we have all itemWidth determined, let's update the silder width
        if(!this.props.steps) {return this.state.itemWidth; }
        if ( this.state.itemWidth.length == this.props.steps.length) {
            var max = Math.max.apply(null, this.state.itemWidth);
            if (this.refs.slider && this.state.sliderWidth > 0) {
                var that = this;
                var w, l;
                var buffer = 30;//add buffer for the slider 'ball' control
                if(buffer > w){
                    buffer = 0;
                }
                w = that.state.sliderWidth - max;
                w = w + buffer;
                l = max / 2;
                l = l - buffer / 2;
                that.setState({sliderWidth: w});
                that.setState({sliderLeft: l});
            }
        }
    },
    _getSliderWidth: function (e) {
        var {x, y, width, height} = e.nativeEvent.layout;
        this.setState({sliderWidth: width});
    },
    _labelView() {
        if(!this.props.steps) return null;
        var itemStyle = [defaultStyles.item, this.props.itemStyle];
        let labels = this.props.steps.map((i, j) => <Text key={i.value} ref={"t"+j} style={itemStyle} onLayout={this._getItemWidth}>{i.label}</Text>);
        return (
            <View style={[defaultStyles.itemWrapper, this.props.itemWrapperStyle]}>
                { labels }
            </View>
        );
    },
    render() {
        var that = this;
        return (
            <View onLayout={that._getSliderWidth} style={[defaultStyles.container, this.props.containerStyle]}>
                {this.props.labelPosition == 'top' ? this._labelView() : null}
                <Slider minimumValue={0} maximumValue={100}
                        minimumTrackTintColor={'transparent'}
                        trackStyle={{
                            width: '95%',
                            height: 28,
                            borderRadius: 12,
                            borderWidth: this.props.background ? 0 : 4 ,
                            borderColor: LIGHT_COLOR,
                            backgroundColor: this.props.background ? 'transparent': PRIMARY
                        }}
                        thumbStyle={{
                            width: 34,
                            height: 34,
                            backgroundColor: LIGHT_COLOR,
                            borderColor: GRAY_LIGHT,
                            borderWidth: 2,
                            borderRadius: 19,
                        }}
                        step={this.props.step}
                        value={this.state.value}
                        onSlidingComplete={(value) => this._onSlidingCompleteCallback(value, this.props.onSlide)}

                />
                {this.props.labelPosition === undefined || this.props.labelPosition == 'bottom' ? this._labelView() : null}
            </View>
        );
    }
});

var defaultStyles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
    },
    slider: {
    },
    itemWrapper: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
    },
    item: {
    },
});

module.exports = SnapSlider;
