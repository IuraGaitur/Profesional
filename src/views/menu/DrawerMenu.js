import React, { Component } from 'react';
import Drawer from 'react-native-drawer'
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {BACKGROUND_GRAY_COLOR, GRAY_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR, TEXT_GRAY_COLOR} from '../../utils/Colors';
import MenuItem from "../../views/MenuItem";
import HeaderItem from "../../views/HeaderItem";
import {Body, Button, Icon, Left, Title, Header, Right} from "native-base";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class DrawerMenu extends Component {

    isDrawerOpen = false;

    clickControlPanel = () => {
        if (this.isDrawerOpen) {
            this._drawer.close()
        } else {
            this._drawer.open()
        }
        this.isDrawerOpen = !this.isDrawerOpen;
    };

    selectPage = (pos, callback) => {
        this.isDrawerOpen = !this.isDrawerOpen;
        callback(pos);
    };

    render() {
        const {title, menuItems, selectPageCalback, selectedItem} = this.props;
        const drawerStyles = { drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3}, main: {paddingLeft: 3} };

        return <View style={styles.mainContainer}>
                    <Header style={styles.headerOuter}>
                        <Left>
                            <Button transparent onPress={() => this.clickControlPanel()}>
                                <Icon name='menu' style={{color: 'black', fontSize: 24}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{color:'black'}}>{title}</Title>
                        </Body>
                        <Right></Right>
                    </Header>
                    <Drawer
                        type="overlay"
                        content={
                            <View style={styles.menu}>
                                <FlatList
                                    keyExtractor={item => item.id.toString()}
                                    data={menuItems}
                                    scrollEnabled={true}
                                    renderSeparator={(sectionId, rowId) => <View key={rowId.toString()} style={styles.separator}/>}
                                    ListHeaderComponent={<HeaderItem selectPageCallback={pos => this.selectPage(pos, selectPageCalback)}/>}
                                    renderItem={(rowData) =>
                                        <MenuItem
                                            selectPageCallback={pos => this.selectPage(pos, selectPageCalback)}
                                            title={rowData.item.title}
                                            position={rowData.index + 1}
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
                            {this.props.children}
                        </View>
                    </Drawer>
                </View>
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
        backgroundColor: 'white'
    },
    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: LIGHT_COLOR,
    }
});