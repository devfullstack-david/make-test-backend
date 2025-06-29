import { ILogin, ILoginParams } from "../../interfaces/user/login";

export class LoginUseCase {
    constructor (
        private readonly loginRepository: ILogin,
    ) {};

    async execute(user: ILoginParams): Promise<boolean> {
        const existUser = await this.loginRepository.login(user);

        return existUser;
    }
}