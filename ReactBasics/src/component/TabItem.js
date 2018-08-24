import React, { Component } from 'react'
import { Image } from 'react-native'

export default class TabItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Image source={this.props.icon} style={{ width: 30, height: 30 }} />
        )
    }
}
