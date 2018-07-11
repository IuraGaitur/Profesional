import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import {Button, Icon, Item, Input} from 'native-base';
import DrawerMenu from 'src/views/menu/drawerMenu';
import ContentFlex from 'src/views/native_elements/contentFlex';
import {GRAY_COLOR, GRAY_LIGHT, LIGHT_COLOR} from 'src/utils/colors';
import ClientItemView from 'src/screens/home/client/clients/views/ClientItemView';
import TouchOpacityDebounce from "../../../../utils/touchable_debounce/touchOpacityDebounce";

export default class ClientsView extends Component {

    constructor(props) {
        super(props);
        this.state = {searchKey: ''};
    }

    actionChangeSearchInput = (value, callback) => {
        this.setState({searchKey: value});
        if (callback) {
            callback(value);
        }
    };

    render() {
        const {searchKey} = this.state;
        const {title, primaryUser, createClient, showClientsList, userClients,
            actionRefreshClients, actionClientClick, isFetching, actionSearchCallback
        } = this.props;

        let searchIcon = searchKey ? (
            <Icon name='ios-close' style={styles.iconClear}
                  onPress={() => this.actionChangeSearchInput('', actionSearchCallback)}/>
        ) : null;

        return (
            <DrawerMenu title={title} actions={(
                <Button transparent onPress={() => createClient()}>
                    <Icon name='person-add' style={{color: GRAY_COLOR}}/>
                </Button>)}>

                {!showClientsList && (
                    <View style={styles.welcomeContainer}>
                        <Text style={{textAlign: 'center'}}>Welcome {primaryUser && primaryUser.email}</Text>
                        <Text style={{textAlign: 'center'}}>Please add a new client</Text>
                    </View>)
                }

                {showClientsList && (
                    <ContentFlex scrollable={false}>
                        <View style={styles.searchView}>
                            <Item style={styles.searchBar}>
                                <Icon name='ios-search' style={{color: GRAY_COLOR}}/>
                                <Input placeholder='Search' returnKeyType='search'
                                       autoCapitalize='none' value={searchKey} onChangeText={(searchKey) => {
                                    this.actionChangeSearchInput(searchKey, actionSearchCallback)
                                }}/>
                                {searchIcon}
                            </Item>
                        </View>
                        <FlatList
                            keyExtractor={item => item.getID()}
                            data={userClients}
                            style={styles.listClients}
                            onRefresh={() => actionRefreshClients(searchKey)}
                            refreshing={isFetching}
                            ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId.toString()}
                                                                                style={styles.separator}/>}
                            renderItem={(rowData) =>
                                <TouchOpacityDebounce onPress={() => actionClientClick(rowData.item)}>
                                    <ClientItemView
                                        key={rowData.item.getID()}
                                        selectPageCallback={pos => this.selectPage(pos)}
                                        name={rowData.item.getName()}
                                        formula={rowData.item.formula}
                                    />
                                </TouchOpacityDebounce>
                            }
                        />


                    </ContentFlex>)
                }
            </DrawerMenu>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: 'transparent'
    },
    searchView: {
        borderWidth: 2,
        borderColor: GRAY_LIGHT,
        borderRadius: 8,
        paddingHorizontal: 16,
        marginTop: 26,
        marginHorizontal: 16
    },
    searchBar: {
        backgroundColor: LIGHT_COLOR,
        borderBottomWidth: 0
    },
    separator: {
        backgroundColor: GRAY_LIGHT,
        width: '100%',
        height: 1
    },
    listClients: {
        marginTop: 8,
        marginHorizontal: 24
    },
    iconClear: {
        color: GRAY_COLOR,
        fontSize: 32
    },
    welcomeContainer: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

ClientsView.propTypes = {
    title: PropTypes.string,
    primaryUser: PropTypes.object,
    createClient: PropTypes.func,
    showClientsList: PropTypes.bool,
    userClients: PropTypes.array,
    actionClientClick: PropTypes.func,
    actionRefreshClients: PropTypes.func,
    isFetching: PropTypes.bool,
    actionSearchCallback: PropTypes.func
};
