import { Component, Inject, OnInit } from '@angular/core';
import { ProductRepository } from '../../domain/repository/product.repository';
import { PortfolioRepository } from '../../domain/repository/portfolio.repository';
import { Product } from '../../domain/product';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../domain/portfolio';
import { ClientRepository } from '../../domain/repository/client.repository';
import { Client } from '../../domain/client';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {


  products: Product[];
  portfolios: Portfolio[];
  clients: Client[];
  sellerId: number = 1;

  constructor(
    @Inject('PRODUCT_REPOSITORY') private readonly productRepository: ProductRepository,
    @Inject('PORTFOLIO_REPOSITORY') private readonly portfolioRepository: PortfolioRepository,
    @Inject('CLIENT_REPOSITORY') private readonly clientRepository: ClientRepository,
  ) {
    this.products = [];
    this.portfolios = [];
    this.clients = [];

  }
  classActiveCartera = 'show';
  classActiveVenta = 'hidden';

  ngOnInit(): void {
    this.classActiveCartera = 'show';
    this.productRepository.findAll().then(r => {
      this.products = r;
    });
    this.portfolioRepository.findBySeller(this.sellerId).then(r => {
      this.portfolios = r;
    });

  }

  async setPortfolio(portfolio: Portfolio): Promise<void> {
    this.classActiveCartera = 'hidden';
    this.clients = await this.clientRepository.findByPortfolio(portfolio.id);
  }

  viewPortfolio(): void {
    this.classActiveCartera = 'show';
  }

  vender(client: Client): void {
    this.classActiveVenta = 'show';
    // this.cargarProduct
  }
}
