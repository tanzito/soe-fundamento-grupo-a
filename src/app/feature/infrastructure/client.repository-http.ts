import { Injectable } from "@angular/core";
import { Client } from "../domain/client";
import { ClientRepository } from "../domain/repository/client.repository";

@Injectable({
    providedIn: 'root'
})
export class ClientRepositoryHttp implements ClientRepository {

    async findByPortfolio(portfolioId: number): Promise<Client[]> {
        return [
            {
                id: 1,
                name: 'jonatan',
                lastname: 'terrazas',
                address: 'cuchilla'
            },
            {
                id: 2,
                name: 'gustavo',
                lastname: 'cabrera',
                address: 'camiri calle 4'
            }
            , {
                id: 3,
                name: 'ivan',
                lastname: 'castillo',
                address: 'mairana calle 5'
            }
        ]
    }

}