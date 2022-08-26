import React from "react";
import { StyleSheet, Text, View } from "react-native";

const RepositoryItem = (props) => {
    console.log(props)
    return (
        <View style={page.container}>

            <Text >
                Fullname: {props.item.fullName}
                Description: {props.item.description}
                Language: {props.item.language}
                Stars: {props.item.stars}
                Forks: {props.item.forks}
                Reviews: {props.item.reviews}
                Rating: {props.item.rating}
            </Text>
        </View >
        // <FlatList
        //     data={repositories}
        //     ItemSeparatorComponent={ItemSeparator}
        //     renderItem={RepositoryItem} keyExtractor={item => item.id}
        // // other props
        // />
    );
};

const page = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        color: '#000'
    },
});
export default RepositoryItem;