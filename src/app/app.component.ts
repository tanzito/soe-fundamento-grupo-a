import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductRepository } from './feature/domain/repository/product.repository';
import { Product } from './feature/domain/product';
import { ProductRepositoryHttp } from './feature/infrastructure/product.repository-http';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  private products: Product[] = [];
  constructor(@Inject('PRODUCT_REPOSITORY') private readonly productRepository: ProductRepository) {

  }
  ngOnInit(): void {
    this.products = this.productRepository.findAll();
    console.log(this.products);
  }

  title = 'tigo-sales';
}
