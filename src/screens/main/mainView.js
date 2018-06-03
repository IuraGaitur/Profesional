import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DrawerMenu from "../../views/menu/DrawerMenu";
import {MAIN, PRODUCTS} from "./main";
import {ClientsScreen} from './../clients';
import {ProductsScreen} from './../products';

export default class MainView extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {title, menuItems, selectPageCalback, selectedPage} = this.props;

        return (
            <DrawerMenu menuItems={menuItems}
                        selectPageCalback={selectPageCalback}
                        title={title}>
                {selectedPage == MAIN && <ClientsScreen />}
                {selectedPage == PRODUCTS && <ProductsScreen />}
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
