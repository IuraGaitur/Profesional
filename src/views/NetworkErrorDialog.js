import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {DARK_OVERLAY_COLOR, GRAY_COLOR} from "../utils/Colors";
import {Text, View, StyleSheet, TouchableWithoutFeedback, Button} from "react-native";
import Overlay from "react-native-modal-overlay";

export default class NetworkErrorDialog extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    render() {
        const {showNetworkError, dismissCallback} = this.state;
        return (<Overlay
            visible={showNetworkError}
            closeOnTouchOutside={false} animationType="zoomIn"
            childrenWrapperStyle={{backgroundColor: 'rgb(255, 255, 255)',
                borderWidth: 1, borderColor: GRAY_COLOR, borderRadius: 10}}
            containerStyle={{backgroundColor: 'rgba(255,255,255, 0.3)'}}
            animationDuration={500}>
            <Text style={styles.titleDialog}>No internet connection</Text>
            <Text style={styles.messageDialog}>You need internet connection in order to use the app!</Text>
            <View style={styles.buttonDialog}>
                <Button clear title="OK" TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => dismissCallback(e)} titleStyle={{fontSize: 18, color: GRAY_COLOR}}/>
            </View>
        </Overlay>);
    }
}

NetworkErrorDialog.propTypes = {
    dismissCallback: PropTypes.func,
    showNetworkError: PropTypes.bool
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
