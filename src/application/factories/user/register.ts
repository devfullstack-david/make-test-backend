import { UserProps } from "../../../domain/entities/User";
import { IFactory } from "../../../domain/interfaces/factory";
import { RegisterUseCase } from "../../../domain/use-cases/user/register";
import { RegisterRepository } from "../../../infrastructure/database/user/register";
import { AuthService } from "../../../infrastructure/services/auth-service";

export class RegisterFactory implements IFactory<UserProps, boolean> {
    async handle(params: UserProps): Promise<boolean> {
        const useCase = await new RegisterUseCase(
            new RegisterRepository(),
            new AuthService(),
        );

        return await useCase.execute(params);
    }
}