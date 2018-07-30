import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {GRAY_COLOR, LIGHT_BACKGROUND_COLOR, LIGHT_COLOR, TEXT_COLOR} from 'src/utils/colors';
import {Button, Icon, Label} from 'native-base';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';
import Divider from 'src/views/native_elements/divider';
import Space from "../../../../views/native_elements/space";

export default class FaqDetailsView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {question, contactCallback} = this.props;
        return (
            <ContainerFlex>
                <BackMenu title={question.title} actions={
                    <Button transparent onPress={() => contactCallback()}>
                        <Icon name='mail' style={{color: GRAY_COLOR}}/>
                    </Button>}/>

                <ContentFlex scrollable={true} padding={16}>
                    <Text style={styles.answer}>{question.answer}</Text>
                    <Divider height={1}/>
                    <Text style={styles.title}>Was this article helpful?</Text>
                    <View style={styles.actions}>
                        <Button transparent onPress={() => {}}>
                            <Label>YES</Label>
                        </Button>
                        <Space width={50}/>
                        <Button transparent onPress={() => {}}>
                            <Label>NO</Label>
                        </Button>
                    </View>

                    <Text style={styles.info}>8 out of 10 found this article helpful</Text>

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
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginVertical: 12

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
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginHorizontal: 8
    },
    info: {
        fontSize: 13,
        flex: 1,
        textAlign:'center'
    },
    answer: {
        marginBottom: 8,
        lineHeight: 22,
        fontSize: 16
    }
});


FaqDetailsView.propTypes = {
    searchCallback: PropTypes.func,
    backCallback: PropTypes.func,
    contactCallback: PropTypes.func,
    question: PropTypes.object
};
