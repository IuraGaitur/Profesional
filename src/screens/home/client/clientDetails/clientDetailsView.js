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
} from '../../../../utils/Colors';
import {Button, Icon, Item, Input} from "native-base";
import DrawerMenu from "../../../../views/menu/DrawerMenu";
import ContentFlex from "../../../../views/native_elements/ContentFlex";
import ClientItemView from "./views/ClientItemView";
import BackMenu from "../../../../views/menu/BackMenu";
import MainStyle from "../../../../views/MainStyle";

export default class ClientDetailsView extends Component {

    constructor(props) {
        super(props);
        this.state = {searchKey: ''};
    }

    render() {
        const {client} = this.props;

        return (
            <ContainerFlex>
                <BackMenu title={client.getFullName()} actions={(
                    <View>
                        <Button transparent onPress={() => editClient()}>
                            <Icon name='person-add' style={{color: GRAY_COLOR}}/>
                        </Button>
                        <Button transparent onPress={() => editClient()}>
                            <Icon name='person-add' style={{color: GRAY_COLOR}}/>
                        </Button>
                    </View>
                )}/>


                <ContentFlex scrollable={false}>
                    <FlatList
                        keyExtractor={item => item.getID()}
                        data={userClients}
                        style={styles.listClients}
                        ItemSeparatorComponent={(sectionId, rowId) => <View key={rowId.toString()}
                                                                            style={styles.separator}/>}
                        renderItem={(rowData) =>
                            <ClientItemView
                                key={rowData.item.getID()}
                                selectPageCallback={pos => this.selectPage(pos)}
                                name={rowData.item.getName()}
                                formula={rowData.item.getFormula()}
                            />}
                    />


                </ContentFlex>)

            </ContainerFlex>
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

ClientDetailsView.propTypes = {
    client: PropTypes.object
};
