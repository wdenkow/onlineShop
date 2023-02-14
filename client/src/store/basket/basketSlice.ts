import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBasketProductItem } from '../../common/interfaces';
import { RootState } from '../store';
import { IBasket } from './interfaces';

const initialState: IBasket = {
    totalPrice: 0,
    totalItems: 0,
    orderList: [],
};

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItemToBasket: (state, action: PayloadAction<IBasketProductItem>) => {
            const { orderList, totalItems, totalPrice } = state;
            const { productId, price, productCounter } = action.payload;
            const prodictIndex = orderList.findIndex((index) => index.productId === productId);
            const producrPrice = productCounter === 1 ? price : price * productCounter;
            const currentPrice = totalPrice + producrPrice;
            const itemsInBasket = totalItems + productCounter;

            if (prodictIndex === -1) {
                state.orderList = [...state.orderList, action.payload];
            } else {
                const arr: IBasketProductItem[] = [...orderList];
                arr.forEach((item) => {
                    if (item.productId === action.payload.productId) {
                        item.productCounter += 1;
                    }
                });
                state.orderList = arr;
            }
            state.totalItems = itemsInBasket;
            state.totalPrice = Number(currentPrice.toFixed(2));
        },
        removeItemFromBasket: (state, action: PayloadAction<string>) => {
            const { totalItems, totalPrice, orderList } = state;
            const productIndex = orderList.findIndex((item) => item.productId === action.payload);
            const product = orderList[productIndex];

            if (product?.productCounter > 1) {
                const arr: IBasketProductItem[] = [...orderList];
                arr.forEach((item) => {
                    if (item.productId === product.productId) {
                        item.productCounter -= 1;
                    }
                });
                state.orderList = arr;
            } else {
                state.orderList = [...state.orderList].filter(
                    (item) => item.productId !== action.payload,
                );
            }
            state.totalItems = totalItems - 1;
            state.totalPrice = Number((totalPrice - product.price).toFixed(2));
        },
        removeCategoryItems: (state, action: PayloadAction<string>) => {
            const { orderList, totalItems, totalPrice } = state;
            const productIndex = orderList.findIndex((item) => item.productId === action.payload);
            const { price, productCounter } = orderList[productIndex];

            const currentPrice = productCounter > 1 ? price * productCounter : price;
            const count = productCounter > 1 ? productCounter : 1;

            state.totalItems = totalItems - count;
            state.totalPrice = Number((totalPrice - currentPrice).toFixed(2));
            state.orderList = [...state.orderList].filter(
                (item) => item.productId !== action.payload,
            );
        },
        clearBasket: (state) => {
            state.totalItems = 0;
            state.totalPrice = 0;
            state.orderList = [];
        },
    },
});

export const { addItemToBasket, removeItemFromBasket, removeCategoryItems, clearBasket } =
    basketSlice.actions;
export const getOrderList = (state: RootState) => state.basket.orderList;
export const getTotalPrice = (state: RootState) => state.basket.totalPrice;
export const getTotalItems = (state: RootState) => state.basket.totalItems;

export default basketSlice.reducer;
