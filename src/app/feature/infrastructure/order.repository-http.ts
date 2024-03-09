import { Injectable } from "@angular/core";
import { Order } from "../domain/order";
import { OrderRepository } from "../domain/repository/order.repository";

@Injectable({
    providedIn: 'root'
})
export class OrderRepositoryHttp implements OrderRepository {

    async save(order: Order): Promise<void> {
        console.log(order);
    }

}