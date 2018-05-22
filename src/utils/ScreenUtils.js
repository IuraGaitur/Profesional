import DetectNavbar from 'react-native-detect-navbar-android';
import {StatusBar, Dimensions, Platform} from 'react-native';
export default class ScreenUtils {

    static HEIGHT = Dimensions.get('window').height - StatusBar.currentHeight - (Platform.OS === 'android' ? 38 : 0);

    static calcHeight() {
        if (Platform.OS === 'ios') {
            try {
                let hasSoft = DetectNavbar.hasSoftKeys();
                if (hasSoft) {
                    this.HEIGHT = this.HEIGHT - 38;
                }
            } catch (ex) {
                console.log(ex);
            }
        }
    }
}