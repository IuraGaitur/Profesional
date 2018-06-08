import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from "../../views/menu/DrawerMenu";
import {MAIN, PRODUCTS, PROFILE} from "./main";
import {ClientsScreen} from '../home/clients/index';
import {ProductsScreen} from '../products/index';
import {ProfileScreen} from '../profile/index';
import {Button, Icon} from "native-base";
import {GRAY_COLOR} from "../../utils/Colors";

export default class MainView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, createClient} = this.props;

        return (
            <DrawerMenu actions={<Button transparent onPress={() => createClient()}>
                                    <Icon name='person-add' style={{color:GRAY_COLOR}}/>
                                 </Button>} title={title}>
                <ClientsScreen />
            </DrawerMenu>
        );
    }
}

MainView.defaultProps = {
    title: 'MainView'
};

MainView.propTypes = {
    title: PropTypes.string,
    user: PropTypes.object,
    selectPageCalback: PropTypes.func,
    menuItems: PropTypes.array
};
