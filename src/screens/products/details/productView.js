import React, {Component} from 'react';
import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import PropTypes from 'prop-types';
import ScreenUtils from 'src/utils/screenUtils';
import {PRIMARY} from 'src/utils/colors';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import TransparentBackMenu from 'src/views/menu/transparentBackMenu';
import Space from 'src/views/native_elements/space';
const SCREEN_WIDTH = Dimensions.get('window').width;
const PRODUCT_IMAGE = require('Sytem_Pro/assets/images/img_product_full.png');
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class ProductView extends Component {

    texts = {title: 'INTENSIVE COLOR PROTECTION',
             header1: 'RESULT',
             subTitle1: 'Longer lasting color, smoothness and manageability.',
             header2: 'TARGET GROUP',
             subTitle2: 'For clients with colored hair and increased care need. Suitable for all hair colors,' +
                        'highlited and bleached hair. The mask is the ideal weekly intense treatment for clients who'+
                        'take their time',
             header3: 'PRODUCT',
             subTitle3: 'For clients with colored hair and increased care need. Suitable for all hair colors,' +
             'highlited and bleached hair. The mask is the ideal weekly intense treatment for clients who'+
             'take their time',
             header4: 'IN SALON APP',
             subTitle4: 'For clients with colored hair and increased care need. Suitable for all hair colors,' +
             'highlited and bleached hair. The mask is the ideal weekly intense treatment for clients who'+
             'take their time'
    };

    constructor(props) {
        super(props);
        this.state = {...props, searchInput: null};
    }

    renderFixedHeader() {
        return (
            <View style={{flex: 1, backgroundColor: '#E7F5F3'}}>
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
                    <Image source={PRODUCT_IMAGE} style={{width: 60, height: 140}}/>
                </View>
            </View>);
    }

    renderStickyHeader() {
        return (
            <View style={{position: 'absolute', width: SCREEN_WIDTH, backgroundColor: 'transparent'}}>
                <TransparentBackMenu closeIcon={'ios-close'} title={'H1 HYDRATE SHAMPOO'}/>
            </View>
        );
    }

    render() {
        const {searchCallback, showLoading, searchInput, closeCallback, contactCallback, faqCallback} = this.props;

        return (
            <ContainerFlex>

                <ParallaxScrollView
                    renderForeground={() => {
                        return this.renderFixedHeader(closeCallback)
                    }}
                    renderFixedHeader={() => {
                        return this.renderStickyHeader('BB65 INSTANT RESET')
                    }}
                    renderBackground={() => {
                        return <View style={{height: 60, width: 400, backgroundColor: 'white'}}></View>
                    }}
                    contentBackgroundColor={'#fff'}
                    backgroundColor={'transparent'}
                    fadeOutForeground={true}
                    fadeOutParallaxForeground={true}
                    stickyHeaderHeight={90}
                    parallaxHeaderHeight={ ScreenUtils.HEIGHT / 3 }>

                    <View style={styles.paralaxContainer}>
                        <Text style={{fontSize: 22}}>{this.texts.title}</Text>
                        <Space height={16}/>
                        <Text style={styles.headerText}>{this.texts.header1}</Text>
                        <Space height={16}/>
                        <Text style={styles.contentText}>{this.texts.subTitle1}</Text>
                        <Space height={16}/>
                        <Text style={styles.headerText}>{this.texts.header2}</Text>
                        <Space height={16}/>
                        <Text style={styles.contentText}>{this.texts.subTitle2}</Text>
                        <Space height={16}/>
                        <Text style={styles.headerText}>{this.texts.header3}</Text>
                        <Space height={16}/>
                        <Text style={styles.contentText}>{this.texts.subTitle3}</Text>
                        <Space height={16}/>
                        <Text style={styles.headerText}>{this.texts.header4}</Text>
                        <Space height={16}/>
                        <Text style={styles.contentText}>{this.texts.subTitle4}</Text>
                        <Space height={40}/>
                        <Text style={styles.contentText}>Available sizes: 15ml, 200ml, 400ml</Text>
                    </View>

                </ParallaxScrollView>

            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    inputsContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 16,
        paddingBottom: 70,
        alignItems: 'center'
    },
    input: {
        color: 'black',
        fontSize: 15
    },
    inputContainer: {
        marginTop: 30,
        width: SCREEN_WIDTH - 40
    },
    buttonStyle: {
        backgroundColor: PRIMARY,
        borderWidth: 2,
        borderColor: 'white',
        padding: 4,
        height: 50
    },
    buttonContainer: {
        width: 'auto',
        marginTop: 20
    },
    buttonTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    close: {
        flex: 1,
        position: 'absolute',
        left: 30,
        top: 30,
    },
    paralaxContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 14
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    contentText: {
        fontSize: 18
    }
});

ProductView.propTypes = {
    searchCallback: PropTypes.func,
    closeCallback: PropTypes.func,
    showLoading: PropTypes.bool,
};
