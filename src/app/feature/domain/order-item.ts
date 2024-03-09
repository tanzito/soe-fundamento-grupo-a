import { Product } from "./product";

export interface OrderItem {
    product: Product;
    count: number;
    subTotal: number;
    description: string;
}