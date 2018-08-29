import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import $ from '../util.js/api'
import axios from 'axios'

class Activity extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeData: []
        }
    }

    componentWillMount() {
        this.activeList()
    }

    activeList = () => {
        axios.get($.active).then(res => {
            this.setState({
                activeData: (this.activeData = res.data.events)
            })
        })
    }

    render() {
        return (
            <View style={styles.activityWrap}>
                <FlatList
                    data={this.state.activeData}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={3}
                    renderItem={({ item }) => (
                        <View style={styles.actItem}>
                            <TouchableOpacity
                                onPress={() =>
                                    this.props.navigation.navigate('Details', {
                                        uri: item.alt
                                    })
                                }
                            >
                                <Image
                                    source={{
                                        uri: item.image,
                                        width: 140,
                                        height: 160
                                    }}
                                    resizeMode="stretch"
                                />
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.actText}>{item.title}</Text>
                            </View>
                        </View>
                    )}
                />
            </View>
        )
    }
}

export default Activity

const styles = StyleSheet.create({
    activityWrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: 10
    },
    actItem: {
        flex: 1,
        width: 140,
        height: 260
    },
    actText: {
        width: 140,
        height: 100
    }
})
