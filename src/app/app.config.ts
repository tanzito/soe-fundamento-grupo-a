import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes';
import { ProductRepositoryHttp } from './feature/infrastructure/product.repository-http';
import { PortfolioRepositoryHttp } from './feature/infrastructure/portfolio.repository-http';
import { ClientRepositoryHttp } from './feature/infrastructure/client.repository-http';

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
  {
    provide: 'CLIENT_REPOSITORY',
    useClass: ClientRepositoryHttp
  },
  provideHttpClient()

  ]
};
