import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { View, Image, Dimensions } from 'react-native';
import { LoginScreen } from './src/screens/login';
import { ProfileScreen } from './src/screens/profile';
import { SettingsScreen } from './src/screens/settings';
import { ListsScreen2 } from './src/screens/test';
import { MainScreen } from './src/screens/main';
import { RegisterScreen } from './src/screens/register';
import { SplashScreen } from './src/screens/splash';
import { RecoveryScreen } from './src/screens/recovery';
import { InfoScreen } from './src/screens/info';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/app/store'

export const SPLASH = 'Splash';
export const LOGIN = 'Login';
export const REGISTER = 'Register';
export const PROFILE = 'Profile';
export const FORGOT_PASS = 'ForgotPass';
export const INFO = 'Info';
export const MAIN = 'Main';

const RootStack = createStackNavigator({
    Splash: { path: '/splash', screen: SplashScreen},
    Login: { path: '/login', screen: LoginScreen},
    Register: { path: '/register', screen: RegisterScreen},
    Profile: { path: '/profile', screen: ProfileScreen},
    Main: { path: '/main', screen: MainScreen},
    ForgotPass: {path: '/recover', screen: RecoveryScreen},
    Info: {path: '/info', screen: InfoScreen},

});

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
    state = {
        isReady: false,
    };

    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('./assets/images/bg_screen1.jpg'),
            require('./assets/images/bg_screen2.jpg'),
            require('./assets/images/bg_screen3.jpg'),
            require('./assets/images/bg_screen4.jpg'),
            require('./assets/images/user-cool.png'),
            require('./assets/images/user-hp.png'),
            require('./assets/images/user-student.png'),
            require('./assets/images/avatar1.jpg'),
        ]);

        const fontAssets = cacheFonts([{
            'Material Icons': require('@expo/vector-icons/fonts/MaterialIcons.ttf')
        }, {
            'FontAwesome': require('@expo/vector-icons/fonts/FontAwesome.ttf')
        }, {
            'Ionicons': require('@expo/vector-icons/fonts/Ionicons.ttf')
        }, {
            'carme-regular': require('./assets/fonts/carme-regular.ttf')
        }, {
            'sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
        }, {
            'sans': require('./assets/fonts/OpenSans-Regular.ttf')
        }]);

        await Promise.all([...imageAssets, ...fontAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
				<AppLoading
					startAsync={this._loadAssetsAsync}
					onFinish={() => this.setState({ isReady: true })}
				/>
            );
        }

        return (
            <Provider store={store}>
			    <RootStack />
            </Provider>
        );
    }
}

Expo.registerRootComponent(AppContainer);
