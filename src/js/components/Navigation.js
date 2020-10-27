import React, { Component } from 'react'
import {
	View,
	Text,
	Button,
} from 'react-native';

import { NativeRouter, Route, Link } from "react-router-native";
import SliderPage from '../pages/SliderPage';
import MusicPlayerPage from '../pages/MusicPlayerPage';
import { openBrowser, exitApp } from './onPressEvents';
import { styleVars } from '../styles/vars';
import { styles } from '../styles';

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

const navItems = [
	{
		title: 'Slider',
		type: 'link',
		url: '/',
		exact: true,
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
		type: 'button',
		onPress: openBrowser,
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
