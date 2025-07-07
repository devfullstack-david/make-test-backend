import { Request, Response } from "express";
import { LoginFactory } from "../../../application/factories/user/login";
import { IController } from "../../../domain/interfaces/controller";

export class LoginController 
    implements IController<void> {
        async handle(req: Request, res: Response): Promise<void> {
            try {
                const useCase = new LoginFactory();
                const response = await useCase.handle(req.body);

                res.status(201).json({ 
                    existsUser: response.existsUser,
                    token: response.token,
                })
            } catch (err: any) {
                res.status(400).json({ error: err.message, })
            }
        }
}