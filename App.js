import React from 'react';
import Expo, { AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import { LoginScreen } from './src/screens/login';
import { ProfileScreen } from './src/screens/profile';
import { SettingsScreen } from './src/screens/settings';
import { ListsScreen2 } from './src/screens/test';
import { MainScreen } from './src/screens/main';
import { RegisterScreen } from './src/screens/register';
import { SplashScreen } from './src/screens/splash';
const SCREEN_WIDTH = Dimensions.get('window').width;
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './src/app/store'

const CustomDrawerContentComponent = props => (
	<View style={{ flex: 1, backgroundColor: '#43484d' }}>
		<View style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}>
			<Image
				source={require('./img/ic_hamburger.png')}
				style={{ width: SCREEN_WIDTH * 0.57 }}
				resizeMode="contain"
			/>
		</View>
		<View style={{ marginLeft: 10 }}>
			<DrawerItems {...props} />
		</View>
	</View>
);

export const SPLASH = 'Splash';
export const LOGIN = 'Login';
export const REGISTER = 'Register';
export const PROFILE = 'Profile';
export const MAIN = 'Main';

const RootStack = createStackNavigator({
    Splash: { path: '/splash', screen: SplashScreen},
    Login: { path: '/login', screen: LoginScreen},
    Register: { path: '/register', screen: RegisterScreen},
    Profile: { path: '/profile', screen: ProfileScreen},
    Main: { path: '/main', screen: MainScreen},
});

const MainRoot = DrawerNavigator(
    {
        Test: { path: '/test', screen: ListsScreen2},
        Splash: { path: '/splash', screen: SplashScreen},
        Login: { path: '/login', screen: LoginScreen},
        Register: { path: '/register', screen: RegisterScreen},
        Profile: { path: '/profile', screen: ProfileScreen},
        Main: { path: '/main', screen: MainScreen},
        Settings: { path: '/settings', screen: SettingsScreen},
    },
    {
        initialRouteName: 'Splash',
        contentOptions: {
            activeTintColor: '#548ff7',
            activeBackgroundColor: 'transparent',
            inactiveTintColor: '#ffffff',
            inactiveBackgroundColor: 'transparent',
            labelStyle: {
                fontSize: 15,
                marginLeft: 0,
            },
        },
        drawerWidth: SCREEN_WIDTH * 0.8,
        contentComponent: CustomDrawerContentComponent,
        drawerOpenRoute: 'DrawerOpen',
        drawerCloseRoute: 'DrawerClose',
        drawerToggleRoute: 'DrawerToggle',
    }
);

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
