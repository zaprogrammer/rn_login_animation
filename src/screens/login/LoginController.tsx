import React, { useState } from "react";
import { SafeAreaView, ImageBackground } from "react-native";
import { appStyles } from "commons/styles";
import CustomTextBox from "components/CustomTextBox";
import AnimatedView from "components/AnimatedView";
import LinearGradient from 'react-native-linear-gradient';

const LoginController = ({ navigation }: any) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (

        <LinearGradient
            style={{ flex: 1 }}
            colors={['#FF00FF', '#7F00F0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}>
            <SafeAreaView style={[appStyles.safeArea]}>
                <AnimatedView delay={1000}>
                    {<CustomTextBox
                        placeholder={'Username'}
                        returnKeyType={'next'}
                        value={username}
                        onChangeText={(value) => setUsername(value)}
                        onSubmitEditing={() => console.log(username)}>
                    </CustomTextBox>}
                </AnimatedView>

                <AnimatedView delay={1800} style={{ marginTop: 30 }}>
                    {<CustomTextBox
                        placeholder={'Password'}
                        returnKeyType={'done'}
                        isPassword={true}
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        onSubmitEditing={() => console.log(password)}>
                    </CustomTextBox>}
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
        </LinearGradient>
    )
};

export default LoginController
