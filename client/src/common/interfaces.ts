export interface ILinksInBlockItem {
    linkTitle: string;
    link: string;
}

export interface INavBlockItem {
    title: string;
    itemLink: string;
    links: ILinksInBlockItem[];
}

export enum ProductSizesEnum {
    Small = 'Small',
    Medium = 'Medium',
    Big = 'Big',
}

export type ProductCategory =
    | 'classic'
    | 'favorite'
    | 'premium'
    | 'legend'
    | 'red-price'
    | 'super-price';

export type ProductSize = 'small' | 'medium' | 'big';

export type ProductType = 'classic' | 'thin' | 'hot-dog' | 'cheese-board';

export type AdditonalProductType = 'hot-dog' | 'cheese-board';

interface IWeightAndPrice {
    price: number;
    weight: string;
}

interface IProductInfo {
    [key: string]: {
        [key: string]: IWeightAndPrice;
    };
}

export interface IProductItem {
    id: number;
    imageUrl: string;
    title: string;
    composition: string;
    size: string;
    type: string;
    category: string;
    productInfo: IProductInfo;
    productType?: string;
    price?: number;
    weight?: number;
}

export interface IBasketProductItem {
    id: number;
    imageUrl: string;
    title: string;
    composition: string;
    size: string;
    type: string;
    category: string;
    productInfo: IProductInfo;
    weight: string;
    price: number;
    productId: string;
    productCounter: number;
    additionalProduct?: IAdditionalProduct;
}

export interface IAdditionalProduct {
    id: AdditonalProductType;
    imgUrl: string;
    title: string;
    price: number;
}

export interface ISelectOption {
    id: number;
    value: string;
    label: string;
}

export interface ITabPanel {
    id: number;
    label: string;
    value: string;
}
