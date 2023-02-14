import { IBasketProductItem } from '../../common/interfaces';

export enum BasketActionsTypes {
    SET_ITEMS_TO_BASKET = 'basket/ItemsToBasket',
    ADD_ITEM_TO_BASKET = 'basket/addItemToBasket',
    CALCULATE_BASKET_ITEMS = 'basket/calculateBasketItems',
    CALCULATE_BASKET_PRICE = 'basket/calculateBasketPrice',
    REMOVE_ITEM_BY_ID_FROM_BASKET = 'basket/removeItemByIDFromBasket',
    CHANGE_PRODUCT_COUNTER = 'basket/changeProductCounter',
    CLEAR_BASKET = 'basket/clearBasket',
}

export interface clearBasket {
    type: BasketActionsTypes.CLEAR_BASKET;
    payload: IBasket;
}

export interface setAtimesTOBasket {
    type: BasketActionsTypes.SET_ITEMS_TO_BASKET;
    payload: IBasketProductItem[];
}

export interface changeProductCounter {
    type: BasketActionsTypes.CHANGE_PRODUCT_COUNTER;
    payload: IBasketProductItem[];
}
export interface AddItemToBasket {
    type: BasketActionsTypes.ADD_ITEM_TO_BASKET;
    payload: IBasketProductItem;
}

export interface CalculateBasketItems {
    type: BasketActionsTypes.CALCULATE_BASKET_ITEMS;
    payload: number;
}

export interface CalculateBasketPrice {
    type: BasketActionsTypes.CALCULATE_BASKET_PRICE;
    payload: number;
}

export type BasketActions =
    | AddItemToBasket
    | CalculateBasketItems
    | CalculateBasketPrice
    | setAtimesTOBasket
    | changeProductCounter
    | clearBasket;

export interface IBasket {
    totalPrice: number;
    totalItems: number;
    orderList: Array<IBasketProductItem> | [];
}
