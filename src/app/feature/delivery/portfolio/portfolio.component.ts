import { Component, Inject, OnInit } from '@angular/core';
import { ProductRepository } from '../../domain/repository/product.repository';
import { PortfolioRepository } from '../../domain/repository/portfolio.repository';
import { Product } from '../../domain/product';
import { CommonModule, JsonPipe } from '@angular/common';
import { Portfolio } from '../../domain/portfolio';
import { ClientRepository } from '../../domain/repository/client.repository';
import { Client } from '../../domain/client';
import { Order } from '../../domain/order';
import { OrderItem } from '../../domain/order-item';
import { OrderRepository } from '../../domain/repository/order.repository';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent implements OnInit {

  classActiveCartera = 'show';
  classActiveVenta = 'hidden';

  order: Order | null;
  products: Product[];
  portfolios: Portfolio[];
  clients: Client[];
  sellerId: number = 1;

  portfolioSelect: Portfolio | null;
  clientSelect: Client | null;


  constructor(
    @Inject('PRODUCT_REPOSITORY') private readonly productRepository: ProductRepository,
    @Inject('PORTFOLIO_REPOSITORY') private readonly portfolioRepository: PortfolioRepository,
    @Inject('CLIENT_REPOSITORY') private readonly clientRepository: ClientRepository,
    @Inject('ORDER_REPOSITORY') private readonly orderRepository: OrderRepository,
  ) {
    this.products = [];
    this.portfolios = [];
    this.clients = [];
    this.order = null;
    this.portfolioSelect = null;
    this.clientSelect = null;
  }


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
    this.portfolioSelect = portfolio;
    this.classActiveCartera = 'hidden';
    this.clients = await this.clientRepository.findByPortfolio(portfolio.id);
  }

  viewPortfolio(): void {
    this.classActiveCartera = 'show';
  }

  vender(client: Client): void {
    this.clientSelect = client;
    this.order = {
      clientId: this.clientSelect?.id,
      portfolioId: this.portfolioSelect?.id,
      orderItem: this.getOrderItem(),
      total: 0,
      selletId: this.sellerId
    };
    console.log('hola')
    this.classActiveVenta = 'show';
  }
  getOrderItem(): OrderItem[] {
    return this.products.map((x) => ({
      product: {
        id: x.id,
        name: x.name,
        description: x.description,
        price: x.price
      },
      count: 0,
      description: '',
      subTotal: 0
    }));
  }

  setCantidad(event: Event, ordenItem: OrderItem): void {
    let count = parseInt((event.target as HTMLInputElement).value);
    ordenItem.subTotal = count * ordenItem.product.price;
    ordenItem.count = count;
    let total: number = 1;
    this.order?.orderItem.forEach(x => {
      total = total + x.subTotal;
    });
    this.order!.total = total;

  }

  cancelOrder(): void {
    this.classActiveVenta = 'hidden';
  }

  saveOrder(): void {
    this.classActiveVenta = 'hidden';
    if (this.order != null) {
      this.orderRepository.save(this.order);
    }
  }
}
