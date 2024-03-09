import { AuthRepository } from '../domain/repository/auth.repository';
export class AuthRepositoryHttp implements AuthRepository {


    async login(): Promise<boolean> {
        return true;
    }

}