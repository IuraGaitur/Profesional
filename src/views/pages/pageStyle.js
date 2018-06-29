import {TEXT_COLOR} from "../../utils/Colors";
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flexGrow: 1,
        flexDirection: 'column',
        marginBottom: 40,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 40,
        marginTop: 30,
        textAlign: 'center',
        color: TEXT_COLOR
    },
    titlePicker: {
        fontWeight: 'bold',
        fontSize: 22,
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 5,
        textAlign: 'center',
        color: TEXT_COLOR
    }
});