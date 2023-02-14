import React from 'react';
import { BasketMobile } from './ BasketMobile';
import { BasketDesktop } from './BasketDesctop';

import useStyles from './styles';

// TODO add later additional product
// const basketAdditioanlProducts = [
//     {
//         id: 1,
//         title: 'Салфетка влажная',
//         price: '0.08',
//     },
// ];

const Basket = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.basket}>
            <BasketMobile />
            <BasketDesktop />
        </div>
    );
};

export default Basket;
