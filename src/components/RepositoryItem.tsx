import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text"

const RepositoryItem = (props) => {
    console.log(props)
    return (
        <View style={[styles.container, styles.flexContainer]}>

            <Text color="secondary">
                Fullname: {props.item.fullName}
            </Text>
            <Text color="secondary">

                Description: {props.item.description}
            </Text>
            <Text>

                Language: {props.item.language}
            </Text>
            <Text>
                Stars: {props.item.forksCount}

            </Text>
            <Text>
                Forks: {props.item.stargazersCount}
            </Text>
            <Text>
                Reviews: {props.item.ratingAverage}

            </Text>


            <Text color="secondary">
                Rating: {props.item.reviewCount}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff',
    },
    text: {
        color: 'grey',
        fontSize: 14,
    },
    blueText: {
        color: 'blue',
    },
    bigText: {
        fontSize: 24,
        fontWeight: '700',
    },
    flexContainer: {
        flexDirection: 'column',
        justifyContent: "center",
    }
});
export default RepositoryItem;