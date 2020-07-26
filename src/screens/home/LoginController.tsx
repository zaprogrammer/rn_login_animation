import React, { useEffect, useState, useRef } from "react";
import { SafeAreaView, Animated, ImageBackground, Text, View } from "react-native";
import { appStyles } from "commons/styles";
import PasswordTextBox from "components/PasswordTextBox";
import AnimatedView from "components/AnimatedView";

const LoginController = ({ navigation }: any) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <ImageBackground source={require('../../../res/background.jpg')}
            resizeMode='cover'
            style={{ width: '100%', height: '100%' }}>
            <SafeAreaView style={[appStyles.safeArea]}>

                <AnimatedView delay={1000}>
                    {<PasswordTextBox
                        placeholder={'Username'}
                        returnKeyType={'next'}
                        value={username}
                        onChangeText={(value) => setUsername(value)}
                        onSubmitEditing={() => console.log(username)}>
                    </PasswordTextBox>}
                </AnimatedView>

                <AnimatedView delay={1800}>
                    {<PasswordTextBox
                        placeholder={'Password'}
                        returnKeyType={'done'}
                        isPassword={true}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        onSubmitEditing={() => console.log(password)}>
                    </PasswordTextBox>}
                </AnimatedView>

                {/* <Animated.View style={{ opacity: scalePassword, transform: [{ translateY: transformField(scalePassword, 40) }, { perspective: 1000 }] }}>
                    <PasswordTextBox
                        placeholder={'Password'}
                        returnKeyType={'done'}
                        isPassword={true}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        onSubmitEditing={() => console.log(password)}>
                    </PasswordTextBox>
                </Animated.View> */}
            </SafeAreaView>
        </ImageBackground>
    )
};

export default LoginController
