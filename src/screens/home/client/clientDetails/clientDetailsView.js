import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR, GRAY_LIGHT} from 'src/utils/Colors';
import {Button, Icon} from 'native-base';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import BackMenu from 'src/views/menu/BackMenu';
import ContainerFlex from 'src/views/native_elements/ContainerFlex';
import ClientItemView from './views/ClientItemView';
import SubmitButton from 'src/views/native_elements/SubmitButton';
import MainStyle from 'src/views/MainStyle';
import Dash from 'react-native-dash';

export default class ClientDetailsView extends Component {

    constructor(props) {
        super(props);
        this.state = {searchKey: ''};
    }

    render() {
        const {client, actionEditClick, actionDeleteClick} = this.props;
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
                            <SubmitButton text={'NEW ENERGY CODE'}/>
                        </View>
                    </View>
                    <FlatList
                        keyExtractor={item => item.id}
                        data={client.getFormulas()}
                        style={styles.listClients}
                        renderItem={(rowData) =>
                            <ClientItemView
                                key={rowData.item.id}
                                selectPageCallback={pos => this.selectPage(pos)}
                                date={rowData.item.date}
                                formula={rowData.item.formula}
                                type={rowData.item.type}/>
                        }
                    />


                </ContentFlex>

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
    actionDeleteClick: PropTypes.func
};
