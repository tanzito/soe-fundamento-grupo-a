import { Component, Inject, OnInit } from '@angular/core';
import { ProductRepository } from '../../domain/repository/product.repository';
import { Product } from '../../domain/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {


  products: Product[];

  constructor(@Inject('PRODUCT_REPOSITORY') private readonly productRepository: ProductRepository) {
    this.products = this.productRepository.findAll();
  }
  classActiveCartera = 'show';
  classActiveVenta = 'hidden';

  ngOnInit(): void {
    this.classActiveCartera = 'show';

  }

  setPortfolio(): void {
    this.classActiveCartera = 'hidden';
  }

  vender(): void {
    this.classActiveVenta = 'show';
    // this.cargarProduct
  }
}
