import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {Header} from "react-native-elements";
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import MenuItem from "../../views/MenuItem";
import HeaderItem from "../../views/HeaderItem";
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
    };

    render() {
        const {title, user, menuItems, selectPageCalback} = this.props;
        const drawerStyles = { drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3}, main: {paddingLeft: 3} };

        return (
            <View style={styles.mainContainer}>
                <Header
                    outerContainerStyles={styles.headerOuter}
                    backgroundColor={LIGHT_COLOR}
                    placement="left"
                    leftComponent={{ icon:
                        'menu',
                        color: 'black',
                        onPress: () => this.clickControlPanel(), TouchableComponent: {TouchableWithoutFeedback}
                    }}
                    centerComponent={{ text: title, style: { color: 'black' } }}/>
                <Drawer
                    type="overlay"
                    content={
                        <View style={styles.menu}>
                            <FlatList
                                keyExtractor={item => item.id.toString()}
                                data={menuItems}
                                scrollEnabled={true}
                                renderSeparator={(sectionId, rowId) => <View key={rowId.toString()} style={styles.separator}/>}
                                ListHeaderComponent={<HeaderItem />}
                                renderItem={(rowData) =>
                                    <MenuItem
                                        selectPageCallback={selectPageCalback}
                                        title={rowData.item.title}
                                        position={rowData.index}
                                    />}
                            />
                        </View>
                    }
                    tapToClose={true}
                    openDrawerOffset={0.2}
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    open={false}
                    ref={(ref) => this._drawer = ref}
                    tweenHandler={(ratio) => ({
                        main: { opacity:(2-ratio)/2 }
                    })}>
                    <View style={{backgroundColor: 'white', flex: 1}}>
                            <FlatList
                            refreshing={false}
                            onRefresh={() => {}}
                        />

                    </View>
                </Drawer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        flexDirection: 'column'
    },
    separator: {
        flex: 1,
    },
    headerOuter: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1
    },
    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: LIGHT_COLOR,
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
