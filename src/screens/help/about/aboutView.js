import React, {Component} from 'react';
import {View, StyleSheet, WebView} from 'react-native';
import PropTypes from 'prop-types';
import ContainerFlex from 'src/views/native_elements/ContainerFlex';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import BackMenu from 'src/views/menu/BackMenu';

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
