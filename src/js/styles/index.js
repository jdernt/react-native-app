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
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  player__list: {
    width: '70%',
  },
  player__text: {
    marginBottom: 10,
    fontSize: 16,
  },
	player__container: {
		marginTop: 40,
	},
	player__card: {
		width: "80%",
    alignItems: "center",
	},
	player__cover: {
    width: 140,
    height: 140,
    marginTop: 20,
    backgroundColor: "#c9c9c9"
	},
	player__progress: {
    height: 2,
    width: "90%",
    marginTop: 20,
    flexDirection: "row"
	},
	player__title: {
    marginTop: 20,
    fontSize: 16,
  },
  player__artist: {
    fontWeight: "bold",
    fontSize: 20,
  },
  player__controls: {
    marginVertical: 20,
    flexDirection: "row"
  },
  player__controlButtonContainer: {
    flex: 1
  },
  player__controlButtonText: {
    fontSize: 18,
    textAlign: "center"
  },
	player__state: {
		marginTop: 20,
	}
});
