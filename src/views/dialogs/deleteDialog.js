import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GRAY_COLOR, PRIMARY} from 'src/utils/colors';
import {Text, View, StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';
import Overlay from 'react-native-modal-overlay';

export default class DeleteDialog extends Component {

    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        const {visible, dismissCallback, deleteCallback} = this.props;
        return (<Overlay
            visible={visible}
            closeOnTouchOutside={false} animationType='zoomIn'
            childrenWrapperStyle={styles.backgroundContainer}
            containerStyle={styles.container}
            animationDuration={500}>
            <Text style={styles.titleDialog}>Delete</Text>
            <Text style={styles.messageDialog}>Are you sure?</Text>
            <View style={styles.buttonDialog}>
                <Button clear title='CANCEL' TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => dismissCallback(e)} color={PRIMARY} titleStyle={styles.title}/>
                <Button clear title='OK' TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => deleteCallback(e)} color={PRIMARY} titleStyle={styles.title}/>
            </View>
        </Overlay>);
    }
}

DeleteDialog.propTypes = {
    deleteCallback: PropTypes.func,
    dismissCallback: PropTypes.func,
    visible: PropTypes.bool
};

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        borderColor: GRAY_COLOR,
        borderRadius: 10,
        alignItems: 'flex-start'

    },
    container: {
        backgroundColor: 'rgba(255,255,255, 0.3)',
        flex: 1,
    },
    buttonDialog: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 16
    },
    titleDialog: {
        fontSize: 18,
        marginBottom: 20

    },
    messageDialog: {
        fontSize: 14,
        marginBottom: 20,
        color: GRAY_COLOR
    },
    title: {
        fontSize: 18,
        color: GRAY_COLOR,
        flex: 1,
        textAlign: 'left'
    },
    overlayContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        width: 300,
        backgroundColor: 'white',
        height: 150,
        padding: 16
    }
});
