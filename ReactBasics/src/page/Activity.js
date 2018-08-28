import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import $ from '../util.js/api'
import axios from 'axios'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

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
                <View style={styles.activityWrap} />
                <FlatList
                    data={this.state.activeData}
                    keyExtractor={item => item.id}
                    horizontal={true}
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
        width: 140,
        height: 200
    },
    actText: {
        width: 140,
        height: 40
    }
})
