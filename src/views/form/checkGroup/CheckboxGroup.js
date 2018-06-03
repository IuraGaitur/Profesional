import React, {Component} from 'react';
import {Text, StyleSheet} from "react-native";
import {View, Button} from "native-base";
import {GRAY_COLOR, SELECTED} from "../../../utils/Colors";
import CheckboxItem from "./CheckboxItem";

export default class CheckboxGroup extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.setState({items: this.items});
    }

    changeItemState = (element, active) => {
        let view = this.items.filter(item => element.index == item.index)[0];
        this.items[this.items.indexOf(view)].active = active;
        this.setState({items: this.items});
    };

    render() {
        return <View style={styles.container}>
            {this.props.items && this.props.items.map(item =>
                <CheckboxItem key={item.title} title={item.title}
                              isSelected={item.active}
                              onSelect={() => {this.changeItemState(item, !item.active)}}/>)}
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})