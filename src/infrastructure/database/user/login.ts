import { UserDatabase } from "../../../domain/interfaces/user/database";
import { ILogin, ILoginParams } from "../../../domain/interfaces/user/login";
import { db } from "../../connection/db";

export class LoginRepository implements ILogin {
    async login(user: ILoginParams): Promise<UserDatabase | null> {
        const existsUser = await db.user.findUnique({ where: { email: user.email }});

        return existsUser;
    }
}