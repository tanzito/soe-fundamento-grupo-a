import { HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";

export interface AuthRepository {
    login(): Observable<HttpResponse<any>> ;
}