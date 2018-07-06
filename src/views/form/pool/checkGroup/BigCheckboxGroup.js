import {View} from 'native-base';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Text, StyleSheet} from 'react-native';
import BigCheckboxItem from 'src/views/form/pool/checkGroup/BigCheckboxItem';

export default class BigCheckboxGroup extends Component {


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

    render() {
        const {items} = this.props;
        return (
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                {items && items.map(item =>
                    <BigCheckboxItem key={item.title} title={item.title}
                                     isSelected={item.active}
                                     onSelect={() => {this.changeItemState(items, item, !item.active)}}/>)}
            </View>);
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
});

BigCheckboxGroup.propTypes = {
    items: PropTypes.array
};