import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR, GRAY_LIGHT} from 'src/utils/colors';
import {Button, Icon, Toast} from 'native-base';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ClientItemView from './views/ClientItemView';
import SubmitButton from 'src/views/native_elements/submitButton';
import MainStyle from 'src/utils/mainStyle';
import Dash from 'react-native-dash';
import DeleteDialog from 'src/views/dialogs/deleteDialog';
import MessageDialog from 'src/views/dialogs/messageDialog';

export default class ClientDetailsView extends Component {

    constructor(props) {
        super(props);
        this.state = {searchKey: ''};
    }

    showMessageSendWithSuccess(message) {
        Toast.show({
            text: message,
            buttonText: 'OK'
        });
    }

    render() {
        const {
            client, actionEditClick, actionDeleteClick, actionNewCode,
            actionMessage, actionDeleteCode, actionEditCode, showMessageDialog,
            showDeleteDialog,  actionHideDeleteDialog,
            actionDeleteCodeConfirm, actionHideMessageDialog, actionMessageConfirm
        } = this.props;

        let title = '<p>' + client.firstName + ' <b>' + client.lastName + '</b></p>';

        return (
            <ContainerFlex>
                <BackMenu title={title} actions={(
                    <View style={MainStyle.spaceRowAlign}>
                        <Button transparent onPress={() => actionEditClick(client)}>
                            <Icon name='create' active={true} style={{color: GRAY_COLOR}}/>
                        </Button>
                        <Button transparent onPress={() => actionDeleteClick(client)}>
                            <Icon name='trash' active={true} style={{color: GRAY_COLOR}}/>
                        </Button>
                    </View>
                )}/>
                <ContentFlex scrollable={true}>
                    <View>
                        <View style={[MainStyle.column, styles.detailsContainer]}>
                            <View style={{width: '100%', minHeight: 80}}>
                                <View style={MainStyle.spaceRowAlign}>
                                    <View style={MainStyle.spaceColAlign}>
                                        <View><Text style={MainStyle.primary}>{client.getName()}</Text></View>
                                        <View><Text style={MainStyle.secondary}>{client.birthday}</Text></View>
                                    </View>
                                    <View style={MainStyle.spaceColAlign}>
                                        <View><Text style={styles.infoText}>{client.country}</Text></View>
                                        <View><Text style={styles.infoText}>{client.city}</Text></View>
                                        <View><Text style={styles.infoText}>{client.postalCode}</Text></View>
                                    </View>

                                </View>
                            </View>
                            <Dash style={styles.dash} dashColor={GRAY_LIGHT}/>
                            <SubmitButton text={'NEW ENERGY CODE'} onPress={actionNewCode}/>
                        </View>
                    </View>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={client.treatments}
                        style={styles.listClients}
                        renderItem={(rowData) =>
                            <ClientItemView
                                key={rowData.item.id}
                                selectPageCallback={pos => this.selectPage(pos)}
                                date={rowData.item.date}
                                formula={rowData.item.formula}
                                actionMessage={actionMessage}
                                actionEdit={actionEditCode}
                                actionDelete={actionDeleteCode}
                                type={rowData.item.type}/>
                        }
                    />
                </ContentFlex>
                <DeleteDialog visible={showDeleteDialog} dismissCallback={actionHideDeleteDialog} deleteCallback={actionDeleteCodeConfirm}/>
                <MessageDialog visible={showMessageDialog} dismissCallback={actionHideMessageDialog} actionMessage={actionMessageConfirm}/>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    detailsContainer: {
        paddingHorizontal: 32,
        paddingTop: 32,
        paddingBottom: 8
    },
    listClients: {
        marginTop: 8,
        marginHorizontal: 24
    },
    infoText: {
        fontSize: 16,
        textAlign: 'right'
    },
    dash: {
        flex: 1,
        width: 'auto',
        height: 1
    }
});

ClientDetailsView.propTypes = {
    client: PropTypes.object,
    actionEditClick: PropTypes.func,
    actionDeleteClick: PropTypes.func,
    actionNewCode: PropTypes.func,
    actionEditCode: PropTypes.func,
    actionMessage: PropTypes.func,
    actionDeleteCode: PropTypes.func,
    showDeleteDialog: PropTypes.bool,
    showMessageDialog: PropTypes.bool,
    actionHideDeleteDialog: PropTypes.func,
    actionDeleteCodeConfirm: PropTypes.func,
    actionHideMessageDialog: PropTypes.func,
    actionMessageConfirm: PropTypes.func,
};
