import { Product } from "./product";

export interface Seller {
    _id?: string
    name: string
    address: string
    products: Product[]
}