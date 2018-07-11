import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {View} from 'native-base';
import {TEXT_COLOR} from 'src/utils/colors';
import CheckboxItem from 'src/views/form/pool/checkGroup/checkboxItem';
import BigCheckboxItem from 'src/views/form/pool/checkGroup/bigCheckboxItem';
import {SMALL} from 'src/data/models/diagnosis/condition/check/checkType';

export default class CheckboxGroup extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({items: this.items});
    }

    changeItemState = (items, element, active) => {
        let view = items.filter(item => element.id == item.id)[0];
        items[items.indexOf(view)].active = active;
        this.setState({items: items});
    };

    _renderSmallCheckbox() {
        return (
            <View style={styles.container}>
                {this.props.items && this.props.items.map(item =>
                    <CheckboxItem key={item.title} title={item.title}
                                  isSelected={item.active}
                                  onSelect={() => {
                                      this.changeItemState(this.props.items, item, !item.active)
                                  }}/>)}
            </View>);
    }

    _renderBigCheckBox() {
        return (
            <View style={styles.bigContainer}>
                <Text style={styles.title}>{this.props.title}</Text>
                <View style={styles.many}>
                    {this.props.items && this.props.items.map(item =>
                        <BigCheckboxItem key={item.title} title={item.title}
                                         isSelected={item.active}
                                         onSelect={() => {
                                             this.changeItemState(this.props.items, item, !item.active)
                                         }}/>)}
                </View>
            </View>
        );
    }

    render() {
        if (this.props.type == SMALL) {
            return this._renderSmallCheckbox();
        } else {
            return this._renderBigCheckBox();
        }
    }
}

const styles = StyleSheet.create({
    bigContainer: {
        marginTop: 24
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'left',
        color: TEXT_COLOR,
        alignSelf: 'center'
    },
    many: {
        flexWrap: 'wrap',
        flexDirection: 'row'
    }
});

CheckboxGroup.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    items: PropTypes.array
};