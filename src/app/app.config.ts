import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'

import { routes } from './app.routes';
import { ProductRepositoryHttp } from './feature/infrastructure/product.repository-http';
import { HomeComponent } from './feature/delivery/home/home.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  {
    provide: 'PRODUCT_REPOSITORY',
    useClass: ProductRepositoryHttp
  },
  provideHttpClient()

  ]
};
