import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from "../../views/menu/DrawerMenu";
import {MAIN, PRODUCTS, PROFILE} from "./main";
import {ClientsScreen} from './../clients';
import {ProductsScreen} from './../products';
import {ProfileScreen} from './../profile';
import {Button, Icon} from "native-base";
import {GRAY_COLOR} from "../../utils/Colors";

export default class MainView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, menuItems, selectPageCalback, selectedPage, createClient} = this.props;

        return (
            <DrawerMenu menuItems={menuItems}
                        selectPageCalback={selectPageCalback}
                        actions={selectedPage == MAIN && <Button transparent onPress={() => createClient()}>
                                    <Icon name='person-add' style={{color:GRAY_COLOR}}/>
                                 </Button>}
                        title={title}>
                {selectedPage == MAIN && <ClientsScreen />}
                {selectedPage == PRODUCTS && <ProductsScreen />}
                {selectedPage == PROFILE && <ProfileScreen />}
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
