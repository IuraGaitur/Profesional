import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from "react-native";
import {Container, Content, Left, Text, Header, Body, Title} from "native-base";

class CategoryScreen extends Component {

    static navigationOptions = {header: null};

    constructor(props) {
        super(props);
        this.state = this.props;
    }

    render() {
        return <Container>
            <Header>
                <Left><Text>Hello</Text></Left>
                <Body><Title>Title</Title></Body>
            </Header>
            <View style={{height: 60}}>
                <Text>Hello</Text>
            </View>
            <Content>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>
                <View style={{height: 60}}>
                    <Text>Hello</Text>
                </View>

            </Content>
        </Container>
    }
}

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);