import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR, LIGHT_BACKGROUND_COLOR, LIGHT_COLOR, TEXT_COLOR, GRAY_LIGHT} from 'src/utils/colors';
import {Button, Icon, Input, Item, Left, List, ListItem, Right, Header} from 'native-base';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';

export default class FaqView extends Component {

    constructor(props) {
        super(props);
        this.state = {searchKey: ''};
    }

    componentWillReceiveProps(nextProps) {

    }

    render() {
        const {searchKey} = this.state;
        const {questions, backCallback, contactCallback} = this.props;
        let searchIcon = searchKey ? (
            <Icon name='ios-close' style={styles.iconClear}
                  onPress={() => this.actionChangeSearchInput('', actionSearchCallback)}/>
        ) : null;
        return (
            <ContainerFlex>
                <BackMenu title={'<p><b>FAQ </b></p>'} actions={
                    <Button transparent onPress={() => contactCallback()}>
                        <Icon name='mail' style={{color: GRAY_COLOR}}/>
                    </Button>}/>
                    <View style={styles.searchView}>
                        <Item style={styles.searchBar}>
                            <Icon name='ios-search' style={{color: GRAY_COLOR}}/>
                            <Input placeholder='Search' returnKeyType='search'
                                   autoCapitalize='none' value={searchKey} onChangeText={(searchKey) => {
                            }}/>
                            {searchIcon}
                        </Item>
                    </View>

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
});


FaqView.propTypes = {
    searchCallback: PropTypes.func,
    backCallback: PropTypes.func,
    contactCallback: PropTypes.func,
    questions: PropTypes.array
};
