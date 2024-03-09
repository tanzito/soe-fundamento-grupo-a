import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { ProductRepository } from '../../domain/repository/product.repository';
import { Product } from '../../domain/product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[];

  constructor(@Inject('PRODUCT_REPOSITORY') private readonly productRepository: ProductRepository) {
    this.products = this.productRepository.findAll();
  }

}
