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
	auth: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-around',
		alignSelf: 'center',
		marginTop: 'auto',
		marginBottom: 'auto',
		height: '40%',
		width: '65%',
		padding: 30,
		borderRadius: 2,
		backgroundColor: '#ffffff80',
	},
	auth__title: {
		marginBottom: 10,
		fontSize: 26,
		textAlign: 'center',
	},
	auth__close: {
		alignSelf: 'center',
		padding: 7,
		fontSize: 20,
		borderRadius: 2,
		backgroundColor: '#33333330',
	},
	auth__logout: {
		alignSelf: 'center',
		padding: 7,
		fontSize: 20,
		borderRadius: 2,
		backgroundColor: '#33333330',
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
		width: '95.5%',
		height: '70%',
		resizeMode: 'contain',
	},
	player: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
  },
  player__item: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 10,
  },
  player__controls: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginTop: 'auto',
  },
  player__text: {
    width: '100%',
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
	},
});
