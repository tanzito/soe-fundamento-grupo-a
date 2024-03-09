import { Inject, Injectable, inject } from "@angular/core";
import { ProductRepository } from "../domain/repository/product.repository";
import { Product } from "../domain/product";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { lastValueFrom } from "rxjs";
import { ProductDto } from "./dto/product.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductRepositoryHttp implements ProductRepository {
    private readonly http: HttpClient = inject(HttpClient);
    constructor() { }
    async findAll(): Promise<Product[]> {

        const responde = await lastValueFrom(this.http.get<ProductDto[]>('http://localhost:8000/item/'));

        return responde.map(x => ({
            id: x.id,
            name: x.nombre,
            description: x.descripcion,
            price: x.price
        }));

    }


}