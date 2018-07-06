import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Text, Container, Grid, Row} from 'native-base';
import SubmitButton from 'src/views/native_elements/SubmitButton';
import BackMenu from 'src/views/menu/BackMenu';
import ContentFlex from 'src/views/native_elements/ContentFlex';
import RowFlex from 'src/views/native_elements/RowFlex';
import ContainerFlex from 'src/views/native_elements/ContainerFlex';

export default class NewDiagnosisView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ContainerFlex>
                <BackMenu title={'NEW DIAGNOSIS'} actionBack={() => this.props.actionBack()}/>
                <ContentFlex padding={16}>
                    <Grid>
                        <Row size={2} style={styles.contentCenter}>
                            <Text style={styles.textCenter}> SELECT MAPPING </Text>
                        </Row>
                        <RowFlex size={1}>
                            <SubmitButton text={'ENERGY CODE'} onPress={this.props.actionEnergyCode}/>
                            <SubmitButton text={'BLOW DRY CODE'} onPress={this.props.actionBlowDry}/>
                        </RowFlex>
                    </Grid>
                </ContentFlex>
            </ContainerFlex>
        );
    }
}

const styles = StyleSheet.create({
    textCenter: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    contentCenter: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

NewDiagnosisView.propTypes = {
    actionEnergyCode: PropTypes.func,
    actionBlowDry: PropTypes.func,
    actionBack: PropTypes.func
};
