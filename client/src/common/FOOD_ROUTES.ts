// export const ROUTES = {
//     home: '/',
//     pizza: '/pizza',
//     wings: '/wings',
//     potato: '/potato',
//     bread: '/bread',
//     salads: '/salads',
//     sweets: '/sweets',
//     drinks: '/drinks',
//     sauce: '/sauce',
//     discountCampaign: '/discount_campaign',
//     news: '/news',
//     loyaltyProgram: '/loyalty-program',
//     job: '/job',
//     ecoBonus: '/eco-bonus'
// }

import { INavBlockItem } from './interfaces';

export interface Route {
    title: string;
    url: string;
    uniqueKey?: string;
}

export const FOOD_ROUTES: Array<Route> = [
    {
        title: 'product.pizza',
        url: '/pizza',
        uniqueKey: 'pizza-key',
    },
    // {
    //     title: 'product.wings',
    //     url: '/wings',
    //     uniqueKey: 'wings-key',
    // },
    // {
    //     title: 'product.potato',
    //     url: '/potato',
    //     uniqueKey: 'potato-key',
    // },
    // {
    //     title: 'product.bread',
    //     url: '/bread',
    //     uniqueKey: 'bread-key',
    // },
    // {
    //     title: 'product.salads',
    //     url: '/salads',
    //     uniqueKey: 'salads-key',
    // },
    // {
    //     title: 'product.sweets',
    //     url: '/sweets',
    //     uniqueKey: 'sweets-key',
    // },
    // {
    //     title: 'product.drinks',
    //     url: '/drinks',
    //     uniqueKey: 'drinks-key',
    // },
    {
        title: 'product.sauce',
        url: '/sauce',
        uniqueKey: 'sauce-key',
    },
];

export const ADDITIONAL_NAV: Array<Route> = [
    {
        title: 'nav.discountCompaign',
        url: '/discount_campaign',
        uniqueKey: 'discount_campaign-key',
    },
    {
        title: 'nav.news',
        url: '/news',
        uniqueKey: 'news-key',
    },
];

export const MOBILE_NAV_ROUTES: Array<Route> = [
    {
        title: 'Проверьте адрес доставки',
        url: '/restaurants',
        uniqueKey: 'restaurants-key',
    },
    {
        title: 'Условия доставки',
        url: '/terms',
        uniqueKey: 'terms-key',
    },
    {
        title: 'О нас',
        url: '/about',
        uniqueKey: 'about-key',
    },
    {
        title: 'Новости',
        url: '/news',
        uniqueKey: 'news-key',
    },
    {
        title: 'Программа лояльности',
        url: '/loyalty-program',
        uniqueKey: 'loyalty-program-key',
    },
    {
        title: 'Программа лояльности',
        url: '/eco-bonus',
        uniqueKey: 'eco-bonus-key',
    },
    {
        title: 'Программа лояльности',
        url: '/eco-bonus',
        uniqueKey: 'sauce-key',
    },
    {
        title: 'Статус заказа',
        url: '/pizza-tracker',
        uniqueKey: 'pizza-tracker-key',
    },
    {
        title: 'Работа в Domino’s',
        url: '/job',
        uniqueKey: 'job-key',
    },
    {
        title: 'Оставить отзыв',
        url: '/feedback',
        uniqueKey: 'feedback-key',
    },
    {
        title: 'Контакты',
        url: '/contacts',
        uniqueKey: 'contacts-key',
    },
    {
        title: 'Арендодателям',
        url: '/landlords',
        uniqueKey: 'landlords-key',
    },
    {
        title: 'Поставщикам',
        url: '/suppliers',
        uniqueKey: 'suppliers-key',
    },
    {
        title: 'Войти / зарегистрироваться',
        url: '/user',
        uniqueKey: 'user-key',
    },
];

export const FOOTER_NAV_ITEMS: INavBlockItem[] = [
    {
        title: 'О нас',
        itemLink: '/about',
        links: [
            { linkTitle: 'О пиццерии', link: '/about' },
            { linkTitle: 'Работа', link: '/job' },
        ],
    },
    {
        title: 'Пиццерии',
        itemLink: '/restaurants',
        links: [
            { linkTitle: 'Карта доставки', link: '/restaurants' },
            { linkTitle: 'Условия доставки', link: '/terms' },
        ],
    },
    {
        title: 'Новости',
        itemLink: '/news',
        links: [
            { linkTitle: 'Акции', link: '/discount_campaign' },
            { linkTitle: 'Новости', link: '/news' },
            { linkTitle: 'ECO bonus', link: '/eco-bonus' },
        ],
    },
    {
        title: 'Обратная связь',
        itemLink: '/feedback',
        links: [
            { linkTitle: 'Оставить отзыв', link: '/feedback' },
            { linkTitle: 'Контактные данные', link: '/contacts' },
            { linkTitle: 'Арендадателям', link: '/landlords' },
            { linkTitle: 'Поставщикам', link: '/suppliers' },
        ],
    },
    {
        title: 'Pizza Tracker',
        itemLink: '/pizza-tracker',
        links: [],
    },
];
