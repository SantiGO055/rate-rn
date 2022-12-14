import React from "react";

import { StyleSheet, View, Image } from "react-native";
import theme from "../theme";
import Text from "./Text"

const RepositoryItem = (props) => {
    console.log(props)
    return (
        <View style={styles.container}>

            <Text fontWeight="bold">
                <BoxTextRepo language={props.item.language} uriImage={props.item.ownerAvatarUrl} fullName={props.item.fullName}
                    description={props.item.description}

                    stars={props.item.stargazersCount}
                    forks={props.item.forksCount}
                    reviews={props.item.ratingAverage}
                    rating={props.item.reviewCount}
                >

                </BoxTextRepo>

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

const BoxTextRepo = ({ fullName, description, language, uriImage, stars, forks, reviews, rating }) => {
    let starsK = stars >= 1000 ? (stars / 1000).toString() : stars
    starsK = starsK.length > 3 ? starsK.slice(0, 4) + " k" : starsK

    console.log(starsK)
    let forksK = forks >= 1000 ? (forks / 1000).toString() : forks
    forksK = forksK.length > 3 ? forksK.slice(0, 4) + " k" : forksK

    console.log(forksK)
    return (
        <View>


            <View style={styles.flexContainerTextRepo}>
                <Image
                    style={styles.image}
                    source={uriImage}
                >
                </Image>
                <View style={styles.flexContainerText}>

                    <Text fontWeight="bold">
                        {fullName}
                    </Text>
                    <View style={{ flexGrow: 1, flexDirection: "row" }}>
                        <Text style={{ flex: 1, width: 1 }}>
                            {description}
                        </Text>

                    </View>

                    <BoxLanguage text={language}></BoxLanguage>
                </View>

            </View>
            <View style={styles.flexContainerRow}>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight="bold">{starsK}</Text>
                    <Text >Stars</Text>

                </View>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight="bold">{forksK}</Text>
                    <Text >Forks</Text>

                </View>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight="bold">{reviews}</Text>
                    <Text >Reviews</Text>
                </View>
                <View style={styles.flexContainerColumn}>
                    <Text fontWeight="bold">{rating}</Text>
                    <Text>Rating</Text>

                </View>


            </View>
        </View>
    );
}
const BoxLanguage = ({ text }) => {
    return (

        <View style={styles.language}>
            <Text color={"textSecondary"}>{text}</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: theme.colors.textSecondary,

    },
    flexContainerTextRepo: {
        flexDirection: 'row',
        justifyContent: "flex-start",

    },
    flexContainerRow: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "center"
    },
    flexContainerColumn: {
        flexDirection: "column",
        paddingRight: 40,
        paddingLeft: 15,
        justifyContent: "center"
    },
    flexContainerText: {
        flexDirection: "column",
        paddingLeft: 20,


    },
    image: {
        paddingTop: 50,
        paddingLeft: 0,
        width: 66,
        height: 58,
        borderRadius: 10
    },
    language: {
        backgroundColor: theme.colors.primary,
        borderRadius: 2,
        padding: 5,


    },
});
export default RepositoryItem;