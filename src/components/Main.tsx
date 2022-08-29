import React from 'react';
import Constants from 'expo-constants';
import { Button, StyleSheet, TouchableOpacity, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';
import theme from '../theme';
import AppBar from './AppBar';
// import { Route, NativeRouter, Link } from 'react-router-native';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
    },
    title: {
        marginLeft: 100,
        marginTop: 20,
        marginBottom: 20,
        color: theme.colors.primary,
        fontSize: 20,
    },
});

const Main = () => {
    const goToAbout = () => {
        Actions.about()
    }
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Button title="Go to about" onPress={goToAbout}>

            </Button>
            <Text style={styles.title} fontWeight="bold" fontSize="subheading" color="primary">Rate Repository Application</Text>
            <RepositoryList></RepositoryList>
        </View>
    );
};

export default Main;