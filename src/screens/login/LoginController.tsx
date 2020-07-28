import React, { useState } from 'react';
import { SafeAreaView, Pressable, Text, StyleSheet } from 'react-native';
import { appStyles } from 'commons/styles';
import CustomTextBox from 'components/CustomTextBox';
import AnimatedView from 'components/AnimatedView';
import LinearGradient from 'react-native-linear-gradient';

const LoginController = ({ navigation }: any) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LinearGradient
            style={{ flex: 1 }}
            colors={['#FF00FF', '#7F00E0']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.1, 0.7]}>
            <SafeAreaView style={[appStyles.safeArea]}>
                <AnimatedView delay={1000}>
                    {
                        <CustomTextBox
                            placeholder={'Username'}
                            returnKeyType={'next'}
                            value={username}
                            onChangeText={(value) => setUsername(value)}
                            onSubmitEditing={() => console.log(username)}
                        />
                    }
                </AnimatedView>

                <AnimatedView delay={1800} style={{ marginTop: 30 }}>
                    {
                        <CustomTextBox
                            placeholder={'Password'}
                            returnKeyType={'done'}
                            isPassword={true}
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            onSubmitEditing={() => console.log(password)}
                        />
                    }
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


                <AnimatedView delay={2000} style={styles.button}>
                    <Pressable style={({ pressed }) => [
                        {
                            backgroundColor: pressed ? 'yellow' : 'transparent',
                            borderRadius: 8,
                            elevation: pressed ? 10 : 5,
                        }]} onPress={() => console.log("Hello!")}>
                        <LinearGradient
                            style={styles.gradientContainer}
                            colors={['#7F00E0', '#FF00FF']}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                            locations={[0.1, 0.9]}>
                            <Text style={styles.buttonText}>Press me!</Text>
                        </LinearGradient>
                    </Pressable>
                </AnimatedView>

            </SafeAreaView>
        </LinearGradient>
    );
};

export default LoginController;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    gradientContainer: {
        width: '100%',
        height: '100%',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressable: {
        borderRadius: 8
    },
    button: {
        marginTop: 40,
        borderRadius: 8,
        height: 50,
        width: '70%',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
});
