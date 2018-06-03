import PropTypes from 'prop-types';
import {Text, View, StyleSheet, Platform} from "react-native";
import React, {Component} from 'react';
import {GRAY_COLOR} from "../../utils/Colors";
import CollectionUtils from "../../utils/CollectionUtils";
import RNPickerSelect from "./../native_elements/PickerElement";


export default class PickerInput extends Component{

    currentItemValue = "";

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
    }

    isValid() {
        this.setState({...this.state, startValidation: true});
        return this.currentItemValue != "" && this.currentItemValue != undefined
            && this.currentItemValue != null;
    }

    needValidation() {
        if (this.state.needValidation && !this.currentItemValue && this.state.startValidation) {
            return <Text style={styles.validatorText}>Required</Text>
        }
        return <View/>
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
        let requiredValidator = this.needValidation();

        if (!CollectionUtils.isNullOrEmpty(items)) {
            return <View style={styles.selectElement}>
                        <RNPickerSelect
                            ref="picker"
                            hideIcon={true}
                            placeholder={defaultItem}
                            items={items}
                            style={{inputIOS: styles.inputIOS, placeholderColor: 'black',
                                    inputAndroid: styles.inputAndroid, underline: {borderTopWidth: 0}}}
                            onValueChange={e => {this.changeItem(e, valueChangeCallBack)}}/>
                            <View style={styles.line}/>
                            {requiredValidator}
                    </View>

        }
        return <View />
    }
}

const styles = StyleSheet.create({
    line: {
        flex: 1,
        height: 1,
        backgroundColor: GRAY_COLOR,
    },
    inputIOS: {
        fontSize: 16,
        paddingTop: 8,
        color: 'black'
    },
    inputAndroid: {
        color: 'black',
        margin: 0,
        padding: 0
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

PickerInput.propTypes = {
    valueChangeCallBack: PropTypes.func,
    defaultItem: PropTypes.object,
    items: PropTypes.array,
    needValidation: PropTypes.bool
};
