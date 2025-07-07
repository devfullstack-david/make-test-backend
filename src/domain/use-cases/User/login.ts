import { IAuthService } from "../../interfaces/auth-service";
import { ILogin, ILoginParams, ILoginReturn } from "../../interfaces/user/login";

export class LoginUseCase {
    constructor (
        private readonly loginRepository: ILogin,
        private readonly authService: IAuthService,
    ) {};

    async execute(user: ILoginParams): Promise<ILoginReturn> {
        const existsUser = await this.loginRepository.login(user);

        if (!existsUser) {
            throw new Error("Usuário inválido");
        }

        const validPassword = await this.authService.comparePassword(
            user.password,
            existsUser.password 
        );

        if (!validPassword) throw new Error("Senha inválida");

        const token = this.authService.generateToken({ id: existsUser.id, email: existsUser.email });
        return {
            existsUser: true,
            token,
        };
    }
}