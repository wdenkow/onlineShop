import { IProductItem } from './interfaces';

export const filterProductsByCategory = (products: Array<IProductItem>) => {
    const productsByCategory: { [key: string]: IProductItem[] } = {};
    const categories = Array.from(
        new Set(
            products.map((item) => {
                productsByCategory[item.category] = [];
                return item.category;
            }),
        ),
    );

    for (const cat in productsByCategory) {
        products.forEach((item) => {
            if (item.category === cat) {
                productsByCategory[cat].push(item);
            }
        });
    }
    return {
        categories: categories,
        productsByCategory: Object.values(productsByCategory),
    };
};
