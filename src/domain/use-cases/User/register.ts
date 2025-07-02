import { User, UserProps } from "../../entities/User";
import { IAuthService } from "../../interfaces/auth-service";
import { IRegister } from "../../interfaces/user/register";

export class RegisterUseCase {
    constructor (
        private readonly registerRepository: IRegister,
        private readonly authService: IAuthService,
    ) {};

    async execute(user: UserProps): Promise<boolean> {
        const newUser = new User(user);
        const hashedPassword = await this.authService.encryptPassword(user.password);

        newUser.setPassword = hashedPassword;

        const createdUser = await this.registerRepository.register(newUser);

        return createdUser;
    };
}