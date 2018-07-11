import PropTypes from 'prop-types';
import {Text, View, StyleSheet, Platform} from 'react-native';
import React, {Component} from 'react';
import {GRAY_COLOR, GRAY_LIGHT, TEXT_COLOR} from 'src/utils/colors';
import CollectionUtils from 'src/utils/collectionUtils';
import RNPickerSelect from 'src/views/native_elements/pickerElement';


export default class PickerInput extends Component{

    currentItemValue = '';

    constructor(props) {
        super(props);
        this.state = props;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({...this.state, ...nextProps});
        this.currentItemValue = this.props.value;
    }

    isValid() {
        this.setState({...this.state, startValidation: true});
        return this.currentItemValue != '' && this.currentItemValue != undefined
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
        const {label} = this.props;
        let requiredValidator = this.needValidation();

        if (!CollectionUtils.isNullOrEmpty(items)) {
            return <View style={styles.selectElement}>
                        {label && <Text style={{fontSize: 14, color: GRAY_COLOR}}>{label}</Text>}
                        <RNPickerSelect
                            ref='picker'
                            mode={this.props.mode}
                            hideIcon={true}
                            placeholder={defaultItem ? defaultItem : {}}
                            items={items}
                            value={this.props.value}
                            style={{inputIOS: styles.inputIOS, placeholderColor: TEXT_COLOR,
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
        backgroundColor: GRAY_LIGHT,
    },
    inputIOS: {
        fontSize: 16,
        color: TEXT_COLOR,
        padding: 0,
        paddingLeft: 8
    },
    inputAndroid: {
        color: TEXT_COLOR,
        margin: 0,
        padding: 0
    },
    selectElement: {
        flex: 1,
        marginTop: 16,
        flexDirection: 'column',
        width: 'auto',
        justifyContent: 'flex-start'
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
    needValidation: PropTypes.bool,
    prompt: PropTypes.string,
    label: PropTypes.string
};
