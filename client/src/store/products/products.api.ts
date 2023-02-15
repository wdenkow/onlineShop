import axios from 'axios';
import { IProductItem } from '../../common/interfaces';
import { ProductsEnum } from './productsSlice';

export async function getProductsByCategory(category: ProductsEnum): Promise<IProductItem[]> {
    const { data } = await axios.get(`http://localhost:3002/${category}`);

    return data;
}
