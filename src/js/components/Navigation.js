import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
} from 'react-native';
import { WebView } from 'react-native-webview';

import { NativeRouter, Route, Link } from "react-router-native";
import SliderPage from '../pages/SliderPage';
import MusicPlayerPage from '../pages/MusicPlayerPage';
import { openPlayer, exitApp } from './onPress';
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
		<SliderPage />
	)
};

const MusicPlayer = () => {
	return (
		<MusicPlayerPage />
	)
}

const OpenBrowser = () => {
	return (
		<WebView source={{uri: 'https://q-digital.org/'}} />
	)
}

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
		type: 'link',
		url: '/music',
		exact: false,
		component: MusicPlayer,	
	},
	{
		title: 'Browser',
		type: 'link',
		url: '/browser',
		exact: false,
		component: OpenBrowser,
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
		<Link to={item.url} underlayColor={styleVars.mainBg} style={styles.nav__link}>
			<Text style={styles.nav__text}>
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
						return <Route link={link} key={i} exact={link.exact} path={link.url} component={link.component} />
					})}
					<View style={styles.nav}>
						{navItems.map((item, i) => {
							return (
								<View key={i} style={styles.nav__item}>
									{ item.type === 'link'
										? <LinkComponent item={item} />
										: <Button
											title={item.title}
											onPress={item.onPress}
										/>
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
