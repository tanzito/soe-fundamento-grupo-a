import { OrderItem } from "./order-item";

export interface Order {
    selletId: number;
    clientId?: number;
    portfolioId?: number;
    orderItem: OrderItem[];
    total: number;
}