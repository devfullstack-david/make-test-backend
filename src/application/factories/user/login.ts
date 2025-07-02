import { IFactory } from "../../../domain/interfaces/factory";
import { ILoginParams } from "../../../domain/interfaces/user/login";
import { LoginUseCase } from "../../../domain/use-cases/user/login";
import { LoginRepository } from "../../../infrastructure/database/user/login";

export class LoginFactory implements IFactory<ILoginParams, boolean> {
    async handle(params: ILoginParams): Promise<boolean> {
        const useCase = await new LoginUseCase(
            new LoginRepository(),
        );

        return await useCase.execute(params);
    }
}