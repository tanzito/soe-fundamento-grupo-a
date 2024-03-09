import { Component } from '@angular/core';
import { RouterLink, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { SellerComponent } from '../seller/seller.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SellerComponent, RouterLinkWithHref],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

}
