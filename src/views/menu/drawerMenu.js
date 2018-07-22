import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Drawer from 'react-native-drawer-menu';
import MenuItem from 'src/views/menu/menuItem';
import HeaderItem from 'src/views/menu/headerItem';
import MenuDao from 'src/data/database/menuDao';
import UserDao from 'src/data/database/userDao';
import {Actions} from 'react-native-router-flux';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import {FlatList, View, StyleSheet, Dimensions} from 'react-native';
import {Body, Button, Icon, Left, Title, Header, Right} from 'native-base';
import {GRAY_COLOR, LIGHT_BACKGROUND_COLOR, LIGHT_COLOR} from 'src/utils/colors';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

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
            this._drawer.closeDrawer()
        } else {
            this._drawer.openDrawer()
        }
        this.isDrawerOpen = !this.isDrawerOpen;
    };

    async signOut() {
        await new UserDao().removePrimaryUser();
        Actions.login();
    }


    selectPage = (position) => {
        this._drawer.closeDrawer();
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
                    onDrawerClose={() => this.isDrawerOpen = false}
                    drawerContent={
                        <View style={styles.drawerMenu}>
                            <View style={styles.menu}>
                                {menuItems && <FlatList
                                    keyExtractor={item => item.title}
                                    data={menuItems}
                                    scrollEnabled={false}
                                    renderSeparator={(sectionId, rowId) =>
                                        <View key={rowId.toString()} style={styles.separator}/>}
                                    ListHeaderComponent={
                                        <HeaderItem selectPageCallback={pos => this.selectPage(pos)}/>}
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
                    drawerWidth={SCREEN_WIDTH / 3 * 2}
                    ref={(ref) => this._drawer = ref}
                    duration={200}
                    type={Drawer.types.Overlay}
                    drawerPosition={Drawer.positions.Left}
                >
                    <View style={styles.parentContainer}>
                        <Header androidStatusBarColor={GRAY_COLOR} style={styles.headerContainer}>
                            <Left style={{marginLeft: 8}}>
                                <Button transparent onPress={() => this.clickControlPanel()}>
                                    <Icon name='menu' style={styles.icon}/>
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
    drawer: {
        flex: 1,
        shadowColor: '#000000',
        shadowOpacity: 0.8,
        shadowRadius: 0,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    main: {
        paddingLeft: 3
    },
};

const styles = StyleSheet.create({
    parentContainer: {
        backgroundColor: 'white', flex: 1
    },
    icon: {
        color: 'black',
        fontSize: 24
    },
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

        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ccc',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 4
    }
});

DrawerMenu.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.array,
    selectPageCalback: PropTypes.func,
    actions: PropTypes.node
};