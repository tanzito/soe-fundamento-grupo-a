import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthRepository } from '../domain/repository/auth.repository';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class AuthRepositoryHttp implements AuthRepository {

    private readonly http: HttpClient = inject(HttpClient);
    // http://localhost:8000/

    login(): Observable<HttpResponse<any>> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: 'my-auth-token'
            })
        };

        const json = JSON.stringify({
            user: "jterrazas",
            password: "123456789"
        });
        return this.http.post<HttpResponse<any>>('http://localhost:8000/auth/login', json, httpOptions);
    }

}