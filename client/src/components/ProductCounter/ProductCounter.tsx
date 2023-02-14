import React from 'react';
import ButtonCustom from '../Button/Button';

import useStyles from './styles';

interface Props {
    value: number;
    setValue: (value: number) => void;
    onAddItem: () => void;
    onRemoveItem: () => void;
}

const ProductCounter = ({ value, setValue, onAddItem, onRemoveItem }: Props) => {
    const { classes } = useStyles();

    const onAddItemClick = () => {
        onAddItem();
        setValue(value + 1);
    };

    const onRemoevItemClick = () => {
        onRemoveItem();
        setValue(value - 1);
    };

    return (
        <div className={classes.container}>
            <ButtonCustom
                className={classes.button}
                variant="contained"
                onClick={onRemoevItemClick}
            >
                -
            </ButtonCustom>
            <span>{value}</span>
            <ButtonCustom className={classes.button} variant="contained" onClick={onAddItemClick}>
                +
            </ButtonCustom>
        </div>
    );
};

export default ProductCounter;
