import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
            </View>
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    instructions: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    instructionTxt: {
        textAlign: 'center'
    }
})
