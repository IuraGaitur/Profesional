import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class NewsPostTitle extends Component {

    render() {

        return (
            <View>
                {

                <Text style={[styles.titleText, this.props.style]}>{this.props.children}</Text>

                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 18,
        color: '#262626',
        marginTop: 8,
        marginBottom: 8,
        fontFamily: 'WorkSans-Bold'
    }
});

export default NewsPostTitle;
