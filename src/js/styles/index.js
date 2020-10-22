import React from "react";
import { StyleSheet } from 'react-native';
import { styleVars } from './vars';

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '100%',
		backgroundColor: styleVars.mainBg,
	},
	header: {
		width: '100%',
		padding: 10,
		backgroundColor: styleVars.darkBg,
	},
	header__title: {
		color: styleVars.lightFont,
		fontFamily: styleVars.fontFamily,
		fontSize: 28,
		textAlign: 'center',
	},
	main: {
		display: 'flex',
		flexDirection: 'column',
		flexGrow: 1,
		justifyContent: 'space-between',
	},
	main__section: {
		flexGrow: 1,
		padding: 10,
		color: styleVars.dargFont,
	},
	main__text: {
		fontSize: 18,
		fontFamily: styleVars.fontFamily,
	},
	nav: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: styleVars.darkBg,
	},
	nav__link: {
		padding: 20,
	},
	nav__text: {
		color: styleVars.lightFont,
		fontSize: 16,
		textTransform: 'uppercase',
	},
	slider__list: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		padding: 10,
	},
	slider__item: {
		flex: 1,
		minWidth: '100%',
		marginTop: 10,
	},
	slider__img: {
		width: '95%',
		height: '80%',
		resizeMode: 'contain',
	},
});
