import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';

class CategoryButton extends Component {

    render() {

        return (
            <Text style={styles.category}>{this.props.children}</Text>

        );

    }
}

const styles = StyleSheet.create({
    category: {
        flexDirection: 'column',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 3,
        paddingBottom: 3,
        marginRight: 4,
        backgroundColor: '#442772',
        color: '#fff',
        fontSize: 14,
        borderWidth: 0.5,
        borderColor: '#442772',
        overflow: 'hidden',
        fontFamily: 'WorkSans-Medium'
    }
});

export default CategoryButton;
