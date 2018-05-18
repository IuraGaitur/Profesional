import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Button, Overlay} from "react-native-elements";
import {DARK_OVERLAY_COLOR, GRAY_COLOR} from "../utils/Colors";
import {Text, View, StyleSheet, TouchableWithoutFeedback} from "react-native";

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
                    isVisible={showNetworkError}
                    windowBackgroundColor={DARK_OVERLAY_COLOR}
                    overlayBackgroundColor="white"
                    width={320}
                    height={160}>
                    <View style={styles.overlayContainer}>
                        <Text style={styles.titleDialog}>No internet connection</Text>
                        <Text style={styles.messageDialog}>You need internet connection in order to use the app!</Text>
                        <View style={styles.buttonDialog}>
                            <Button clear title="OK" TouchableComponent={TouchableWithoutFeedback} onPress={(e) => dismissCallback(e)} titleStyle={{fontSize: 18, color: GRAY_COLOR}}/>
                        </View>
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
        justifyContent: 'flex-end'
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
        height: 150,
        padding: 16
    }
});
