import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from "../theme";



const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backgroundAppBar

    },
    titleText: {
        color: "#fff",
        padding: 15
    }
});

const BoxCard = () => {
    return (

        <View style={styles.container}>
        </View>
    );
};

export default BoxCard;