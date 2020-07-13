export interface IProduct {
    title: string;
    imageUrl: string;
    price: number;
    categories: ICategory[];
    category: string;
    id: string;
    count: number;
    isOpen: boolean;
    seqN: number;
    inStock: number;
    quantity?: number;
}

export interface ICategoryMenu {
    categoryName: string;
    isActive: boolean;
    id: string;
    cssClass?: string;
    collectionSize: number;
}

export interface IListGroup {
    list: any[];
    key: string;
    isAsync?: boolean;
}

export interface ICategory {
    name: string;
    id: string;
}

export interface IBucketMap {
    name: string;
    quantity: number;
}

export interface IPagination {
    name: string;
    lastPageloaded: number;
}