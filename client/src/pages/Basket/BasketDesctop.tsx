import React from 'react';
import { useTranslation } from 'react-i18next';
import BasketProduct from '../../components/BasketProduct';
import ContentContainer from '../../components/ContentContainer';
import PayForm from '../../components/Forms/PayForm';
import { getOrderList } from '../../store/basket/basketSlice';
import { useAppSelector } from '../../store/hooks';

import useStyles from './styles';

export const BasketDesktop = () => {
    const { classes } = useStyles();
    const orderList = useAppSelector(getOrderList);
    const { t } = useTranslation();

    return (
        <ContentContainer className={classes.basketDesktop}>
            <div className={classes.leftContent}>
                <h2>{t('basket.checkout')}</h2>
                <PayForm />
            </div>
            <div className={classes.rightContent}>
                <h2>{t('basket.orderDetails')}</h2>
                <ul>
                    {orderList.map((item, index) => {
                        return <BasketProduct key={index} item={item} />;
                    })}
                </ul>
            </div>
        </ContentContainer>
    );
};
