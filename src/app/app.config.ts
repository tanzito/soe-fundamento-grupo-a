import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes';
import { ProductRepositoryHttp } from './feature/infrastructure/product.repository-http';
import { PortfolioRepositoryHttp } from './feature/infrastructure/portfolio.repository-http';
import { ClientRepositoryHttp } from './feature/infrastructure/client.repository-http';
import { OrderRepositoryHttp } from './feature/infrastructure/order.repository-http';
import { AuthRepositoryHttp } from './feature/infrastructure/auth.repository-http';

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
  {
    provide: 'ORDER_REPOSITORY',
    useClass: OrderRepositoryHttp
  },

  {
    provide: 'AUTH_REPOSITORY',
    useClass: AuthRepositoryHttp
  },
  provideHttpClient()

  ]
};
