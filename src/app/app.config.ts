import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes';
import { ProductRepositoryHttp } from './feature/infrastructure/product.repository-http';
import { HomeComponent } from './feature/delivery/home/home.component';
import { PortfolioRepositoryHttp } from './feature/infrastructure/portfolio.repository-http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  {
    provide: 'PRODUCT_REPOSITORY',
    useClass: ProductRepositoryHttp
  },
  {
    provide: 'PORTFOLIO_REPOSITORY',
    useClass: PortfolioRepositoryHttp
  },
  provideHttpClient()

  ]
};
