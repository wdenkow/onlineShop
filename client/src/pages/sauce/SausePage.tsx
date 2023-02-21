import React, { useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer';
import ProductList from '../../components/ProductList';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    getProductsByCategoryThunk,
    getSaucesProducts,
    ProductsEnum,
} from '../../store/products/productsSlice';

const SaucePage = () => {
    const dispatch = useAppDispatch();
    const sauces = useAppSelector(getSaucesProducts);

    useEffect(() => {
        // TODO change it later, it's not good enough
        if (sauces.length === 0) {
            dispatch(getProductsByCategoryThunk(ProductsEnum.SAUSE));
        }
    }, []);

    return (
        <ContentContainer isOnMainPage>
            <h1>SaucePage page</h1>
            <div>
                <ProductList products={sauces} />
            </div>
        </ContentContainer>
    );
};

export default SaucePage;
