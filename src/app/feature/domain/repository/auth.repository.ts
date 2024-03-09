import { Login } from "../login";
import { Seller } from "../seller";


export interface AuthRepository {
    login(login: Login): Promise<Seller>;
}