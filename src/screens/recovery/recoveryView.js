import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {Header} from "react-native-elements";
import {FlatList, Text, View, StyleSheet, Dimensions} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import MenuItem from "../../views/MenuItem";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class MainView extends Component {

    isDrawerOpen = false;

    constructor(props) {
        super(props);
        this.state = {};
    }

    clickControlPanel = () => {
        if (this.isDrawerOpen) {
            this._drawer.close()
        } else {
            this._drawer.open()
        }
        this.isDrawerOpen = !this.isDrawerOpen;
    }

    getContent(user, menuItems, selectPageCalback) {
        return (
                <View style={styles.menu}>
                    <FlatList
                        keyExtractor={item => item.id.toString()}
                        data={menuItems}
                        scrollEnabled={true}
                        renderSeparator={(sectionId, rowId) => <View key={rowId.toString()} style={styles.separator}/>}
                        renderItem={(rowData) =>
                            <MenuItem
                                selectPageCallback={selectPageCalback}
                                title={rowData.item.title}
                                position={rowData.index}
                            />}
                    />
                </View>
                );
    }

    render() {
        const {title, user, menuItems, selectPageCalback} = this.props;
        const content = this.getContent(user, menuItems, selectPageCalback);
        const drawerStyles = { drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3}, main: {paddingLeft: 3} };

        return (
            <View>
                <Header
                    statusBarProps={{ backgroundColor: PRIMARY }}
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.clickControlPanel() }}
                    centerComponent={{ text: title, style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }} />
                <Drawer
                    type="overlay"
                    content={content}
                    tapToClose={true}
                    openDrawerOffset={0.2} // 20% gap on the right side of drawer
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    ref={(ref) => this._drawer = ref}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(2-ratio)/2 }
                    })}>
                </Drawer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    separator: {
        flex: 1,
    },

    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: PRIMARY,
    }
});

MainView.defaultProps = {
    title: 'MainView'
};


MainView.propTypes = {
    title: PropTypes.string,
    user: PropTypes.object,
    selectPageCalback: PropTypes.func,
    menuItems: PropTypes.array
};
