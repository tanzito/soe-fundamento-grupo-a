import { Product } from "../product";

export interface ProductRepository {
    findAll(): Product[];
}