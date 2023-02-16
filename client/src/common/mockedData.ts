import Fiesta from '../assets/images/products/pizzas/fiesta.png';
import Bolonieze from '../assets/images/products/pizzas/bolonieze.png';
import Mitbollo from '../assets/images/products/pizzas/mitbollo.png';
import FourSeasons from '../assets/images/products/pizzas/4_sezona.png';
import { IAdditionalProduct, IProductItem, ISelectOption, ITabPanel } from './interfaces';

import HotDogBoard from '../assets/images/products/additionalProducs/hot-dog-board.png';
import CheeseBoard from '../assets/images/products/additionalProducs/cheese-board.png';

// export const pizzas: Array<IProductItem> = [
//     {
//         id: 1,
//         imageUrl: Fiesta,
//         title: 'product.fiesta.title',
//         composition: 'product.fiesta.composition',
//         category: 'premium',
//         size: 'medium',
//         type: 'classic',
//         productInfo: {
//             small: {
//                 classic: {
//                     price: 20.99,
//                     weight: '370',
//                 },
//             },
//             medium: {
//                 classic: {
//                     price: 28.49,
//                     weight: '545',
//                 },
//                 thin: {
//                     price: 28.49,
//                     weight: '360',
//                 },
//                 'hot-dog': {
//                     price: 35.48,
//                     weight: '565',
//                 },
//                 'cheese-board': {
//                     price: 34.48,
//                     weight: '510',
//                 },
//             },
//             big: {
//                 classic: {
//                     price: 32.49,
//                     weight: '845',
//                 },
//                 thin: {
//                     price: 32.49,
//                     weight: '570',
//                 },
//                 'hot-dog': {
//                     price: 39.48,
//                     weight: '860',
//                 },
//                 'cheese-board': {
//                     price: 34.48,
//                     weight: '780',
//                 },
//             },
//         },
//     },
//     {
//         id: 2,
//         imageUrl: Mitbollo,
//         title: 'product.meatbollo.title',
//         composition: 'product.meatbollo.composition',
//         category: 'premium',
//         size: 'medium',
//         type: 'classic',
//         productInfo: {
//             small: {
//                 classic: {
//                     price: 20.99,
//                     weight: '400',
//                 },
//             },
//             medium: {
//                 classic: {
//                     price: 28.49,
//                     weight: '605',
//                 },
//                 thin: {
//                     price: 28.49,
//                     weight: '430',
//                 },
//                 'hot-dog': {
//                     price: 35.48,
//                     weight: '635',
//                 },
//                 'cheese-board': {
//                     price: 34.48,
//                     weight: '560',
//                 },
//             },
//             big: {
//                 classic: {
//                     price: 32.49,
//                     weight: '930',
//                 },
//                 thin: {
//                     price: 32.49,
//                     weight: '620',
//                 },
//                 'hot-dog': {
//                     price: 39.48,
//                     weight: '935',
//                 },
//                 'cheese-board': {
//                     price: 34.48,
//                     weight: '870',
//                 },
//             },
//         },
//     },
//     {
//         id: 3,
//         imageUrl: FourSeasons,
//         title: 'product.4season.title',
//         composition: 'product.4season.composition',
//         category: 'premium',
//         size: 'medium',
//         type: 'classic',
//         productInfo: {
//             medium: {
//                 classic: {
//                     price: 28.49,
//                     weight: '715',
//                 },
//                 thin: {
//                     price: 28.49,
//                     weight: '400',
//                 },
//                 'hot-dog': {
//                     price: 35.48,
//                     weight: '760',
//                 },
//                 'cheese-board': {
//                     price: 34.48,
//                     weight: '550',
//                 },
//             },
//             big: {
//                 classic: {
//                     price: 32.49,
//                     weight: '815',
//                 },
//                 thin: {
//                     price: 32.49,
//                     weight: '540',
//                 },
//                 'hot-dog': {
//                     price: 39.48,
//                     weight: '885',
//                 },
//                 'cheese-board': {
//                     price: 34.48,
//                     weight: '790',
//                 },
//             },
//         },
//     },
//     {
//         id: 4,
//         imageUrl: Bolonieze,
//         title: 'product.bolognese.title',
//         composition: 'product.bolognese.composition',
//         category: 'favorite',
//         size: 'medium',
//         type: 'classic',
//         productInfo: {
//             small: {
//                 classic: {
//                     price: 18.49,
//                     weight: '475',
//                 },
//             },
//             medium: {
//                 classic: {
//                     price: 25.49,
//                     weight: '680',
//                 },
//                 thin: {
//                     price: 25.49,
//                     weight: '500',
//                 },
//                 'hot-dog': {
//                     price: 32.48,
//                     weight: '690',
//                 },
//                 'cheese-board': {
//                     price: 31.48,
//                     weight: '655',
//                 },
//             },
//             big: {
//                 classic: {
//                     price: 29.49,
//                     weight: '1060',
//                 },
//                 thin: {
//                     price: 29.49,
//                     weight: '725',
//                 },
//                 'hot-dog': {
//                     price: 36.48,
//                     weight: '1050',
//                 },
//                 'cheese-board': {
//                     price: 35.48,
//                     weight: '945',
//                 },
//             },
//         },
//     },
// ];

export const ADDITIONAL_PRODUCTS: Array<IAdditionalProduct> = [
    {
        id: 'hot-dog',
        imgUrl: HotDogBoard,
        title: 'product.hotDogBoard',
        price: 6.99,
    },
    {
        id: 'cheese-board',
        imgUrl: CheeseBoard,
        title: 'product.cheeseBoard',
        price: 5.99,
    },
];

export const SHOPS: Array<ISelectOption> = [
    {
        id: 1,
        value: 'minsk',
        label: 'city.minsk',
    },
    {
        id: 2,
        value: 'grodno',
        label: 'city. grodno',
    },
];

export const PAYMENT_METHODS: Array<ISelectOption> = [
    {
        id: 1,
        value: 'credit-card-online',
        label: 'Картой (на сайте)',
    },
    {
        id: 2,
        value: 'cash',
        label: 'Наличными',
    },
    {
        id: 3,
        value: 'credit-card',
        label: 'Картой курьеру',
    },
];

export const LANGUAGES: Array<ISelectOption> = [
    {
        id: 1,
        value: 'ru',
        label: 'lang.ru',
    },
    {
        id: 2,
        value: 'en',
        label: 'lang.en',
    },
];

export const PIZZA_SIZES: Array<ISelectOption> = [
    {
        id: 1,
        label: 'product.size.small',
        value: 'small',
    },
    {
        id: 2,
        label: 'product.size.medium',
        value: 'medium',
    },
    {
        id: 3,
        label: 'product.size.big',
        value: 'big',
    },
];

export const PIZZA_TYPES: Array<ISelectOption> = [
    {
        id: 1,
        label: 'product.classic',
        value: 'classic',
    },
    {
        id: 2,
        label: 'product.thin',
        value: 'thin',
    },
    {
        id: 3,
        label: 'product.hotDogBoard',
        value: 'hot-dog',
    },
    {
        id: 4,
        label: 'product.cheeseBoard',
        value: 'cheese-board',
    },
];

export const FILTER_TABS: Array<ITabPanel> = [
    {
        id: 1,
        value: 'popularity',
        label: 'filter.popularity',
    },
    {
        id: 1,
        value: 'categories',
        label: 'filter.categories',
    },
];
