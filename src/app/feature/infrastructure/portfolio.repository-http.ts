import { Injectable } from "@angular/core";
import { Portfolio } from "../domain/portfolio";
import { PortfolioRepository } from "../domain/repository/portfolio.repository";



@Injectable({
    providedIn: 'root'
})
export class PortfolioRepositoryHttp implements PortfolioRepository {
    
    async findBySeller(sellerId: number): Promise<Portfolio[]> {
        return [
            {
                id: 1,
                name: 'cartera-01',
                description: 'cartera de zona sur'
            },
            {
                id: 2,
                name: 'cartera-02',
                description: 'cartera de camiri'
            }
        ]
    }

}