import React, {Component} from 'react';
import {View, StyleSheet, WebView} from 'react-native';
import PropTypes from 'prop-types';
import ContainerFlex from 'src/views/native_elements/containerFlex';
import ContentFlex from 'src/views/native_elements/contentFlex';
import BackMenu from 'src/views/menu/backMenu';

export default class AboutView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, url} = this.props;
        return (
            <ContainerFlex>
                <BackMenu title={title} />
                <ContentFlex>
                    <WebView
                        source={{uri: url}}
                        style={{marginTop: 20}}
                    />
                </ContentFlex>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
});


AboutView.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string
};
