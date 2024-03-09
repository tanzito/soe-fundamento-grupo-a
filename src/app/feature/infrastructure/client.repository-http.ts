import { Injectable, inject } from "@angular/core";
import { Client } from "../domain/client";
import { ClientRepository } from "../domain/repository/client.repository";
import { HttpClient } from "@angular/common/http";
import { ClientDto } from "./dto/client.dto";
import { lastValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ClientRepositoryHttp implements ClientRepository {

    private readonly http: HttpClient = inject(HttpClient);

    async findByPortfolio(portfolioId: number): Promise<Client[]> {

        const responde = await lastValueFrom(this.http.get<ClientDto[]>(`http://localhost:8000/cliente/ruta/${portfolioId}`));

        return responde.map(x => ({
            id: x.id,
            name: x.nombre,
            lastname: x.apellido,
            address: x.apellido
        }));
    }

}