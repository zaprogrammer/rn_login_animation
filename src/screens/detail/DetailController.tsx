import React, {useEffect} from "react";
import {SafeAreaView, Text} from "react-native";
import {appStyles} from "commons/styles";
import {detailStyles} from "screens/detail/styles";

const DetailScreenController = () => {

    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={appStyles.safeArea}>
            <Text style={[detailStyles.cardText, detailStyles.title]}>Hello Details screen</Text>
        </SafeAreaView>
    )
};

export default DetailScreenController
