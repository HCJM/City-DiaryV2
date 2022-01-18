import React, { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { Image, Text, View, TouchableOpacity } from "react-native"
import styles from "./styles"
 
export default function LandingScreen ( { navigation } ) {
 
    const onExploreButtonPress = () => {
        navigation.navigate('Public Audio Map')
    }

    const onLoginButtonPress = () => {
        navigation.navigate('Login')
    }
 
   return (
   
    <View style={styles.container}>
        <Image 
            style={styles.logo}
            source={require('../../../assets/logo.jpeg')}
        />
        <StatusBar style="auto" />
        <TouchableOpacity style={styles.exploreButton} onPress={() => onExploreButtonPress()}>
            <Text style={styles.exploreButtonTitle}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUpLoginButton} onPress={() => onLoginButtonPress()}>
            <Text style={styles.signUpLoginButtonTitle}>Login</Text>
        </TouchableOpacity>

    </View>


    
   )
}


  