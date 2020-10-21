// навигация: 
//  1 кнопка перехода на страницу слайдера
//  2 кнопка плеера
//  3 кнопка браузера с переходом по указанной ссылке
//  4 кнопка выхода

import React, { Component } from 'react'
import {
    View,
    Text,
    Button,
    BackHandler,
} from 'react-native';

import { NativeRouter, Route, Link } from "react-router-native";
import { openPlayer, openBrowser, exitApp } from './onPress';
import { styleVars } from '../styles/vars';
import { styles } from '../styles';

const Home = () => {
    return (
        <View style={styles.main__section}>
            <Text style={styles.main__text}>Home</Text>
        </View>
    )
};

const Slider = () => {
    return (
        <View style={styles.main__section}>
            <Text style={styles.main__text}>Slider</Text>
        </View>
    )
};

const navItems = [
    {
        title: 'Home',
        type: 'link',
        url: '/',
        exact: true,
        component: Home,
    },
    {
        title: 'Slider',
        type: 'link',
        url: '/slider',
        exact: false,
        component: Slider,
    },
    {
        title: 'Music',
        type: 'button',
        // onPress: openPlayer,
    },
    {
        title: 'Browser',
        type: 'button',
        // onPress: openBrowser,
    },
    {
        title: 'Exit',
        type: 'button',
        onPress: exitApp,
    }
];

const LinkComponent = ({ item }) => {
    return (
        <Link to={item.url} underlayColor={styleVars.mainBg}>
            <Text style={styles.main__item}>
                {item.title}
            </Text>
        </Link>
    )
}

class Navigation extends Component {
    render() {
        let links = [];
        navItems.forEach(item => {
            if (item.type === 'link') {
                links.push(item);
            }
        })
        
        return (
            <NativeRouter>
                <View style={styles.main}>
                    {links.map((link, i) => {
                        return <Route key={i} exact={link.exact} path={link.url} component={link.component} />
                    })}
                    <View style={styles.main__nav}>
                        {navItems.map((item, i) => {
                            return (
                                <View key={i}>
                                    { item.type === 'link'
                                        ? <LinkComponent item={item} />
                                        : <Button title={item.title} color={styleVars.darkBg} onPress={item.onPress}/>
                                    } 
                                </View>
                            )
                        })}
                    </View>
                </View>
            </NativeRouter>
        )
    }
}

export default Navigation;
