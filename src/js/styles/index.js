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
    main__nav: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: styleVars.darkBg,
    },
    main__item: {
        padding: 20,
        color: styleVars.lightFont,
        fontSize: 16,
        textTransform: 'uppercase',
    },
    main__btn: {
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
    }
});
