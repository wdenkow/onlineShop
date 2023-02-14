import React from 'react';
import { useHistory } from 'react-router-dom';
import BasketProduct from '../../components/BasketProduct';
import ButtonCustom from '../../components/Button/Button';
import ContentContainer from '../../components/ContentContainer';
import { clearBasket, getOrderList, getTotalPrice } from '../../store/basket/basketSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

import useStyles from './styles';

export const BasketMobile = () => {
    const { classes, cx } = useStyles();
    const orderList = useAppSelector(getOrderList);
    const totalPrice = useAppSelector(getTotalPrice);
    const history = useHistory();
    const dispatch = useAppDispatch();

    const onClearBasket = () => {
        dispatch(clearBasket());
    };

    return (
        <div className={classes.basketMobile}>
            <ContentContainer className={classes.container}>
                <ul>
                    {orderList.map((item, index) => {
                        return <BasketProduct key={index} item={item} />;
                    })}
                </ul>
            </ContentContainer>
            {/* TODO add later additional product */}
            {/* <div>
                <h2>Add?</h2>
                <ul>
                    <li>additional product</li>
                </ul>
            </div> */}
            <ContentContainer className={cx(classes.container, classes.orderContainer)}>
                <p className={classes.orderInfo}>{`Сумма заказа ${totalPrice} руб.`}</p>
                <ButtonCustom
                    variant="contained"
                    className={classes.orderBtn}
                    onClick={() => {
                        history.push('/basket-order');
                    }}
                >
                    Оформить заказ
                </ButtonCustom>
                <ButtonCustom variant="text" onClick={onClearBasket}>
                    Clear basket
                </ButtonCustom>
            </ContentContainer>
        </div>
    );
};
