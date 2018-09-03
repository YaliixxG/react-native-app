import React, { Component } from 'react'
import Welcome from '../component/Welcome'
import Login from '../component/Login'
import Details from './Details'
import Movie from './Movie'
import Book from './Book'
import Activity from './Activity'
import TabItem from '../component/TabItem'
import {
    createStackNavigator,
    createBottomTabNavigator
} from 'react-navigation'
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
    'Warning: isMounted(...) is deprecated',
    'Module RCTImageLoader'
])

const TabBottom = createBottomTabNavigator(
    {
        Movie: {
            screen: Movie,
            navigationOptions: {
                tabBarLabel: '电影',
                title: '电影',
                tabBarIcon: ({ tintColor }) => (
                    <TabItem
                        tintColor={tintColor}
                        icon={require('../assets/images/movie.jpg')}
                    />
                )
            }
        },
        Book: {
            screen: Book,
            navigationOptions: {
                tabBarLabel: '读书',
                title: '读书',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabItem
                        focused={focused}
                        tintColor={tintColor}
                        icon={require('../assets/images/reader.jpg')}
                    />
                )
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarLabel: '活动',
                title: '活动',
                tabBarIcon: ({ focused, tintColor }) => (
                    <TabItem
                        focused={focused}
                        tintColor={tintColor}
                        icon={require('../assets/images/activity2.png')}
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            //当前选中的tab bar的文本颜色和图标颜色
            activeTintColor: 'orange',
            //当前未选中的tab bar的文本颜色和图标颜色
            inactiveTintColor: '#353535',
            //是否显示tab bar的图标，默认是false
            showIcon: true,
            //showLabel - 是否显示tab bar的文本，默认是true
            showLabel: true,
            //是否将文本转换为大小，默认是true
            upperCaseLabel: false,
            //material design中的波纹颜色(仅支持Android >= 5.0)
            pressColor: '#788493',
            //按下tab bar时的不透明度(仅支持iOS和Android < 5.0).
            pressOpacity: 0.8,
            //tab bar的样式
            style: {
                backgroundColor: '#fff',
                paddingBottom: 1,
                borderTopWidth: 0.2,
                paddingTop: 1,
                borderTopColor: '#ccc'
            },
            //tab bar的文本样式
            labelStyle: {
                // fontSize: 11,
                margin: 1
            },
            tabStyle: {
                height: 50
            },
            //tab 页指示符的样式 (tab页下面的一条线).
            indicatorStyle: { height: 0 }
        },
        //tab bar的位置, 可选值： 'top' or 'bottom'
        tabBarPosition: 'bottom',
        //是否允许滑动切换tab页
        swipeEnabled: true,
        //是否在切换tab页时使用动画
        animationEnabled: true,
        //是否懒加载
        lazy: true,
        //返回按钮是否会导致tab切换到初始tab页？ 如果是，则设置为initialRoute，否则为none。 缺省为initialRoute。
        backBehavior: 'none'
    }
)

const AppHome = createStackNavigator({
    TabBottom: {
        screen: TabBottom,
        navigationOptions: {
            header: null
        }
    },
    Movie: {
        screen: Movie
    },
    Book: {
        screen: Book
    },
    Activity: {
        screen: Activity
    },
    Details: { screen: Details }
})

const Router = createStackNavigator(
    {
        Welcome: {
            screen: Welcome,
            navigationOptions: {
                //清空则没有回退键
                header: null
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
                //清空则没有回退键
                header: null
            }
        },
        App: { screen: AppHome }
    },
    {
        initialRouteName: 'Welcome',
        headerMode: 'card' //这样设置可以让启动页进入首页后，无法回退到启动页
    }
)

export default Router
