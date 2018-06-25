import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet, Dimensions, TouchableWithoutFeedback} from "react-native";
import PropTypes from 'prop-types';
import {
    BACKGROUND_GRAY_COLOR,
    GRAY_COLOR, GRAY_LIGHT, LIGHT_BACKGROUND_COLOR,
    LIGHT_COLOR,
    PRIMARY,
    TEXT_COLOR,
    TEXT_GRAY_COLOR
} from '../../../utils/Colors';
import {Button, Icon, Item, Input} from "native-base";
import DrawerMenu from "../../../views/menu/DrawerMenu";
import ContentFlex from "../../../views/native_elements/ContentFlex";
import ClientItemView from "./views/ClientItemView";

export default class ClientsView extends Component {

    constructor(props) {
        super(props);
        this.state = {searchKey: ''};
    }

    render() {
        const {searchKey} = this.state;
        const {title, primaryUser, createClient, showClientsList, userClients} = this.props;
        let searchIcon = searchKey ? (
            <Icon name="ios-close" style={{color: GRAY_COLOR, fontSize: 32}}
                  onPress={() => this.setState({searchKey: ''})}/>
        ) : null;

        return (
            <DrawerMenu title={title} actions={(
                <Button transparent onPress={() => createClient()}>
                    <Icon name='person-add' style={{color: GRAY_COLOR}}/>
                </Button>)}>

                {!showClientsList && <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
                    <Text style={{textAlign: 'center'}}>Welcome {primaryUser && primaryUser.email}</Text>
                    <Text style={{textAlign: 'center'}}>Please add a new client</Text>
                </View>}

                {showClientsList && (
                    <ContentFlex scrollable={false}>
                        <View style={styles.searchView}>
                            <Item style={styles.searchBar}>
                                <Icon name="ios-search" style={{color: GRAY_COLOR}}/>
                                <Input placeholder="Search" returnKeyType="search"
                                       value={searchKey} onChangeText={(searchKey) => this.setState({searchKey})}/>
                                {searchIcon}
                            </Item>
                        </View>
                        <FlatList
                            keyExtractor={item => item.getID()}
                            data={userClients}
                            style={styles.listClients}
                            ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId.toString()} style={styles.separator}/>}
                            renderItem={(rowData) =>
                                <ClientItemView
                                    key={rowData.item.getID()}
                                    selectPageCallback={pos => this.selectPage(pos)}
                                    name={rowData.item.getName()}
                                    formula={rowData.item.getFormula()}
                                />}
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
    }
});

ClientsView.propTypes = {
    title: PropTypes.string,
    primaryUser: PropTypes.object,
    createClient: PropTypes.func,
    showClientsList: PropTypes.bool,
    clients: PropTypes.array
};
