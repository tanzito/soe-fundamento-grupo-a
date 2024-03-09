import { Client } from "../client";

export interface ClientRepository {
    findByPortfolio(portfolioId: number): Promise<Client[]>;
}