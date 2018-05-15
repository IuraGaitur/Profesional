import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20
    },


    progressLayout: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    margin_lr_small: {
        marginLeft: 8,
        marginRight: 8
    },

    inline: {
        flexDirection: 'column',
    },

    //-----------------Margins----------------
    m_l_2: {
        marginLeft: 2
    },
    m_t_2: {
        marginTop: 2
    },
    m_b_2: {
        marginBottom: 2
    },
    m_r_2: {
        marginRight: 2
    },

    m_l_4: {
        marginLeft: 4
    },
    m_t_4: {
        marginTop: 4
    },
    m_b_4: {
        marginBottom: 4
    },
    m_r_4: {
        marginRight: 4
    },

    //----------------Paddings----------------
    p_b_16: {
        paddingBottom: 20
    },

    //----------------Align-------------------
    column: {
        flex: 1,
        flexDirection: 'column'
    },


    ////---------------Colors-----------------


    white: {
        color: '#ffffff'
    },

    indigo_background: {
        backgroundColor: '#442772',
    },

    categoryContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row'
    },



});