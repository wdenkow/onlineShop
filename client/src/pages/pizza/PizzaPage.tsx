import React, { useEffect, useState } from 'react';
import ProductList from '../../components/ProductList';
import ContentContainer from '../../components/ContentContainer';
import Filter from '../../components/Filter';
import TabPanel from '../../components/TabContent/TabContent';
import { IProductItem } from '../../common/interfaces';
import { filterProductsByCategory } from '../../common/utils';

import useStyles from './styles';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    getPizzasProducts,
    getProductsByCategoryThunk,
    ProductsEnum,
} from '../../store/products/productsSlice';

const PizzaPage = () => {
    const [filterValue, setFilterValue] = useState('popularity');
    const [categories, setCategories] = useState<Array<string>>([]);
    const { classes } = useStyles();
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const pizza = useAppSelector(getPizzasProducts);

    const [filteredProducts, setFilteredProducts] = useState<Array<IProductItem[]>>([]);

    useEffect(() => {
        const { categories, productsByCategory } = filterProductsByCategory(pizza);

        setCategories(categories);
        setFilteredProducts(productsByCategory);
    }, [filterValue]);

    useEffect(() => {
        // TODO change it later, it's not good enough
        if (pizza.length === 0) {
            dispatch(getProductsByCategoryThunk(ProductsEnum.PIZZA));
        }
    }, []);

    return (
        <ContentContainer isOnMainPage>
            <div className={classes.filterContainer}>
                <div className={classes.categories}>
                    <h1>{t('product.pizza')}</h1>
                    {/* TODO add links to each category */}
                    {/* {filterValue === 'categories' &&
                        categories.length > 0 &&
                        categories.map((c, i) => {
                            return (
                                <span key={i} style={{ marginRight: '6px' }}>
                                    {c}
                                </span>
                            );
                        })} */}
                </div>
                <Filter value={filterValue} onChange={setFilterValue} />
            </div>
            <TabPanel value={filterValue} panelName="popularity">
                <ProductList products={pizza} />
            </TabPanel>
            <TabPanel value={filterValue} panelName="categories">
                {filteredProducts.map((product, index) => {
                    return <ProductList key={index} products={product} />;
                })}
            </TabPanel>
        </ContentContainer>
    );
};

export default PizzaPage;
