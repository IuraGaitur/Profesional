import React, {Component} from 'react';
import Drawer from 'react-native-drawer'
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {
    BACKGROUND_GRAY_COLOR, GRAY_COLOR, LIGHT_BACKGROUND_COLOR, LIGHT_COLOR, PRIMARY, TEXT_COLOR,
    TEXT_GRAY_COLOR
} from '../../utils/Colors';
import MenuItem from "./MenuItem";
import HeaderItem from "./HeaderItem";
import {Body, Button, Icon, Left, Title, Header, Right} from "native-base";
import MenuDao from "../../data/database/MenuDao";
import ContainerFlex from "../native_elements/ContainerFlex";
import UserDao from "../../data/database/UserDao";
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
import {Actions} from 'react-native-router-flux';

export default class DrawerMenu extends Component {


    constructor(props) {
        super(props);
        this.state = {menuItems: []}
    }

    async componentDidMount() {
        await this.loadMenuItems();
    }

    async loadMenuItems() {
        let menuItems = await new MenuDao().getItems();
        this.setState({menuItems: menuItems});
    }

    isDrawerOpen = false;

    clickControlPanel = () => {
        if (this.isDrawerOpen) {
            this._drawer.close()
        } else {
            this._drawer.open()
        }
        this.isDrawerOpen = !this.isDrawerOpen;
    };

    async signOut() {
        await new UserDao().removePrimaryUser();
        Actions.login();
    }


    selectPage = (position) => {
        this._drawer.close();
        this.isDrawerOpen = false;
        switch (position) {
            case 0:
            case 1:
                Actions.main();
                break;
            case 2:
                Actions.profile();
                break;
            case 3:
                Actions.products();
                break;
            case 4:
                Actions.info();
                break;
            case 5:
                this.signOut();
                break;
            default:
                break;
        }
    };

    render() {
        const {menuItems} = this.state;
        const {title} = this.props;

        return (
            <ContainerFlex>
                <Drawer
                    type="overlay"
                    content={
                        <View style={styles.drawerMenu}>
                            <View style={styles.menu}>
                            {menuItems && <FlatList
                                keyExtractor={item => item.title}
                                data={menuItems}
                                scrollEnabled={false}
                                renderSeparator={(sectionId, rowId) => <View key={rowId.toString()}
                                                                             style={styles.separator}/>}
                                ListHeaderComponent={<HeaderItem
                                    selectPageCallback={pos => this.selectPage(pos)}/>}
                                renderItem={(rowData) =>
                                    <MenuItem
                                        key={rowData.item.title}
                                        selectPageCallback={pos => this.selectPage(pos)}
                                        title={rowData.item.title}
                                        position={rowData.index + 1}
                                    />}
                            />}
                            </View>
                        </View>
                    }
                    tapToClose={true}
                    openDrawerOffset={0}
                    panCloseMask={0.2}
                    closedDrawerOffset={-3}
                    styles={drawerStyles}
                    open={false}
                    onCloseStart={() => {this.isDrawerOpen = false}}
                    ref={(ref) => this._drawer = ref}
                    tweenHandler={(ratio) => ({
                        main: {opacity: (2 - ratio) / 2}
                    })}>
                    <View style={{backgroundColor: 'white', flex: 1}}>
                        <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                            <Left style={{marginLeft: 8}}>
                                <Button transparent onPress={() => this.clickControlPanel()}>
                                    <Icon name='menu' style={{color: 'black', fontSize: 24}}/>
                                </Button>
                            </Left>
                            <Body>
                            <Title style={{color: 'black'}}>{title}</Title>
                            </Body>
                            <Right>
                                {this.props.actions}
                            </Right>
                        </Header>
                        {this.props.children}
                    </View>
                </Drawer>
            </ContainerFlex>);
    }
}

const drawerStyles = {
    drawer: { flex: 1, shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 0, backgroundColor: 'rgba(0,0,0, 0.5)'},
    main: {paddingLeft: 3},
}

const styles = StyleSheet.create({
    drawerMenu: {
        backgroundColor: 'transparent'
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    separator: {
        flex: 1,
    },
    headerOuter: {
        backgroundColor: LIGHT_BACKGROUND_COLOR,
        padding: 8
    },
    menu: {
        width: SCREEN_WIDTH / 3 * 2,
        height: SCREEN_HEIGHT,
        backgroundColor: LIGHT_COLOR,
    },
    headerContainer: {
        backgroundColor: LIGHT_COLOR,
        paddingTop: 8,
        paddingLeft: 0,
        paddingRight: 0,
    }
});

DrawerMenu.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.array,
    selectPageCalback: PropTypes.func,
    actions: PropTypes.node
};