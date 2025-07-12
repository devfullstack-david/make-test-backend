import { Request, Response } from "express";
import { IController } from "../../../domain/interfaces/controller";
import { RegisterFactory } from "../../../application/factories/user/register";

export class RegisterController implements IController<void> {
    async handle(req: Request, res: Response): Promise<void> {
        try {
            const useCase = new RegisterFactory();
            const existsUser = await useCase.handle(req.body.params);

            res.status(201).json({ existsUser, });
        } catch (error: any) {
            res.status(400).json({ error: error.message })
        }
    }
}