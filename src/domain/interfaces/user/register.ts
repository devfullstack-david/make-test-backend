import { User } from "../../entities/User";

export interface IRegister {
    register(user: User): Promise<boolean>;
}