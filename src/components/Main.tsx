import React from 'react';
import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import Text from './Text';
import theme from '../theme';
import AppBar from './AppBar';

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
    return (
        <View style={styles.container}>
            <AppBar></AppBar>
            <Text style={styles.title} fontWeight="bold" fontSize="subheading" color="primary">Rate Repository Application</Text>
            <RepositoryList></RepositoryList>
        </View>
    );
};

export default Main;