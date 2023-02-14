import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import { AdditonalProductType, ProductType } from '../../../common/interfaces';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

interface Props {
    onClickAdd: (value: string) => void;
    imgUrl: string;
    title: string;
    price: number;
    id: string;
    selectedType?: string;
    defaultType?: string;
    productId: string;
}

const AdditionalProduct = ({
    productId,
    defaultType = 'classic',
    selectedType,
    id,
    imgUrl,
    title,
    price,
    onClickAdd,
}: Props) => {
    const { classes } = useStyles();
    const [isAdd, setIsAdd] = useState<boolean>(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (id !== selectedType) {
            setIsAdd(false);
        }

        if (id === selectedType) {
            setIsAdd(true);
        }

        if (isAdd === false && id === selectedType && selectedType === 'classic') {
            onClickAdd(defaultType as ProductType);
        }
    }, [id, selectedType, isAdd]);

    const onClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsAdd(event.target.checked);
        onClickAdd(id as AdditonalProductType);
        if (event.target.checked === false && id === selectedType) {
            onClickAdd(defaultType as ProductType);
        }
    };

    return (
        <div className={classes.item}>
            <Checkbox checked={isAdd} className={classes.addBtn} onChange={onClick} />
            <img className={classes.image} src={imgUrl} alt="" />
            <div className={classes.infoBlock}>
                <span className={classes.title}>{t(title)}</span>
                <span className={classes.price}>{t('product.price', { price: price })}</span>
            </div>
        </div>
    );
};

export default AdditionalProduct;
