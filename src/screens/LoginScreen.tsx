import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View,  } from "react-native";
import useAuthStore from "../store/authStore";
import { signIn } from "../store/authApiService";

export default function LoginScreen(): JSX.Element {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        try {
        const params = {
            username: 'emilys',
            password: 'emilyspass',
        }
        signIn(params)
    } catch (error) {
        console.log('login Screen error:', error)
    }
    }

    return (
        <View style={styles.main}>
            <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter Email"
            placeholderTextColor='red'
            style={styles.input}
            />
            <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Enter Password"
            placeholderTextColor={'red'}
            secureTextEntry
            style={styles.input}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.text}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 50,
        alignItems: 'center',
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'silver',
    },
    input: {
        borderWidth: 1,
        width: '100%',
        borderRadius: 10,
        marginBottom: 15,
        paddingLeft: 15,
        backgroundColor: 'silver'
    },
    main: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        color: 'red',
    }
})