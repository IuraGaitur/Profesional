import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {DARK_OVERLAY_COLOR, GRAY_COLOR} from "../utils/Colors";
import {Text, View, StyleSheet, TouchableWithoutFeedback, Button, WebView, Dimensions} from "react-native";
import Overlay from "react-native-modal-overlay";
import HtmlText from "./native_elements/HtmlText";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class NetworkErrorDialog extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    render() {
        const {showInfo, dismissCallback} = this.state;
        return (<Overlay
            visible={showInfo}
            closeOnTouchOutside={false} animationType="zoomIn"
            childrenWrapperStyle={{
                backgroundColor: 'rgb(255, 255, 255)',
                borderWidth: 1, borderColor: GRAY_COLOR, borderRadius: 10
            }}
            containerStyle={{backgroundColor: 'rgba(255,255,255, 0.3)'}}
            animationDuration={500}>
            <View>
                <HtmlText html={this.props.html}
                          styles={styles.formulaTitle} textStyle={{fontSize: 16}}/>
            </View>
            <View style={styles.buttonDialog}>
                <Button clear title="OK" TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => dismissCallback(e)} titleStyle={{fontSize: 18, color: GRAY_COLOR}}/>
            </View>
        </Overlay>);
    }
}

NetworkErrorDialog.propTypes = {
    dismissCallback: PropTypes.func,
    showInfo: PropTypes.bool,
    html: PropTypes.string
};

const styles = StyleSheet.create({
    buttonDialog: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 40
    },
    titleDialog: {
        fontSize: 22,
        marginBottom: 20

    },
    messageDialog: {
        fontSize: 18,
        marginBottom: 20
    },
    overlayContainer: {
        flex: 1,
        flexDirection: 'column',
        width: 300,
        backgroundColor: 'white',
        height: 150,
        padding: 16
    }
});
