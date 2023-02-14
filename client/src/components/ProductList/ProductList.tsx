import React from 'react';
import { IProductItem } from '../../common/interfaces';
import ProductItem from '../ProductItem';

import useStyles from './styles';

interface Props {
    products: Array<IProductItem>;
}

const ProductList = ({ products }: Props) => {
    const { classes } = useStyles();
    return (
        <ul className={classes.productList}>
            {products.map((item, index) => {
                return (
                    // <li key={index}>
                    <ProductItem
                        category={item.category}
                        key={index}
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        composition={item.composition}
                        size={item.size}
                        type={item.type}
                        productInfo={item.productInfo}
                    />
                    // </li>
                );
            })}
        </ul>
    );
};

export default ProductList;
