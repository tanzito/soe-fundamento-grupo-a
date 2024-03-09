import { Inject, Injectable, inject } from "@angular/core";
import { ProductRepository } from "../domain/repository/product.repository";
import { Product } from "../domain/product";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class ProductRepositoryHttp implements ProductRepository {
    private readonly http: HttpClient = inject(HttpClient);
    constructor() { }
    findAll(): Product[] {
        return [{
            id: 1,
            name: 'tarjeta 10',
            description: 'tarjeta con credito de 10',
            price: 9
        }];
    }

}