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
        padding: 15
    }
});

const AppBar = () => {
    return (
        <TouchableWithoutFeedback onPress={null}>
            <View style={styles.container}>
                <Text fontSize="subheading" style={styles.titleText} color={"textSecondary"}>Repositories</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default AppBar;