import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Login Form */}
            <View style={styles.loginForm}>
                <Text style={styles.loginHeading}>Login</Text>
                <Text style={styles.loginSubheading}>Let's Login to your account</Text>

                {/* Mobile Number Input */}
                <View style={styles.inputContainer}>
                    <Text style={styles.countryCode}>+91</Text>
                    <TextInput
                        style={styles.inputField}
                        placeholder="Enter mobile number"
                        keyboardType="phone-pad"
                    />
                </View>

                {/* Get OTP Button */}
                <TouchableOpacity style={styles.otpButton}>
                    <Text style={styles.otpButtonText}>Get OTP</Text>
                </TouchableOpacity>
            </View>

            {/* Signup Text Outside the Box */}
            <Text style={styles.signupText}>
                Don't have an account?{' '}
                <Text
                    style={styles.signupLink}
                    onPress={() => navigation.navigate('Signup')}
                >
                    Signup
                </Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginForm: {
        width: '90%',
        backgroundColor: '#FFA500',
        borderRadius: 20,
        paddingVertical: 30,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 5,
    },
    loginHeading: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
        textAlign: 'left',
    },
    loginSubheading: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 20,
        textAlign: 'left',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFA500',
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#FFF',
        marginBottom: 30,
        paddingHorizontal: 10,
        height: 50,
    },
    countryCode: {
        fontSize: 16,
        color: '#FF8000',
        marginRight: 1,
        marginLeft: -10,
        borderRadius: 6,
        paddingVertical: 12.5,
        paddingHorizontal: 11,
        backgroundColor: '#fff'
    },
    inputField: {
        flex: 1,
        fontSize: 16,
        color: '#FFF',
    },
    otpButton: {
        backgroundColor: '#FFF5E6',
        borderRadius: 10,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#000',
    },
    otpButtonText: {
        fontSize: 16,
        color: '#FF8000',
        fontWeight: 'bold',
    },
    signupText: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },
    signupLink: {
        color: '#FF8000',
        fontWeight: 'bold',
        fontSize: 18
    },
});
