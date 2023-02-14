import React from 'react';
import ButtonCustom from '../Button/Button';
import { useHistory } from 'react-router-dom';
import BasketProduct from '../BasketProduct';

import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { getOrderList, getTotalPrice } from '../../store/basket/basketSlice';
import { useAppSelector } from '../../store/hooks';

interface Props {
    onClose: (value: boolean) => void;
}

const BasketModal = ({ onClose }: Props): JSX.Element => {
    const { classes } = useStyles();
    const orderList = useAppSelector(getOrderList);
    const totalPrice = useAppSelector(getTotalPrice);
    const history = useHistory();
    const { t } = useTranslation();

    const handleClose = () => {
        onClose(false);
    };

    return (
        <div className={classes.modal}>
            <div className={classes.closeBasketContainer}>
                <button className={classes.closeBasketBtn} onClick={handleClose}>
                    {t('basket.showLess')}
                </button>
            </div>
            <ul className={classes.basketList}>
                {orderList?.length > 0 &&
                    orderList.map((item, index) => {
                        return <BasketProduct key={index} item={item} />;
                    })}
            </ul>
            <div className={classes.orderContainer}>
                <p className={classes.orderInfo}>{t('basket.totalPrice', { price: totalPrice })}</p>
                <ButtonCustom
                    variant="contained"
                    className={classes.orderBtn}
                    onClick={() => {
                        history.push('/basket');
                    }}
                >
                    {t('basket.order')}
                </ButtonCustom>
            </div>
        </div>
    );
};

export default BasketModal;
