import { Portfolio } from "../portfolio";

export interface PortfolioRepository {
    findBySeller(sellerId: number): Portfolio[];
}