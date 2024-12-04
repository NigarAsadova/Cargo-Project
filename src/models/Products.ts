export interface Category {
    id: number;
    name : string;
    image : string;
    creationAt : string;
    updatedAt : string;
}

export interface Products {
    id : number;
    title : string;
    description : string;
    price : number;
    images : string;
    creationAt : string;
    updatedAt : string;
    category : Category;
}

export interface ProductsState {
    products : Products[];
    error : string | null;
    isLoading : boolean;
}

export interface CategoryState {
    categories : Category[];
    error : string | null;
    isLoading : boolean;
}

