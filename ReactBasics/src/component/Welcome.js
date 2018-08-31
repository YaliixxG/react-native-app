import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View, Image } from 'react-native'

class Welcome extends Component {
    componentDidMount() {
        this.goHome()
    }

    goHome = () => {
        setTimeout(_ => {
            this.props.navigation.navigate('Login')
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.instructions}
                    source={require('../assets/images/me.jpg')}
                />
                <Text style={styles.instructionTxt}>你好，豆豆</Text>
            </View>
        )
    }
}

export default Welcome

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
