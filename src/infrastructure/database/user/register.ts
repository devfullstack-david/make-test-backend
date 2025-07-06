import { User } from "../../../domain/entities/User";
import { IRegister } from "../../../domain/interfaces/user/register";
import { db } from "../../connection/db";

export class RegisterRepository implements IRegister {
    async register(user: User): Promise<boolean> {
       const newUser = await db.user.create({
        data: {
            name: user.getName,
            birthday: user.getBirthday,
            email: user.getEmail,
            last_name: user.getLastName,
            password: user.getPassword,
        }
       }); 

       if (!newUser) {
        return false;
       }

       return true;
    }
}