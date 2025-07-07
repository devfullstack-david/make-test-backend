import { IFactory } from "../../../domain/interfaces/factory";
import { ILoginParams, ILoginReturn } from "../../../domain/interfaces/user/login";
import { LoginUseCase } from "../../../domain/use-cases/user/login";
import { LoginRepository } from "../../../infrastructure/database/user/login";
import { AuthService } from "../../../infrastructure/services/auth-service";

export class LoginFactory implements IFactory<ILoginParams, ILoginReturn> {
    async handle(params: ILoginParams): Promise<ILoginReturn> {
        const useCase = await new LoginUseCase(
            new LoginRepository(),
            new AuthService(),
        );

        return await useCase.execute(params);
    }
}