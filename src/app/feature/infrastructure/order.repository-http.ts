import { Injectable, inject } from "@angular/core";
import { Order } from "../domain/order";
import { OrderRepository } from "../domain/repository/order.repository";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { OrderDto } from "./dto/order.dto";
import { ItemDto } from "./dto/item.dto";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class OrderRepositoryHttp implements OrderRepository {
    private readonly http: HttpClient = inject(HttpClient);

    async save(order: Order): Promise<void> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        };

        const orderDto: OrderDto = {
            usuario: order.selletId,
            cliente: order.clientId!,
            observacion: order.description,
            items: order.orderItem.map(x => ({
                cantidad: x.count,
                precio: x.product.price,
                id: x.product.id
            })),


        }
        return lastValueFrom(this.http.post<void>('http://localhost:8000/venta', JSON.stringify(orderDto), httpOptions));

    }

}