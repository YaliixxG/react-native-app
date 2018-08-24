import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import $ from '../util.js/api'
import axios from 'axios'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Activity extends Component {
    constructor(props) {
        super(props)
        this.movieData = []
    }

    componentWillMount() {
        this.activeList()
    }

    activeList = () => {
        axios.get($.movie).then(res => {
            console.log(res)
            this.setState({
                movieData: (this.movieData = res.data.subjects)
            })
        })
    }

    render() {
        return (
            <View style={styles.activityWrap}>
                <View style={styles.container}>
                    <Swiper style={styles.wrapper} autoplay>
                        <View style={styles.slide}>
                            <Image
                                style={styles.imageBanner}
                                source={require('../assets/images/slide1.jpg')}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                style={styles.imageBanner}
                                source={require('../assets/images/slide2.jpg')}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                style={styles.imageBanner}
                                source={require('../assets/images/slide3.jpg')}
                            />
                        </View>
                    </Swiper>
                </View>
            </View>
        )
    }
}

export default Activity

const styles = StyleSheet.create({
    container: {
        height: 250
    },
    activityWrap: {
        width,
        height
    },
    itemlist: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    movieListWrap: {
        flex: 1
    }
})
