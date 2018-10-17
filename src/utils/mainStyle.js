import {StyleSheet} from 'react-native';
import {GRAY_COLOR, TEXT_COLOR} from 'src/utils/colors';

export default StyleSheet.create({

    h2: {
        fontSize: 62,
        fontWeight: 'bold',
        color: TEXT_COLOR
    },

    h3: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    h4: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 20
    },


    primary: {
        fontSize: 16,
        fontWeight: 'bold',
        color: TEXT_COLOR
    },

    secondary: {
        fontSize: 16,
        color: TEXT_COLOR
    },

    body1: {
        fontSize: 16,
    },

    body2: {
        fontSize: 14,
    },

    button: {

    },

    caption: {
        fontSize: 12
    },

    overline: {
        fontSize: 10
    },

    column: {
        flex: 1,
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },

    //Margins
    defaultHorizontalMargin: {
        marginHorizontal: 20
    },

    //Aligning
    rightAlign: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    centerAlign: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    centerColAlign: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    spaceColAlign: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    spaceRowAlign: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    rightCenterPosition: {
        position: 'absolute',
        right: 0,
        top: '30%',
        bottom: '30%'
    },

    rightPosition: {
        position: 'absolute',
        right: 0
    },

    //Icons
    infoButton: {
        color: GRAY_COLOR,
        fontSize: 28
    },

    saveButton: {
        color: GRAY_COLOR,
        fontSize: 42
    }
});