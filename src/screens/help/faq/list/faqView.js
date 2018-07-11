import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR, LIGHT_BACKGROUND_COLOR, LIGHT_COLOR, TEXT_COLOR} from 'src/utils/colors';
import {Button, Icon, Input, Item, Left, List, ListItem, Right, Header} from 'native-base';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';

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
                <BackMenu title={'<p><b>FAQ </b></p>'} actions={
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
