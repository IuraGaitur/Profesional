import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {GRAY_COLOR} from 'src/utils/colors';
import Overlay from 'react-native-modal-overlay';
import {View, StyleSheet, TouchableWithoutFeedback, Button} from 'react-native';

export default class InfoDialog extends Component {

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
            closeOnTouchOutside={false} animationType='zoomIn'
            childrenWrapperStyle={styles.backgroundContainer}
            containerStyle={styles.container}
            animationDuration={500}>
            <View>

            </View>
            <View style={styles.buttonDialog}>
                <Button clear title='OK' TouchableComponent={TouchableWithoutFeedback}
                        onPress={(e) => dismissCallback(e)} titleStyle={styles.button}/>
            </View>
        </Overlay>);
    }
}

InfoDialog.propTypes = {
    dismissCallback: PropTypes.func,
    showInfo: PropTypes.bool,
    html: PropTypes.string
};

const styles = StyleSheet.create({
    backgroundContainer: {
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: 1,
        borderColor: GRAY_COLOR,
        borderRadius: 10
    },
    container: {
        backgroundColor: 'rgba(255,255,255, 0.3)'
    },
    buttonDialog: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingBottom: 40
    },
    button: {
        fontSize: 18,
        color: GRAY_COLOR
    },
    text: {
        fontSize: 16
    }
});
