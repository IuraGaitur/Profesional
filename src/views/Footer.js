import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

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

const Footer = (props) => (
    <View style={styles.container}>
        <ActivityIndicator color="#442772" animating={true}
                           size="small"/>
    </View>
);

export default Footer;
