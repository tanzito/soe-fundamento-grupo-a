import { ItemDto } from "./item.dto";

export interface OrderDto {

    cliente: number,
    usuario: number,
    observacion: string,
    items: ItemDto[]

}