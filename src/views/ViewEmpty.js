import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        borderColor: '#8E8E8E',
        borderWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    text: {
        color: '#8E8E8E',
    },
});

const EmptyView = (props) => (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {props.loadMore();}}>
            <Text style={styles.text}>No Items, Refresh</Text>
        </TouchableOpacity>
    </View>
);

export default EmptyView;
