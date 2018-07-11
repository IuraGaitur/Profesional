import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import CollectionUtils from 'src/utils/collectionUtils';
import RNPickerSelect from 'src/views/native_elements/pickerElement';
import {GRAY_LIGHT, LIGHT_COLOR, TEXT_COLOR} from 'src/utils/colors';

export default class ButtonPickerInput extends Component {

    currentItemValue = '';

    constructor(props) {
        super(props);
        this.state = props;
    }

    changeItem(element, callback) {
        this.currentItemValue = element;
        callback(element);
    }

    focus() {
        this.refs.picker.togglePicker(true);
    }

    render() {
        const {defaultItem, items, valueChangeCallBack} = this.state;


        if (!CollectionUtils.isNullOrEmpty(items)) {
            return (
                <View style={styles.buttonPicker}>
                    <RNPickerSelect
                        ref='picker'
                        mode={this.props.mode}
                        hideIcon={true}
                        placeholder={defaultItem ? defaultItem : {}}
                        items={items}
                        value={this.props.value}
                        style={{
                            inputIOS: styles.inputIOS, placeholderColor: TEXT_COLOR,
                            inputAndroid: styles.inputAndroid, underline: {borderTopWidth: 0}
                        }}
                        onValueChange={e => {
                            this.changeItem(e, valueChangeCallBack)
                        }}/>
                </View>);

        }
        return <View />
    }
}

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        backgroundColor: GRAY_LIGHT,
    },
    buttonPicker: {
        borderWidth: 1,
        borderColor: GRAY_LIGHT,
        borderRadius: 7,
        backgroundColor: LIGHT_COLOR,
        width: 150,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 1,
    },
    inputIOS: {
        fontSize: 14,
        color: TEXT_COLOR,
        padding: 0,
        paddingLeft: 8,
        textAlign: 'center',
        paddingBottom: 8,

    },
    inputAndroid: {
        color: TEXT_COLOR,
        margin: 0,
        padding: 0,
        fontSize: 14,
        textAlign: 'center',
        paddingBottom: 8
    },
    selectElement: {
        flex: 1,
        flexDirection: 'column',
        width: 'auto'
    },
    checkValidator: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flexDirection: 'column'
    },
    textValidator: {
        alignItems: 'flex-start'
    },
    validatorText: {
        color: 'red',
        fontSize: 12,
    }
});

ButtonPickerInput.propTypes = {
    valueChangeCallBack: PropTypes.func,
    defaultItem: PropTypes.object,
    items: PropTypes.array,
    needValidation: PropTypes.bool,
    prompt: PropTypes.string
};
