import React, {Component} from 'react';
import {Text, StyleSheet} from "react-native";
import {View, Button} from "native-base";
import {GRAY_COLOR, SELECTED, TEXT_COLOR} from "../../../utils/Colors";
import RadioItem from "./RadioItem";

export default class RadioBoxGroup extends Component {


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
            <View style={{height: 100}}>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.title}>{this.props.title}</Text>
                    <View style={styles.container}>
                        <RadioItem key={items[0].title} title={items[0].label}
                                   isSelected={items[0].active}
                                   onSelect={() => {
                                       this.changeItemState(this.props.items, 0)
                                   }}
                                   style={{width: '42%', height: 60}}

                        />

                        <RadioItem key={items[1].title} title={items[1].label}
                                   isSelected={items[1].active}
                                   onSelect={() => {
                                       this.changeItemState(this.props.items, 1)
                                   }}
                                   style={{width: '42%', height: 60}}
                        />

                    </View>
                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
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
});