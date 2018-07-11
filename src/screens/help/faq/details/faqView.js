import React, {Component} from 'react';
import Drawer from 'react-native-drawer'
import {FlatList, Text, View, StyleSheet, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {
    BACKGROUND_GRAY_COLOR,
    GRAY_COLOR, GRAY_LIGHT, LIGHT_BACKGROUND_COLOR,
    LIGHT_COLOR,
    PRIMARY,
    TEXT_COLOR,
    TEXT_GRAY_COLOR
} from 'src/utils/colors';
import MenuItem from '../../../../views/menu/menuItem';
import {Body, Button, Container, Icon, Input, Item, Left, List, ListItem, Right, Title, Header} from 'native-base';
import ContainerFlex from '../../../../views/native_elements/containerFlex';
import ContentFlex from '../../../../views/native_elements/contentFlex';
import BackMenu from '../../../../views/menu/backMenu';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class FaqView extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {questions, backCallback, contactCallback} = this.props;
        return (
            <ContainerFlex>
                <BackMenu title={'FAQ'} actions={
                    <Button transparent onPress={() => contactCallback()}>
                        <Icon name='mail' style={{color: GRAY_COLOR}}/>
                    </Button>}/>
                <Header searchBar rounded style={[styles.headerContainer]}>
                    <Item style={styles.searchBar}>
                        <Icon name='ios-search'/>
                        <Input placeholder='Search' returnKeyType='search'/>
                    </Item>
                </Header>

                <ContentFlex>
                    <List dataArray={questions}
                          renderRow={(item) =>
                              <ListItem style={styles.listItem}>
                                  <Left>
                                      <Text style={styles.textItem}>{item.title}</Text>
                                  </Left>
                                  <Right>
                                      <Icon name='ios-arrow-forward'/>
                                  </Right>
                              </ListItem>
                          }>
                    </List>
                </ContentFlex>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: LIGHT_BACKGROUND_COLOR
    },
    searchBar: {
        borderColor: GRAY_COLOR,
        borderWidth: 1,
        padding: 16,
        backgroundColor: LIGHT_COLOR
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333'

    },
    listItem: {
        backgroundColor: LIGHT_COLOR,
        marginLeft: 0,
        marginRight: 0,
        paddingHorizontal: 16
    },
    textItem: {
        fontSize: 20,
        color: TEXT_COLOR
    }
});


FaqView.propTypes = {
    searchCallback: PropTypes.func,
    backCallback: PropTypes.func,
    contactCallback: PropTypes.func,
    questions: PropTypes.array
};
