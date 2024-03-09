import { Routes } from '@angular/router';
import { HomeComponent } from './feature/delivery/home/home.component';
import { LoginComponent } from './feature/delivery/login/login.component';
import { SellerComponent } from './feature/delivery/seller/seller.component';
import { ProductComponent } from './feature/delivery/product/product.component';
import { PortfolioComponent } from './feature/delivery/portfolio/portfolio.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                component: SellerComponent
            },
            {
                path: 'seller',
                component: SellerComponent
            },
            {
                path: 'product',
                component: ProductComponent
            },
            {
                path: 'portfolio',
                component: PortfolioComponent
            }
        ]
    },
];
