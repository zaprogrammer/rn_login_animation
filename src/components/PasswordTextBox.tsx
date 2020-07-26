import React, { Component } from "react";
import { TextInput, View, TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { windowWidth } from "screens/home/styles";
import PropTypes from 'prop-types';

interface Props {
    placeholder: string,
    returnKeyType: any,
    value: any,
    onChangeText: any,
    onSubmitEditing: any,
    isPassword?: boolean
}

interface State {
    hidePassword: boolean
}

class PasswordTextBox extends Component<Props, State> {

    static propTypes = {
        placeholder: PropTypes.string,
        returnKeyType: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
        onChangeText: PropTypes.func,
        onSubmitEditing: PropTypes.func,
        isPassword: PropTypes.bool
    }

    state = {
        hidePassword: true
    };

    render = () => {

        const { placeholder, returnKeyType, value, onChangeText, onSubmitEditing, isPassword = false } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.textBoxContainer}>
                    <TextInput
                        placeholderTextColor={"rgba(127, 0, 255, 0.64 )"}
                        style={styles.textBox}
                        value={value}
                        underlineColorAndroid="transparent"
                        placeholder={placeholder}
                        secureTextEntry={isPassword ? this.state.hidePassword : false}
                        autoCompleteType={isPassword ? "password" : "name"}
                        autoCorrect={false}
                        onChangeText={onChangeText}
                        returnKeyType={returnKeyType}
                        onSubmitEditing={onSubmitEditing}
                    />
                    {isPassword && <TouchableOpacity activeOpacity={0.8} style={styles.touchableButton}
                        onPress={this.changePasswordVisibility}>
                        <Icon color={"rgba(127, 0, 255, 0.64)"}
                            name={(this.state.hidePassword) ? "visibility" : "visibility-off"} size={25} />
                    </TouchableOpacity>}
                </View>
            </View>
        );
    }

    private changePasswordVisibility = () => {
        this.setState({ hidePassword: !this.state.hidePassword });
    }
}

const styles = StyleSheet.create(
    {
        container: {
            // flex: 1,
            // justifyContent: "center",
            // alignItems: "center",
            width: windowWidth - 40,
            marginLeft: "0%",
        },
        textBoxContainer: {
            position: "relative",
            alignSelf: "stretch",
            justifyContent: "center",
            color: "black"
        },
        textBox: {
            fontSize: 14,
            alignSelf: "stretch",
            height: 42,
            paddingRight: 45,
            fontWeight: 'bold',
            paddingVertical: 0,
            color: "rgba(127, 0, 255, 0.5)",
            borderWidth: 1,
            borderBottomColor: "rgba(127, 0, 255, 0.64)",
            borderLeftColor: "transparent",
            borderTopColor: "transparent",
            borderRightColor: "transparent",
        },
        touchableButton: {
            position: "absolute",
            right: 4,
            width: 40,
            padding: 8,
        },
    });

export default PasswordTextBox;