import React, { useEffect, useMemo, useState } from 'react';
import { IBasketProductItem, IProductItem } from '../../common/interfaces';
import DialogOS from '../DialogOS';
import SelectOS from '../SelectOS';
import ButtonCustom from '../Button/Button';
import {
    addItemToBasket,
    getOrderList,
    removeItemFromBasket,
} from '../../store/basket/basketSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import ProductCounter from '../ProductCounter';
import AdditionalProduct from './AdditionalProduct';
import { ADDITIONAL_PRODUCTS, PIZZA_SIZES, PIZZA_TYPES } from '../../common/mockedData';
import { useTranslation } from 'react-i18next';

import useStyles from './styles';

const ProductItem = (product: IProductItem) => {
    const dispatch = useAppDispatch();
    const orderList = useAppSelector(getOrderList);
    const { t } = useTranslation();

    const { classes, cx } = useStyles();
    const [currentType, setCurrentType] = useState<string>('classic');
    const [currentSize, setCurrentSize] = useState<string>('medium');
    const [isOpenDialog, setIsOpenDialog] = useState<boolean>(false);
    const [counter, setCounter] = useState<number>(0);

    const { id, imageUrl, title, composition, productInfo, price, weight } = product;
    const currentPrice = productInfo?.[currentSize]?.[currentType].price || price;
    const currentWeight = productInfo?.[currentSize]?.[currentType].weight || weight;
    const ivSimpleProductCart = !!productInfo;

    const productId = useMemo(() => {
        return `${title}${currentType}${currentSize}${currentPrice}${currentWeight}`;
    }, [title, currentType, currentSize, currentPrice, currentWeight]);
    const currentProduct = orderList.find((item) => item.productId === productId);

    useEffect(() => {
        if (!currentProduct) {
            setCounter(0);
        } else {
            setCounter(currentProduct.productCounter);
        }
    }, [currentProduct, currentProduct?.productCounter]);

    const onClick = () => {
        setCounter((prev) => prev + 1);
        dispatch(
            addItemToBasket({
                id,
                imageUrl,
                title,
                type: currentType,
                size: currentSize,
                price: currentPrice,
                weight: currentWeight,
                productId,
                productCounter: 1,
                composition,
                productInfo,
            } as IBasketProductItem),
        );
    };

    const onRemoevItemClick = () => {
        if (currentProduct) {
            dispatch(removeItemFromBasket(currentProduct?.productId));
        }
    };

    return (
        <>
            <DialogOS open={isOpenDialog} setIsOpen={setIsOpenDialog}>
                <div className={cx(classes.product, isOpenDialog && classes.modalProduct)}>
                    <button className={classes.imageBlock}>
                        <div className={classes.imageWrapper}>
                            <img className={classes.image} src={imageUrl} alt="" />
                        </div>
                    </button>
                    <div className={classes.content}>
                        <h3 className={cx(classes.title, isOpenDialog && classes.modalTitle)}>
                            {title}
                        </h3>
                        {ivSimpleProductCart && (
                            <>
                                <p
                                    className={cx(
                                        classes.composition,
                                        isOpenDialog && classes.modalComposition,
                                    )}
                                >
                                    {composition}
                                </p>
                                <div className={classes.selects}>
                                    <SelectOS
                                        className={classes.select}
                                        options={PIZZA_SIZES}
                                        defaultValue="medium"
                                        onChange={setCurrentSize}
                                    />
                                    <SelectOS
                                        className={classes.select}
                                        value={currentType}
                                        options={PIZZA_TYPES}
                                        defaultValue="classic"
                                        onChange={setCurrentType}
                                    />
                                </div>
                                <div className={classes.additionalProducts}>
                                    {ADDITIONAL_PRODUCTS.map((product, i) => {
                                        const { id, imgUrl, price, title } = product;
                                        return (
                                            <AdditionalProduct
                                                productId={productId}
                                                selectedType={currentType}
                                                onClickAdd={setCurrentType}
                                                key={i}
                                                id={id}
                                                imgUrl={imgUrl}
                                                title={title}
                                                price={price}
                                            />
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        <div className={classes.bottomContent}>
                            <div>
                                <p className={classes.price}>{currentPrice}</p>
                                <p className={classes.weight}>{currentWeight}</p>
                            </div>
                            <div>
                                {counter >= 1 ? (
                                    <ProductCounter
                                        value={counter}
                                        setValue={setCounter}
                                        onAddItem={onClick}
                                        onRemoveItem={onRemoevItemClick}
                                    />
                                ) : (
                                    <ButtonCustom variant="contained" onClick={onClick}>
                                        в корзину
                                    </ButtonCustom>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </DialogOS>

            <div className={classes.product}>
                <button className={classes.imageBlock} onClick={() => setIsOpenDialog(true)}>
                    <div className={classes.imageWrapper}>
                        <img className={classes.image} src={imageUrl} alt="" />
                    </div>
                </button>
                <div className={classes.content}>
                    <h3 className={classes.title}>{t(title)}</h3>
                    {ivSimpleProductCart && (
                        <>
                            <p className={classes.composition}>{t(composition)}</p>
                            <div className={classes.selects}>
                                <SelectOS
                                    className={classes.select}
                                    options={PIZZA_SIZES}
                                    defaultValue="medium"
                                    onChange={setCurrentSize}
                                />
                                <SelectOS
                                    className={classes.select}
                                    value={currentType}
                                    options={PIZZA_TYPES}
                                    defaultValue="classic"
                                    onChange={setCurrentType}
                                />
                            </div>
                            <div className={classes.additionalProducts}>
                                {ADDITIONAL_PRODUCTS.map((product, i) => {
                                    const { id, imgUrl, price, title } = product;
                                    return (
                                        <AdditionalProduct
                                            productId={productId}
                                            selectedType={currentType}
                                            onClickAdd={setCurrentType}
                                            key={i}
                                            id={id}
                                            imgUrl={imgUrl}
                                            title={title}
                                            price={price}
                                        />
                                    );
                                })}
                            </div>
                        </>
                    )}
                    <div className={classes.bottomContent}>
                        <div>
                            <p className={classes.price}>
                                {t('product.price', { price: currentPrice })}
                            </p>
                            <p className={classes.weight}>
                                {t('product.weight', { weight: currentWeight })}
                            </p>
                        </div>
                        <div>
                            {counter >= 1 ? (
                                <ProductCounter
                                    value={counter}
                                    setValue={setCounter}
                                    onAddItem={onClick}
                                    onRemoveItem={onRemoevItemClick}
                                />
                            ) : (
                                <ButtonCustom variant="contained" onClick={onClick}>
                                    {t('inBasket')}
                                </ButtonCustom>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductItem;
