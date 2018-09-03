import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    ToastAndroid
} from 'react-native'

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.nameTxt = 'admin'
        this.pswTxt = '123'
    }
    isCanlogin = (nameTxt, pswTxt) => {
        if (this.nameTxt == 'admin' && this.pswTxt == '123')
            this.props.navigation.navigate('App')
        else ToastAndroid.show('登录信息错误', ToastAndroid.SHORT)
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.instructions}
                    source={require('../assets/images/me.jpg')}
                />
                <Text style={styles.instructionTxt}>登录</Text>
                <View style={styles.loginInput}>
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none" //设置首字母不自动大写
                        underlineColorAndroid={'transparent'} //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'} //设置占位符颜色
                        placeholder={'用户名'} //设置占位符
                        onChangeText={nameTxt => {
                            this.setState({
                                nameTxt: (this.nameTxt = nameTxt)
                            })
                        }}
                    />
                    <TextInput
                        style={styles.input}
                        autoCapitalize="none" //设置首字母不自动大写
                        underlineColorAndroid={'transparent'} //将下划线颜色改为透明
                        placeholderTextColor={'#ccc'} //设置占位符颜色
                        placeholder={'密码'} //设置占位符
                        onChangeText={pswTxt => {
                            this.setState({
                                pswTxt: (this.pswTxt = pswTxt)
                            })
                        }}
                    />
                    <View style={styles.sb}>
                        <Button
                            title="登录"
                            color="#841584"
                            onPress={() => {
                                this.isCanlogin(this.nameTxt, this.pswTxt)
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    instructions: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        marginTop: 160
    },
    instructionTxt: {
        textAlign: 'center'
    },
    input: {
        width: 200,
        height: 40,
        // fontSize: 16,
        // color: '#222', //输入框输入的文本为白色
        borderWidth: 1,
        margin: 10,
        borderRadius: 5
    },
    sb: {
        width: 200,
        height: 40,
        // fontSize: 16,
        // color: '#222', //输入框输入的文本为白色
        margin: 10,
        borderColor: '#841584'
    },
    loginInput: {
        width: 200
    }
})
