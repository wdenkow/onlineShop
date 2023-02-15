import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProductItem } from '../../common/interfaces';
import { RootState } from '../store';
import { getProductsByCategory } from './products.api';

interface IProductsState {
    pizza: any;
    sauce: any;
}

const initialState: IProductsState = {
    pizza: [],
    sauce: [],
};

export enum ProductsEnum {
    PIZZA = 'pizza',
    SAUSE = 'sauce',
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(
            getProductsByCategoryThunk.fulfilled,
            (
                state,
                action: PayloadAction<{
                    category: ProductsEnum;
                    data: IProductItem[];
                }>,
            ) => {
                state[action.payload.category] = [...action.payload.data];
            },
        );
    },
});

export const getProductsByCategoryThunk = createAsyncThunk(
    'products/getProductsByCategoryThunk',
    async (category: ProductsEnum, { rejectWithValue }) => {
        try {
            const data = await getProductsByCategory(category);

            return {
                category,
                data,
            };
        } catch (err) {
            console.log('err', err);
            return rejectWithValue(err);
        }
    },
);

export const getPizzasProducts = (state: RootState) => state.products.pizza;
export const getSaucesProducts = (state: RootState) => state.products.sauce;

export default productsSlice.reducer;
