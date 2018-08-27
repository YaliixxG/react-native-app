import React, { Component } from 'react'
import { WebView } from 'react-native'

class Details extends Component {
    static navigationOptions = {
        title: '详情' // 设置头部标题
    }
    render() {
        return (
            <WebView
                source={{ uri: this.props.navigation.state.params.uri }}
                startInLoadingState={true}
            />
        )
    }
}

export default Details
