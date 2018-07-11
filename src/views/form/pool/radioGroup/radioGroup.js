import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import {View} from 'native-base';
import {TEXT_COLOR} from 'src/utils/colors';
import RadioItem from 'src/views/form/pool/radioGroup/radioItem';

export default class RadioBoxGroup extends Component {

    FIRST_ITEM = 0;
    SECOND_ITEM = 1;


    constructor(props) {
        super(props);
        this.state = this.props;
    }

    changeItemState = (items, pos) => {
        for (let i = 0; i < items.length; i++) {
            items[i].active = false;
        }
        items[pos].active = true;
        this.setState({items: items});
    };

    render() {
        const {items} = this.state;

        return (
            <View style={styles.view}>
                <View style={styles.parent}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.container}>
                        <RadioItem key={items[this.FIRST_ITEM].title} title={items[this.FIRST_ITEM].label}
                                   isSelected={items[this.FIRST_ITEM].active}
                                   onSelect={() => {this.changeItemState(this.props.items, this.FIRST_ITEM)}}
                                   style={styles.radioItem}

                        />

                        <RadioItem key={items[this.SECOND_ITEM].title} title={items[this.SECOND_ITEM].label}
                                   isSelected={items[this.SECOND_ITEM].active}
                                   onSelect={() => {this.changeItemState(this.props.items, this.SECOND_ITEM)}}
                                   style={styles.radioItem}
                        />

                    </View>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    view: {
        height: 100
    },
    parent: {
        flex: 1,
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        marginHorizontal: 30,
        marginVertical: 20,
        textAlign: 'center',
        color: TEXT_COLOR
    },
    radioItem : {
        width: '42%',
        height: 60
    }
});