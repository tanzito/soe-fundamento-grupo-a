import { Component, Inject, OnInit } from '@angular/core';
import { ProductRepository } from '../../domain/repository/product.repository';
import { PortfolioRepository } from '../../domain/repository/portfolio.repository';
import { Product } from '../../domain/product';
import { CommonModule } from '@angular/common';
import { Portfolio } from '../../domain/portfolio';

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
  sellerId: number = 1;

  constructor(
    @Inject('PRODUCT_REPOSITORY') private readonly productRepository: ProductRepository,
    @Inject('PORTFOLIO_REPOSITORY') private readonly portfolioRepository: PortfolioRepository
  ) {
    this.products = [];
    this.portfolios = [];

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

  setPortfolio(portfolio: Portfolio): void {
    this.classActiveCartera = 'hidden';
  }

  viewPortfolio(): void {
    this.classActiveCartera = 'show';
  }

  vender(): void {
    this.classActiveVenta = 'show';
    // this.cargarProduct
  }
}
