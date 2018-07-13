import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MainStyle from 'src/utils/mainStyle';
import {TEXT_COLOR} from 'src/utils/colors';
import {View, Button, Icon} from 'native-base';
import ButtonPickerInput from 'src/views/form/buttonPickerInput';
import {Text, StyleSheet, Dimensions, Image} from 'react-native';
import SnapSlider from 'src/views/form/pool/slideGroup/snapSliderElement';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class SlideGroup extends Component {

    constructor(props) {
        super(props);
        this.state = {...props.question};
    }

    changeSliderValue = (value) => {
        this.setState({value: value});
        this.props.actionChange(value);
    }

    componentDidMount() {
        this.setState({items: this.items});
    }

    _renderBackground(background) {
        return (
            <Image style={styles.background} borderRadius={15}
                   source={require('Sytem_Pro/assets/images/pick_back_1.png')}/>
        );
    }

    _renderCategoryButton(categories) {
        return (
            <View style={{marginBottom: 15}}>
                <ButtonPickerInput items={categories} valueChangeCallBack={(item) => {}}/>
            </View>);

    }

    _renderInfoButton(info, actionInfoCallback) {
        return (
            <Button transparent onPress={() => actionInfoCallback(info)}>
                <Icon name='information-circle' style={MainStyle.infoButton}/>
            </Button>);
    }

    _renderSlider(item, actionInfoCallback) {
        return (
            <View style={{marginBottom: 15}}>
                <View style={styles.sliderContainer}>
                    <Text style={styles.title}> {item.title}</Text>
                    {item.categories && this._renderCategoryButton(item.categories)}
                    {!item.categories && item.info && this._renderInfoButton(item.info, actionInfoCallback)}
                </View>
                <View>
                    {item.background && this._renderBackground(item.background)}
                    <SnapSlider background={item.background}
                                steps={item.steps}
                                itemStyle={styles.itemSlider}
                                onSlide={this.props.onSlide}
                                value={this.state.value}
                                actionChange={value => this.changeSliderValue(value)}
                                step={item.steps && item.steps.length > 2 ? (100 / (item.steps.length - 1)) : 1 }/>
                </View>
            </View>);
    }

    render() {
        const {question, actionInfoCallback} = this.props;
        return <View style={styles.container}>
            {question && this._renderSlider(question, actionInfoCallback)}
        </View>
    }
}

SlideGroup.defaultProps = {};

SlideGroup.propTypes = {
    onSlide: PropTypes.func,
    question: PropTypes.object,
    actionInfoCallback: PropTypes.func,
    actionChange: PropTypes.func
};

const styles = StyleSheet.create({
    itemSlider: {
        fontSize: 11
    },
    sliderContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 15,
        marginBottom: 5
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        width: SCREEN_WIDTH - SCREEN_WIDTH / 15
    },
    itemContainer: {
        flex: 1,
        width: 'auto',
        flexDirection: 'column',
    },
    infoIcon: {
        position: 'absolute',
        right: 0,
        top: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        alignSelf: 'center',
        color: TEXT_COLOR,
    },
    snapsliderContainer: {
        width: 'auto',
        height: 70
    },
    background: {
        width: '90%',
        height: 22,
        margin: 10,
        position: 'absolute'
    },
    snapsliderItemWrapper: {
        marginHorizontal: 14
    }
});