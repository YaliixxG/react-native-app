import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'

class Book extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Book</Text>
            </View>
        )
    }
}

export default Book

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
