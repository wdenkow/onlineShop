import { BasketActionsTypes } from '../basket/interfaces';
import { RootState } from '../store';
import { IUserState } from './interfaces';

const initialState: IUserState = {
    city: 'minsk',
    language: 'ru',
    basket: {
        totalPrice: 0,
        totalItems: 0,
        orderList: [],
    },
};

interface clearBasket {
    type: 'basket/clearBasket';
    payload: {
        totalPrice: number;
        totalItems: number;
        orderList: [] | any[];
    };
}

interface changeLang {
    type: 'user/changeLanguage';
    payload: string;
}

type Actions = changeLang | clearBasket;

export const userSlice = (state = initialState, action: Actions): IUserState => {
    console.log('userReducer-----------');

    switch (action.type) {
        case 'user/changeLanguage':
            return {
                ...state,
                language: action.payload,
            };
        case 'basket/clearBasket':
            return {
                ...state,
                basket: {
                    totalPrice: action.payload.totalPrice,
                    totalItems: action.payload.totalItems,
                    orderList: action.payload.orderList,
                },
            };
        default:
            return state;
    }
};

const setLanguageThunk = (lang: string) => (dispatch: any, getState: () => RootState) => {
    dispatch({ type: 'user/changeLanguage', payload: lang });
};
