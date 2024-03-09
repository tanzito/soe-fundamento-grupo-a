import { Component } from '@angular/core';
import { Seller } from '../../domain/seller';

@Component({
  selector: 'app-seller',
  standalone: true,
  imports: [],
  templateUrl: './seller.component.html',
  styleUrl: './seller.component.css'
})
export class SellerComponent {

  seller: Seller;
  constructor() {
    this.seller = JSON.parse(localStorage.getItem('seller')!);
  }
}
