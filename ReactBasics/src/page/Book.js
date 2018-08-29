import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    Dimensions,
    TouchableOpacity
} from 'react-native'

import axios from 'axios'
import $ from '../util.js/api'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
class Book extends Component {
    constructor(props) {
        super(props)
        this.showTxt = ''
        this.bookArr = []
    }

    searchBook = p => {
        axios.get(`${$.sousuoBook}?q=${p}`).then(res => {
            console.log(res)
            this.setState({
                bookArr: (this.bookArr = res.data.books)
            })
        })
    }

    componentWillMount() {
        this.searchBook('一')
    }

    render() {
        return (
            <View style={styles.bookWrap}>
                <TextInput
                    placeholder="搜索图书"
                    placeholderTextColor="#ccc"
                    returnKeyType="search"
                    onChangeText={showTxt => {
                        this.setState({
                            showTxt: (this.showTxt = showTxt)
                        })
                    }}
                    onEndEditing={() => {
                        this.searchBook(this.showTxt)
                    }}
                />
                <View style={styles.bookArea}>
                    <FlatList
                        data={this.bookArr}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={styles.actItem}>
                                <TouchableOpacity
                                    onPress={() =>
                                        this.props.navigation.navigate(
                                            'Details',
                                            {
                                                uri: item.alt
                                            }
                                        )
                                    }
                                >
                                    <Image
                                        source={{
                                            uri: item.images.small,
                                            width: 140,
                                            height: 160
                                        }}
                                        resizeMode="stretch"
                                    />
                                </TouchableOpacity>
                                <View>
                                    <Text style={styles.actText}>
                                        {item.title}
                                    </Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

export default Book

const styles = StyleSheet.create({
    bookWrap: {
        flex: 1
    },
    bookArea: {
        flex: 1,
        width,
        height,
        padding: 10,
        justifyContent: 'space-around'
    },
    actItem: {
        flex: 1,
        alignItems: 'center'
    },
    actText: {
        margin: 10
    }
})
