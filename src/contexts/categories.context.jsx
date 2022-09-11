import { createContext, useEffect, useState } from 'react';
// import PRODUCTS from '../shop-data.json';

// import SHOP_DATA from '../shop-data';
import {
    // addCollectionAndDocuments,
    getDocumentsFromCollection
} from '../utils/firebase/firebase.utils';


export const CategoriesContext = createContext({
    categories: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    // # Initially run once, to populate the shopdata from json into firestore
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA);
    // }, []);

    // # Fetching categories collection
    useEffect(() => {
        (async function () {
            const categoryMap = await getDocumentsFromCollection();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        })();
    }, []);

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
};