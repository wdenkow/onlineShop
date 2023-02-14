export interface IUserState {
    language: string;
    city: string;
    basket: {
        totalPrice: number;
        totalItems: number;
        orderList: [] | any[];
    };
}
