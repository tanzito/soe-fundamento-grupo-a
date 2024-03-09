import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthRepository } from '../domain/repository/auth.repository';
import { Injectable, inject } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { Seller } from '../domain/seller';
import { Login } from '../domain/login';


@Injectable({
    providedIn: 'root'
})
export class AuthRepositoryHttp implements AuthRepository {

    private readonly http: HttpClient = inject(HttpClient);
    login(login: Login): Promise<Seller> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        };

        const json = JSON.stringify({
            user: login.email,
            password: login.password
        });
        return lastValueFrom(this.http.post<Seller>('http://localhost:8000/auth/login', json, httpOptions));
    }

}