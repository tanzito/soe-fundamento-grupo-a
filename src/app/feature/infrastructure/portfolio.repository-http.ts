import { Injectable, inject } from "@angular/core";
import { Portfolio } from "../domain/portfolio";
import { PortfolioRepository } from "../domain/repository/portfolio.repository";
import { PortfolioDto } from "./dto/portfolio.dto";
import { HttpClient } from "@angular/common/http";
import { lastValueFrom } from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class PortfolioRepositoryHttp implements PortfolioRepository {

    private readonly http: HttpClient = inject(HttpClient);

    async findBySeller(sellerId: number): Promise<Portfolio[]> {

        const responde = await lastValueFrom(this.http.get<PortfolioDto[]>('http://localhost:8000/ruta/'));

        return responde.map(x => ({
            id: x.id,
            name: x.nombre,
            description: '',
        }));
    }

}