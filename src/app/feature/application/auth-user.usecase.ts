import { login } from "../domain/login";
import { AuthRepository } from "../domain/repository/auth.repository";

export class AuthUserUseCase {

    // constructor(private authRepository: AuthRepository) {
        
    // }
    execute(login: login): boolean   {
            return true;
    }
}