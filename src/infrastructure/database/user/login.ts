import { ILogin, ILoginParams } from "../../../domain/interfaces/user/login";
import { db } from "../../connection/db";

export class LoginRepository implements ILogin {
    async login(user: ILoginParams): Promise<boolean> {
        const existsUser = db.user.findUnique({ where: { email: user.email, password: user.password }});

        if (existsUser) return true;

        return false;
    }
}