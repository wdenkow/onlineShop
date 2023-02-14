import React, { useState } from 'react';
import { IBasketProductItem } from '../../common/interfaces';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';

import useStyles from './styles';
import ProductCounter from '../ProductCounter';
import { useTranslation } from 'react-i18next';
import {
    addItemToBasket,
    removeCategoryItems,
    removeItemFromBasket,
} from '../../store/basket/basketSlice';

interface Props {
    item: IBasketProductItem;
}

const BasketProduct = ({ item }: Props) => {
    const { classes } = useStyles();
    const {
        title,
        composition,
        price,
        weight,
        type,
        size,
        productId,
        productCounter,
        id,
        imageUrl,
        productInfo,
    } = item;
    const dispatch = useDispatch();
    const productPrice = price * productCounter;
    const { t } = useTranslation();
    const [counter, setCounter] = useState<number>(productCounter);

    const basketItem = {
        id,
        imageUrl,
        title,
        type,
        size,
        price,
        weight,
        productId,
        productCounter: 1,
        composition,
        productInfo,
    } as IBasketProductItem;

    const handleDeleteProduct = () => {
        dispatch(removeCategoryItems(productId));
    };

    const handleAddOneItem = () => {
        setCounter(counter + 1);
        dispatch(addItemToBasket(basketItem));
    };

    const handleDeleteOneItem = () => {
        dispatch(removeItemFromBasket(productId));
    };

    return (
        <div className={classes.basketItem}>
            <IconButton onClick={handleDeleteProduct} className={classes.deleteBtn}>
                <CloseIcon />
            </IconButton>
            <p className={classes.basketItemName}>{t(title)}</p>
            <p className={classes.basketItemTypeAndSize}>{`${type}, ${size}`}</p>
            <p className={classes.basketItemDescription}>{t(composition)}</p>
            <div className={classes.basketItemBottomInfo}>
                <div className={classes.basketItemPriceAndWeight}>
                    <p className={classes.basketItemPrice}>{productPrice.toFixed(2)}</p>
                    <p className={classes.basketItemWeight}>{weight}</p>
                </div>
                <ProductCounter
                    value={counter}
                    setValue={setCounter}
                    onAddItem={handleAddOneItem}
                    onRemoveItem={handleDeleteOneItem}
                />
            </div>
        </div>
    );
};

export default BasketProduct;
