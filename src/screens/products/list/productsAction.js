import ProductsApi from 'src/data/api/productsApi';
import {Actions} from 'react-native-router-flux';
import {GET_CARE_ITEMS, GET_STYLING_ITEMS, NO_ACTION} from 'src/app/actions';


export const getCareProducts = (categoryID) => {
    let items = new ProductsApi().instance().getByCategory("care", categoryID);
    return {careProducts: items, type: GET_CARE_ITEMS}
};

export const getStylingProducts = (categoryID) => {
    let items = new ProductsApi().instance().getByCategory("styling", categoryID);
    return {stylingProducts: items, type: GET_STYLING_ITEMS}
};

export const showDetails = (id) => {
    Actions.productDetails({id: id});
    return {type: NO_ACTION};
};