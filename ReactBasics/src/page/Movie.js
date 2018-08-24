import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    FlatList
} from 'react-native'
import Swiper from 'react-native-swiper'
import $ from '../util.js/api'
import axios from 'axios'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

class Movie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieData: [],
            movieOnData: []
        }
    }

    componentDidMount() {
        this.movieList(), this.movieOnList()
    }

    movieList = () => {
        axios.get($.movie).then(res => {
            this.setState({
                movieData: (this.state.movieData = res.data.subjects)
                // movieOnData: (this.state.movieOnData = res.data.subjects)
            })
        })
    }

    movieOnList = () => {
        axios.get($.movieOn).then(res => {
            this.setState({
                movieOnData: (this.state.movieOnData = res.data.subjects)
            })
        })
    }

    render() {
        return (
            <View style={styles.movieWrap}>
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
                <View style={styles.movieOnWrap}>
                    <Text style={styles.movieTitle}>电影.正在热映</Text>
                    <View style={styles.OnListItemWrap}>
                        <FlatList
                            data={this.state.movieOnData}
                            keyExtractor={item => item.id}
                            horizontal={true}
                            renderItem={({ item }) => (
                                <View style={styles.OnListItem}>
                                    <Image
                                        source={{
                                            uri: item.images.small,
                                            width: 100,
                                            height: 100
                                        }}
                                    />
                                    <View style={styles.movieSoonTxt}>
                                        <Text
                                            style={{
                                                width: 100
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                    </View>
                                </View>
                            )}
                        />
                    </View>
                </View>
                <View style={styles.movieListWrap}>
                    <Text style={styles.movieTitle}>电影.TOP20</Text>
                    <FlatList
                        data={this.state.movieData}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.itemlist}>
                                <Image
                                    style={styles.movieImg}
                                    source={{
                                        uri: item.images.small,
                                        width: 60,
                                        height: 100
                                    }}
                                />
                                <View style={styles.movieTxt}>
                                    <Text style={styles.item}>
                                        {item.original_title}
                                    </Text>
                                    <Text>{item.title}</Text>
                                    <Text>{item.casts[0].name}</Text>
                                    <Text>{item.directors[0].name}</Text>
                                    <Text>{item.year}</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

export default Movie

const styles = StyleSheet.create({
    container: {
        height: 250
    },
    movieWrap: {
        width,
        height,
        flex: 1
    },
    itemlist: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    movieImg: {
        flex: 1
    },
    movieTxt: {
        flex: 2,
        alignItems: 'flex-end'
    },
    movieListWrap: {
        flex: 2.2,
        padding: 10
    },
    movieOnWrap: {
        flex: 1,
        padding: 10,
        marginBottom: 20
    },
    movieTitle: {
        marginBottom: 10,
        fontWeight: 'bold'
    },
    onListItemWrap: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    OnListItem: {
        flex: 1,
        marginRight: 10
    },
    imageBanner: {
        width,
        height: 250
    },
    movieSoonTxt: {
        alignItems: 'center'
    }
})
